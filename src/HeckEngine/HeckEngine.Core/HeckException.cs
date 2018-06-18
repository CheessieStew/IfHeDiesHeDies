using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeckEngine.Core
{
    class HeckException : Exception
    {
    }

    class BadArgumentException : HeckException
    {
    }
}
