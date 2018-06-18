using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HeckEngine.Core.Character
{
    public class ContainterProperty : CharacterPropertyBase
    {
        private float _value;
        public float Value
        {
            get => _value;
            set
            {
                _value = value.Clamp(_minValue,_maxValue);
                OnPropertyChanged(nameof(Value));
            }
        }

        private float _maxValue;
        public float MaxValue
        {
            get => _maxValue;
            set
            {
                _maxValue = value;
                OnPropertyChanged(nameof(MaxValue));
            }
        }

        private float _minValue;
        public float MinValue
        {
            get => _minValue;
            set
            {
                _minValue = value;
                OnPropertyChanged(nameof(MinValue));
            }
        }
        private string _color;
        public string Color
        {
            get => _color;
            set
            {
                _color = value;
                OnPropertyChanged(nameof(Color));
            }
        }

        protected override object Raw => Value;

        public override object Get(Type t)
        {
            switch (Type.GetTypeCode(t))
            {
                case TypeCode.Double:
                    return (double)Value;
                case TypeCode.String:
                    return Value.ToString();
                case TypeCode.Single:
                default:
                    return Value;
            }
        }

        public override void Initialize(params string[] args)
        {
            if (args.Length > 2
                && float.TryParse(args[0], out float f)
                && float.TryParse(args[1], out float min)
                && float.TryParse(args[2], out float max))
            {
                Value = f;
                MinValue = min;
                MaxValue = max;
                if (args.Length > 3)
                    Color = args[3];
            }
            throw new BadArgumentException();
        }

        public ContainterProperty(string name) : base(name)
        {

        }

        public ContainterProperty(string name, float min, float max, string color, float value = 0) : base(name)
        {
            MinValue = min;
            MaxValue = max;
            Color = color;
            Value = value;
        }

        public override string ToString() => Value.ToString();
    }
}
