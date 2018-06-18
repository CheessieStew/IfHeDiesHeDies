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
    public partial class NodeView : UserControl
    {
        public static readonly DependencyProperty ChildIndentProperty = DependencyProperty.Register(
            "ChildIndent",
            typeof(double),
            typeof(NodeView),
            new FrameworkPropertyMetadata(50.0));


        public double ChildIndent
        {
            get { return (double)GetValue(ChildIndentProperty); }
            set { SetValue(ChildIndentProperty, value); }
        }

        public static readonly DependencyProperty DescriptionTemplateProperty =
            DependencyProperty.Register(
                "DescriptionTemplate",
                typeof(ControlTemplate),
                typeof(NodeView),
                new UIPropertyMetadata(null));
        public ControlTemplate DescriptionTemplate
        {
            get { return (ControlTemplate)(GetValue(DescriptionTemplateProperty)); }
            set { SetValue(DescriptionTemplateProperty, value); }
        }

        public bool Expanded
        {
            get => Exp.IsExpanded;
            set
            {
                Exp.IsExpanded = value;
            }
        }

        public Thickness ChildMargin => new Thickness(ChildIndent, 2, 2, 2);
        public NodeView()
        {
            InitializeComponent();
            Expanded = true;
        }

        private void Exp_Expanded(object sender, RoutedEventArgs e)
        {

        }
    }
}
