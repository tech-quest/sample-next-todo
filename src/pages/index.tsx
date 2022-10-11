import React, { useState } from 'react';
import type { NextPage } from 'next';
import { SimpleInputForm } from '~/components/SimpleInputForm';
import styles from '~/styles/Home.module.css';

// MEMO: ToDoのデータを表す構造(型)
type Todo = {
  id: string;
  task: string;
  isDone: boolean;
};

// MEMO: ToDo の状態を表す文字列
type TodoFilter = 'ALL' | 'NOT_DONE' | 'DONE';

const Home: NextPage = () => {
  // MEMO: 現在のToDoリストの配列データを保存するState (初期値: 空)
  const [todos, setTodos] = useState<Todo[]>([]);

  // MEMO: 現在の表示ステータスを保存するState
  const [todoFilter, setTodoFilter] = useState<TodoFilter>('ALL');

  // MEMO: ステータスをクリックした場合の処理
  const handleStatusClick = (status: TodoFilter) => {
    setTodoFilter(status);
  };

  // MEMO: ToDo のチェックボックスが修正された場合の処理
  const handleTodoCheck = (checkedTodo: Todo) => {
    // MEMO: チェックしたタスクのステータスを変更した、新しいToDo配列を生成
    const updatedTodos = todos.map((todo) => {
      // MEMO: IDがチェックされたToDoのIDと一致した場合
      if (todo.id === checkedTodo.id) {
        // MEMO: チェックされたToDoデータを複製し、isDoneの値だけを更新して返却する
        return { ...checkedTodo, isDone: !checkedTodo.isDone };
      }
      // MEMO: チェックされたToDoではない場合は何も変更せずに返却する
      return todo;
    });
    // MEMO: 更新されたToDo配列データをStateに保存する
    setTodos(updatedTodos);
  };

  // MEMO: SimpleInputForm に渡す送信時の処理
  const handleSubmit = (value: string) => {
    // MEMO: タスクを識別するためのIDを生成
    const id = Math.random().toString(32).substring(2);
    // MEMO: 新規タスクのtodoオブジェクトを作成
    const newTodo: Todo = {
      id,
      task: value,
      isDone: false,
    };
    // MEMO: 現在のtodos配列を複製し、新規todoを追加してStateに保存する
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div className={styles.heading}>ToDo</div>
        </div>
        <div className="panelBody">
          <div className={styles.inputField}>
            <SimpleInputForm onSubmit={handleSubmit} placeholder="タスクを入力してください" name="task" />
          </div>
          <div className="todo">
            <div className={styles.todoStatus}>
              <button
                className={todoFilter === 'ALL' ? styles.currentStatusButton : styles.statusButton}
                onClick={() => handleStatusClick('ALL')}
              >
                すべて
              </button>
              <button
                className={todoFilter === 'NOT_DONE' ? styles.currentStatusButton : styles.statusButton}
                onClick={() => handleStatusClick('NOT_DONE')}
              >
                未完了
              </button>
              <button
                className={todoFilter === 'DONE' ? styles.currentStatusButton : styles.statusButton}
                onClick={() => handleStatusClick('DONE')}
              >
                完了
              </button>
            </div>
            <ul className={styles.todoList}>
              {/* todos配列からhtmlの配列を生成する */}
              {todos.map((todo, index) => {
                // MEMO: 「完了」のステータスが選択されている場合、「未完了(isDone=false)」のToDoは出力しない
                if (todoFilter === 'DONE' && !todo.isDone) {
                  return null;
                }
                // MEMO: 「未完了」のステータスが選択されている場合、「完了(isDone=true)」のToDoは出力しない
                if (todoFilter === 'NOT_DONE' && todo.isDone) {
                  return null;
                }
                return (
                  <li className={styles.todoListItem} key={todo.id}>
                    <label className={styles.checkbox}>
                      <input
                        type="checkbox"
                        name="todo"
                        id={todo.id}
                        value={index}
                        className={styles.todoCheckbox}
                        checked={todo.isDone}
                        onChange={() => handleTodoCheck(todo)}
                      />
                      {todo.task}
                    </label>
                  </li>
                );
              })}
            </ul>
            <div className={styles.todoFooter}>
              <div className={styles.todoDetail}>{todos.length} todos</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
