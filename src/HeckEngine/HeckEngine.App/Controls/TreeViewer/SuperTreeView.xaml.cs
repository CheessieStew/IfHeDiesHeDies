using HeckEngine.App.Controls.TreeViewer.Design;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace HeckEngine.App.Controls.TreeViewer
{

    public partial class SuperTreeView : UserControl
    {
        public DesignTreeLabel Tree { get; private set; }
            = new DesignTreeLabel();
        public SuperTreeView()
        {            
            InitializeComponent();
        }
    }

}
