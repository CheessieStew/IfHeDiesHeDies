import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { heckLexer } from '../src/grammar/heckLexer';
import { heckParser } from '../src/grammar/heckParser';

// Create the lexer and parser
let inputStream = new ANTLRInputStream("text");
let lexer = new heckLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new heckParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let result = parser.parse();
let styles = require('./Counter.scss');

export interface IProps extends RouteComponentProps<any> {
  increment(): void,
  incrementIfOdd(): void,
  incrementAsync(): void,
  decrement(): void,
  counter: number
}

export class Counter extends React.Component<IProps> {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
          {result}
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">async</button>
        </div>
      </div>
    );
  }
}

export default Counter;
