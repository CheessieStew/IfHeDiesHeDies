using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeckEngine.Core.Character
{
    class CharacterSheet : INotifyPropertyChanged
    {
        private Dictionary<string, ICharacterProperty> _properties = new Dictionary<string, ICharacterProperty>();


        public IEnumerable<ICharacterProperty> Properties { get; private set; }

        public string Name
        {
            get => _properties[nameof(Name)].Get<string>();
            set
            {
                _properties[nameof(Name)].Set(value);
            }
        }

        public string Player { get; private set; }

        public string Comments { get; private set; }

        public int Level { get; private set; }

        public CharacterSheet()
        {
            RegisterProperty()
        }

        public event PropertyChangedEventHandler PropertyChanged;
        private void OnPropertyChanged(string name) => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
    }

}
