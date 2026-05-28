namespace Lightmatic_Backend.DMX
{
    public class DMXUniverse
    {
        private DMXChannel[] _channels = new DMXChannel[512];

        public void SetChannel(int i, DMXChannel channel)
        {
            _channels[i] = channel;
        }

        public void SetChannels(DMXChannel[] channels)
        {
            _channels = channels;
        }

        public byte[] GetChannelValues() 
        {
            byte[] vals = new byte[512];
            for (int i = 0; i < _channels.Length; i++)
            {
                DMXChannel c = _channels[i];
                vals[i] = c.GetVal();
            }
            return vals;
        }
    }
}
