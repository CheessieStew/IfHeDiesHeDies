using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeckEngine.App.Controls.TreeViewer.Design
{

    public class DesignTreeLabel : ITreeLabel, INotifyPropertyChanged
    {
        private int _index;
        public int Index
        {
            get => _index;
            set
            {
                _index = value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Index)));
            }
        }

        private List<DesignTreeLabel> _children;
        public IEnumerable<ITreeLabel> Children => _children;

        private string _name;
        public string Name => _name;

        private string _description;
        private string _longDescription;
        bool _open;
        public string Description => _open ? _longDescription : _description;


        private static Random _rng = new Random();
        private DesignTreeLabel(int idx, int depth)
        {
            var count = _rng.Next(0, depth);
            _index = idx;
            _name = new string(Enumerable.Range(0, _rng.Next(3, 6)).Select(_ => (char)_rng.Next(97, 122)).ToArray());
            _description = string.Join(" ",Enumerable.Range(0, 5).Select(_ => _name));
            _longDescription = string.Join(" ", Enumerable.Range(0, 5).Select(_ => _name));
            _children = new List<DesignTreeLabel>(
                Enumerable.Range(0, count)
                .Select(i => new DesignTreeLabel(i, _rng.Next(Math.Max(0, depth - 2), depth))));
            
        }

        public DesignTreeLabel() : this(0,7)
        {
        }
        
        public event PropertyChangedEventHandler PropertyChanged;

        public void OnOpen()
        {
            _open = true;
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Name)));
        }

        public void OnClose()
        {
        }

        public override string ToString() => Name;

    }
}
