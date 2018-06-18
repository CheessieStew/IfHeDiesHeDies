﻿using System;
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

namespace HeckEngine.App.Controls.CharacterView
{
    /// <summary>
    /// Interaction logic for CharacterSheetView.xaml
    /// </summary>
    public partial class CharacterSheetView : UserControl
    {
        public CharacterSheetView()
        {
            InitializeComponent();
            Content.DataContext = new Design.DesignContainerProperty();
        }
    }
}
