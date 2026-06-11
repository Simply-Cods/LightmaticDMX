using Dmx.Net.Common;
using Dmx.Net.Controllers;
using Lightmatic_Backend.DMX;
using System.Runtime.CompilerServices;

namespace Lightmatic_Backend.Services
{
    public class OpenDMXService : IDMXService
    {
        private readonly ILogger<OpenDMXService> _logger;

        private DMXUniverse _universe = new();
        private int _interval;
        private int _universeNumber;
        private DmxTimer _timer;
        private IController _controller;

        public DMXUniverse DMXUniverse => _universe;
        public int Interval => _interval;

        //public OpenDMXService(ILogger<OpenDMXService> logger, int timerInterval, int universeNumber)
        //{
        //    _logger = logger;
        //    _universeNumber = universeNumber;
        //    _interval = timerInterval;
        //    _timer = new DmxTimer(timerInterval);
        //    _controller = ControllerManager.RegisterController<OpenDmxController>(universeNumber, _timer);
        //}

        public OpenDMXService(ILogger<OpenDMXService> logger)
        {
            _logger = logger;
            _universeNumber = 0;
            _interval = 22;
            _timer = new DmxTimer(_interval);
            _controller = ControllerManager.RegisterController<OpenDmxController>(_universeNumber, _timer);
        }

        public void Dispose()
        {
            _logger.LogDebug("Ending service");
            ControllerManager.UnregisterController(_universeNumber);
            _timer.Dispose();
        }

        public void Start()
        {
            _timer.BeforeUpdate += (s, e) =>
            {
                if (!_controller.IsOpen)
                {
                    try
                    {
                        _controller.Open(0);
                    }
                    catch (IOException)
                    {

                    }
                }

                if (_controller != null) 
                {
                    _logger.LogDebug("Sending values: " + _universe.GetChannelValues());
                    _controller.SetChannelRange(1, _universe.GetChannelValues());
                }
            };

            _logger.LogDebug("Starting service.");

            _controller.Open(0);

            _timer.Start();
        }
    }
}
