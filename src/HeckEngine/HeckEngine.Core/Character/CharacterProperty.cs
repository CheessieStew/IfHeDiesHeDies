using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

namespace HeckEngine.Core.Character
{
    public abstract class PropertyCollection : IDictionary<string, ICharacterProperty>
    {
        private Dictionary<string, ICharacterProperty> _properties = new Dictionary<string, ICharacterProperty>();
    }

    public interface ICharacterProperty
    {
        string Name { get; }
        T Get<T>();
    }   

    public abstract class CharacterPropertyBase : ICharacterProperty, IEquatable<ICharacterProperty>, INotifyPropertyChanged
    {
        public string Name { get; }

        public event PropertyChangedEventHandler PropertyChanged;

        public CharacterPropertyBase(string name)
        {
            Name = name;
        }

        public abstract override string ToString();

        public abstract void Initialize(params string[] value);

        protected abstract object Raw { get; }

        public abstract object Get(Type t);

        public virtual T Get<T>() => Raw is T v ? v : (T)Get(typeof(T));

        public bool Equals(ICharacterProperty other) => other.GetType().FullName.Equals(GetType().FullName) && other.Name == Name;
        public override bool Equals(object obj) => obj is ICharacterProperty other && Equals(other);
        public override int GetHashCode() => GetType().FullName.GetHashCode()*17 + Name.GetHashCode()*19;

        protected void OnPropertyChanged(string name) => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
    }

}
