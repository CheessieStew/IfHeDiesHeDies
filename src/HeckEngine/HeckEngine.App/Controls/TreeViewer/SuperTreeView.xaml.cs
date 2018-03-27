using System;
using System.Collections.Generic;
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
    /// <summary>
    /// Interaction logic for TreeView.xaml
    /// </summary>
    public partial class SuperTreeView : UserControl
    {
        public SimpleTreeNode Tree { get; private set; } 
            = new SimpleTreeNode(
                new TreeLabel()
                {
                    Name = "asdf",
                    Description = "fdsa"
                }
            );
        public SuperTreeView()
        {
            Tree.Add(new SimpleTreeNode(
                new TreeLabel()
                {
                    Name = "asdf",
                    Description = "fdsa"
                }));
            Tree.Add(new SimpleTreeNode(
                new TreeLabel()
                {
                    Name = "asdf",
                    Description = "fdsa"
                }));
            InitializeComponent();
        }
    }
}
