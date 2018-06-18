using HeckEngine.App.Character;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;

namespace HeckEngine.App.Controls.CharacterView.Design
{
    public class DesignContainerProperty : ContainterProperty
    {
        public DesignContainerProperty()
        {
            Name = "Health";
            BarColor = "#ff0000";
        }
    }
}
