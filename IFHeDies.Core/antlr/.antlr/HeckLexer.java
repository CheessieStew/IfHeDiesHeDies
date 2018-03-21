// Generated from d:\Git\IfHeDiesHeDies\IFHeDies.Core\antlr\heck.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class heckLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NAMESPACE=1, ID=2, STRING=3, WHITESPACE=4, NEWLINE=5;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"LOWERCASE", "UPPERCASE", "NUMBER", "NAMESPACE", "ID", "STRING", "WHITESPACE", 
		"NEWLINE"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'namespace'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "NAMESPACE", "ID", "STRING", "WHITESPACE", "NEWLINE"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public heckLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "heck.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\7H\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\3\2\3\2\3\3\3\3"+
		"\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\5\6&\n\6\3\6"+
		"\3\6\3\6\7\6+\n\6\f\6\16\6.\13\6\3\7\3\7\7\7\62\n\7\f\7\16\7\65\13\7\3"+
		"\7\3\7\3\b\6\b:\n\b\r\b\16\b;\3\b\3\b\3\t\5\tA\n\t\3\t\3\t\6\tE\n\t\r"+
		"\t\16\tF\3\63\2\n\3\2\5\2\7\2\t\3\13\4\r\5\17\6\21\7\3\2\6\3\2c|\3\2C"+
		"\\\3\2\62;\4\2\13\13\"\"\2M\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17"+
		"\3\2\2\2\2\21\3\2\2\2\3\23\3\2\2\2\5\25\3\2\2\2\7\27\3\2\2\2\t\31\3\2"+
		"\2\2\13%\3\2\2\2\r/\3\2\2\2\179\3\2\2\2\21D\3\2\2\2\23\24\t\2\2\2\24\4"+
		"\3\2\2\2\25\26\t\3\2\2\26\6\3\2\2\2\27\30\t\4\2\2\30\b\3\2\2\2\31\32\7"+
		"p\2\2\32\33\7c\2\2\33\34\7o\2\2\34\35\7g\2\2\35\36\7u\2\2\36\37\7r\2\2"+
		"\37 \7c\2\2 !\7e\2\2!\"\7g\2\2\"\n\3\2\2\2#&\5\3\2\2$&\5\5\3\2%#\3\2\2"+
		"\2%$\3\2\2\2&,\3\2\2\2\'+\5\3\2\2(+\5\5\3\2)+\5\7\4\2*\'\3\2\2\2*(\3\2"+
		"\2\2*)\3\2\2\2+.\3\2\2\2,*\3\2\2\2,-\3\2\2\2-\f\3\2\2\2.,\3\2\2\2/\63"+
		"\7$\2\2\60\62\13\2\2\2\61\60\3\2\2\2\62\65\3\2\2\2\63\64\3\2\2\2\63\61"+
		"\3\2\2\2\64\66\3\2\2\2\65\63\3\2\2\2\66\67\7$\2\2\67\16\3\2\2\28:\t\5"+
		"\2\298\3\2\2\2:;\3\2\2\2;9\3\2\2\2;<\3\2\2\2<=\3\2\2\2=>\b\b\2\2>\20\3"+
		"\2\2\2?A\7\17\2\2@?\3\2\2\2@A\3\2\2\2AB\3\2\2\2BE\7\f\2\2CE\7\17\2\2D"+
		"@\3\2\2\2DC\3\2\2\2EF\3\2\2\2FD\3\2\2\2FG\3\2\2\2G\22\3\2\2\2\13\2%*,"+
		"\63;@DF\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}