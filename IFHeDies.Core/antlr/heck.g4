grammar heck;

/*
 * Parser Rules
 */

file                : namespace* EOF ;
namespace           : NAMESPACE id string NEWLINE;
string              : STRING;
id                  : ID ;

/*
 * Lexer Rules
 */

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
fragment NUMBER     : [0-9] ;

NAMESPACE : 'namespace';

ID                  : (LOWERCASE | UPPERCASE) (LOWERCASE | UPPERCASE | NUMBER)* ;
STRING		        : '"' .*? '"' ;
WHITESPACE          : (' '|'\t')+ -> skip ;
NEWLINE             : ('\r'? '\n' | '\r')+ ;

