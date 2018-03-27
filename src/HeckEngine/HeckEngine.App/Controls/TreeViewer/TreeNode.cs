using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeckEngine.App.Controls.TreeViewer
{

    public interface ITreeLabel : INotifyPropertyChanged
    {
        string Name { get; }
        int  Index { get; }
        string Description { get; }
    }

    public class TreeNode<T> : INotifyPropertyChanged, IEnumerable<TreeNode<T>> where T : ITreeLabel
    {
        public T Element { get; private set; }
        public int Index => Element.Index;
        public string Name => Element.Name;
        public string Description => Element.Description;

        private HashSet<TreeNode<T>> _children = new HashSet<TreeNode<T>>();
        public IEnumerable<TreeNode<T>> Children => _children;

        public TreeNode(T element)
        {
            Element = element;
            element.PropertyChanged += (sender, args) => PropertyChanged?.Invoke(sender, args);
        }

        public TreeNode(T element, Func<T, IEnumerable<TreeNode<T>>> childAccessor) : this(element)
        {
            foreach(var child in childAccessor(element))
            {
                _children.Add(child);
            }
        }

        public void Add(TreeNode<T> node)
        {
            _children.Add(node);
            OnPropertyChanged(nameof(Children));
        }

        public void Remove(TreeNode<T> node)
        {
            _children.Remove(node);
            OnPropertyChanged(nameof(Children));
        }

        public IEnumerator<TreeNode<T>> GetEnumerator()
        {
            foreach(var c in Children)
            {
                foreach(var gc in c)
                {
                    yield return gc;
                }
            }
        }

        IEnumerator IEnumerable.GetEnumerator() => this.GetEnumerator();

        public event PropertyChangedEventHandler PropertyChanged;
        private void OnPropertyChanged(string property) => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(property));

    }

    public class TreeLabel : ITreeLabel
    {
        private string _description;
        public string Description
        {
            get => _description;
            set
            {
                _description = value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Description)));
            }
        }

        private string _name;
        public string Name
        {
            get => _name;
            set
            {
                _name = value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Name)));
            }
        }

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


        public event PropertyChangedEventHandler PropertyChanged;
    }

    public class SimpleTreeNode : TreeNode<TreeLabel>
    {

        public SimpleTreeNode() : base(new TreeLabel())
        { }
        public SimpleTreeNode(TreeLabel l) : base(l)
        {

        }
    }

}
