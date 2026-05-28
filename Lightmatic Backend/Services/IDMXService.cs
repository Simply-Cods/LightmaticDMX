using Dmx.Net.Common;
using Lightmatic_Backend.DMX;

namespace Lightmatic_Backend.Services
{
    public interface IDMXService : IDisposable
    { 
        public DMXUniverse DMXUniverse { get; }
        public int Interval { get; }
        public void Start();

    }
}
