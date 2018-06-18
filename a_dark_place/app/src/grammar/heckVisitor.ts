// Generated from ./grammar/heck.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ParseContext } from './heckParser';
import { ErrorContext } from './heckParser';
import { Sql_stmt_listContext } from './heckParser';
import { Sql_stmtContext } from './heckParser';
import { Alter_table_stmtContext } from './heckParser';
import { Analyze_stmtContext } from './heckParser';
import { Attach_stmtContext } from './heckParser';
import { Begin_stmtContext } from './heckParser';
import { Commit_stmtContext } from './heckParser';
import { Compound_select_stmtContext } from './heckParser';
import { Create_index_stmtContext } from './heckParser';
import { Create_table_stmtContext } from './heckParser';
import { Create_trigger_stmtContext } from './heckParser';
import { Create_view_stmtContext } from './heckParser';
import { Create_virtual_table_stmtContext } from './heckParser';
import { Delete_stmtContext } from './heckParser';
import { Delete_stmt_limitedContext } from './heckParser';
import { Detach_stmtContext } from './heckParser';
import { Drop_index_stmtContext } from './heckParser';
import { Drop_table_stmtContext } from './heckParser';
import { Drop_trigger_stmtContext } from './heckParser';
import { Drop_view_stmtContext } from './heckParser';
import { Factored_select_stmtContext } from './heckParser';
import { Insert_stmtContext } from './heckParser';
import { Pragma_stmtContext } from './heckParser';
import { Reindex_stmtContext } from './heckParser';
import { Release_stmtContext } from './heckParser';
import { Rollback_stmtContext } from './heckParser';
import { Savepoint_stmtContext } from './heckParser';
import { Simple_select_stmtContext } from './heckParser';
import { Select_stmtContext } from './heckParser';
import { Select_or_valuesContext } from './heckParser';
import { Update_stmtContext } from './heckParser';
import { Update_stmt_limitedContext } from './heckParser';
import { Vacuum_stmtContext } from './heckParser';
import { Column_defContext } from './heckParser';
import { Type_nameContext } from './heckParser';
import { Column_constraintContext } from './heckParser';
import { Conflict_clauseContext } from './heckParser';
import { ExprContext } from './heckParser';
import { Foreign_key_clauseContext } from './heckParser';
import { Raise_functionContext } from './heckParser';
import { Indexed_columnContext } from './heckParser';
import { Table_constraintContext } from './heckParser';
import { With_clauseContext } from './heckParser';
import { Qualified_table_nameContext } from './heckParser';
import { Ordering_termContext } from './heckParser';
import { Pragma_valueContext } from './heckParser';
import { Common_table_expressionContext } from './heckParser';
import { Result_columnContext } from './heckParser';
import { Table_or_subqueryContext } from './heckParser';
import { Join_clauseContext } from './heckParser';
import { Join_operatorContext } from './heckParser';
import { Join_constraintContext } from './heckParser';
import { Select_coreContext } from './heckParser';
import { Compound_operatorContext } from './heckParser';
import { Cte_table_nameContext } from './heckParser';
import { Signed_numberContext } from './heckParser';
import { Literal_valueContext } from './heckParser';
import { Unary_operatorContext } from './heckParser';
import { Error_messageContext } from './heckParser';
import { Module_argumentContext } from './heckParser';
import { Column_aliasContext } from './heckParser';
import { KeywordContext } from './heckParser';
import { NameContext } from './heckParser';
import { Function_nameContext } from './heckParser';
import { Database_nameContext } from './heckParser';
import { Table_nameContext } from './heckParser';
import { Table_or_index_nameContext } from './heckParser';
import { New_table_nameContext } from './heckParser';
import { Column_nameContext } from './heckParser';
import { Collation_nameContext } from './heckParser';
import { Foreign_tableContext } from './heckParser';
import { Index_nameContext } from './heckParser';
import { Trigger_nameContext } from './heckParser';
import { View_nameContext } from './heckParser';
import { Module_nameContext } from './heckParser';
import { Pragma_nameContext } from './heckParser';
import { Savepoint_nameContext } from './heckParser';
import { Table_aliasContext } from './heckParser';
import { Transaction_nameContext } from './heckParser';
import { Any_nameContext } from './heckParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `heckParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface heckVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `heckParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.error`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError?: (ctx: ErrorContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.sql_stmt_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql_stmt_list?: (ctx: Sql_stmt_listContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.sql_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql_stmt?: (ctx: Sql_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.alter_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.analyze_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyze_stmt?: (ctx: Analyze_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.attach_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttach_stmt?: (ctx: Attach_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.begin_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBegin_stmt?: (ctx: Begin_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.commit_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommit_stmt?: (ctx: Commit_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.compound_select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_select_stmt?: (ctx: Compound_select_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.create_index_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_index_stmt?: (ctx: Create_index_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.create_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_stmt?: (ctx: Create_table_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.create_trigger_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_trigger_stmt?: (ctx: Create_trigger_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.create_view_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_view_stmt?: (ctx: Create_view_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.create_virtual_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_virtual_table_stmt?: (ctx: Create_virtual_table_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.delete_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_stmt?: (ctx: Delete_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.delete_stmt_limited`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_stmt_limited?: (ctx: Delete_stmt_limitedContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.detach_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDetach_stmt?: (ctx: Detach_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.drop_index_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_index_stmt?: (ctx: Drop_index_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.drop_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_table_stmt?: (ctx: Drop_table_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.drop_trigger_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_trigger_stmt?: (ctx: Drop_trigger_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.drop_view_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_view_stmt?: (ctx: Drop_view_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.factored_select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactored_select_stmt?: (ctx: Factored_select_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.insert_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_stmt?: (ctx: Insert_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.pragma_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPragma_stmt?: (ctx: Pragma_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.reindex_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReindex_stmt?: (ctx: Reindex_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.release_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelease_stmt?: (ctx: Release_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.rollback_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollback_stmt?: (ctx: Rollback_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.savepoint_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSavepoint_stmt?: (ctx: Savepoint_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.simple_select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_select_stmt?: (ctx: Simple_select_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_stmt?: (ctx: Select_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.select_or_values`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_or_values?: (ctx: Select_or_valuesContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.update_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_stmt?: (ctx: Update_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.update_stmt_limited`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_stmt_limited?: (ctx: Update_stmt_limitedContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.vacuum_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVacuum_stmt?: (ctx: Vacuum_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.column_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_def?: (ctx: Column_defContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_name?: (ctx: Type_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.column_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_constraint?: (ctx: Column_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.conflict_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConflict_clause?: (ctx: Conflict_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.foreign_key_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeign_key_clause?: (ctx: Foreign_key_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.raise_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaise_function?: (ctx: Raise_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.indexed_column`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexed_column?: (ctx: Indexed_columnContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.table_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_constraint?: (ctx: Table_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.with_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_clause?: (ctx: With_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.qualified_table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualified_table_name?: (ctx: Qualified_table_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.ordering_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdering_term?: (ctx: Ordering_termContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.pragma_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPragma_value?: (ctx: Pragma_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.common_table_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommon_table_expression?: (ctx: Common_table_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.result_column`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult_column?: (ctx: Result_columnContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.table_or_subquery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_or_subquery?: (ctx: Table_or_subqueryContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.join_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_clause?: (ctx: Join_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.join_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_operator?: (ctx: Join_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.join_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_constraint?: (ctx: Join_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.select_core`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_core?: (ctx: Select_coreContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.compound_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_operator?: (ctx: Compound_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.cte_table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCte_table_name?: (ctx: Cte_table_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.signed_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSigned_number?: (ctx: Signed_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.literal_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_value?: (ctx: Literal_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.error_message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_message?: (ctx: Error_messageContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.module_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_argument?: (ctx: Module_argumentContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.column_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_alias?: (ctx: Column_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name?: (ctx: Function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.database_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabase_name?: (ctx: Database_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_name?: (ctx: Table_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.table_or_index_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_or_index_name?: (ctx: Table_or_index_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.new_table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_table_name?: (ctx: New_table_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.column_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_name?: (ctx: Column_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.collation_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollation_name?: (ctx: Collation_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.foreign_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeign_table?: (ctx: Foreign_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.index_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_name?: (ctx: Index_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.trigger_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrigger_name?: (ctx: Trigger_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.view_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitView_name?: (ctx: View_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.module_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_name?: (ctx: Module_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.pragma_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPragma_name?: (ctx: Pragma_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.savepoint_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSavepoint_name?: (ctx: Savepoint_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.table_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_alias?: (ctx: Table_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.transaction_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransaction_name?: (ctx: Transaction_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `heckParser.any_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAny_name?: (ctx: Any_nameContext) => Result;
}

