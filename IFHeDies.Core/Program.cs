using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IFHeDies.Core
{
    class Program
    {
        static void Main(string[] args)
        {
            HeckEngine.heckEvaluator.CheckGrammar(Directory.GetFiles(
                Directory.GetCurrentDirectory(),
                "*.heck", 
                SearchOption.AllDirectories)
                    .Select(s => new FileInfo(s)));            
        }
    }
}
