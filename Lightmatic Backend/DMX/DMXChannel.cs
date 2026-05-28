namespace Lightmatic_Backend.DMX
{
    public class DMXChannel
    {
        private byte _val = 0;

        public void SetVal(byte val)
        {
            _val = val;
        }

        public byte GetVal()
        {
            return _val;
        }
    }
}
