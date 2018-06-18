using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeckEngine.App.Controls.TreeViewer
{
    /// <summary>
    ///  ITreeLabel models a single node - contains it's descriptions and children
    /// </summary>
    public interface ITreeLabel : INotifyPropertyChanged
    {
        int Index { get; }
        IEnumerable<ITreeLabel> Children { get; }
    }
}
