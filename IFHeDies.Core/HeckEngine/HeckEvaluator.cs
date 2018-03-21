using Antlr4.Runtime;
using Antlr4.Runtime.Misc;
using IfHeDies.Core.HeckEngine.Generated;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IFHeDies.Core.HeckEngine
{
    class heckEvaluator
    {
        public static StringBuilder CheckGrammar(IEnumerable<FileInfo> files)
        {
            var sb = new StringBuilder();
            foreach (var file in files)
            {
                var lexer = new heckLexer(new AntlrFileStream(file.FullName));
                var parser = new heckParser(new CommonTokenStream(lexer));
                new heckBaseVisitor<StringBuilder>().Visit(parser.file());
            }
            return null;
        }
    }

    class heckVisitor : heckBaseVisitor<heckObject>
    {

        public override heckObject VisitFile([NotNull] heckParser.FileContext context)
        {
            return base.VisitFile(context);
        }
    }
}
