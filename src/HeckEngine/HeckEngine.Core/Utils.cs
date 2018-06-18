using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeckEngine.Core
{
    public static class Utils
    {
        public static float Clamp(this float f, float min, float max) => Math.Min(Math.Max(0, min), max);
    }
}
