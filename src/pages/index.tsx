import React, { useState } from 'react';
import type { NextPage } from 'next';
import styles from '~/styles/Home.module.css';

// MEMO: ToDoのデータを表す構造(型)
type Todo = {
  id: string;
  task: string;
  isDone: boolean;
};

const Home: NextPage = () => {
  // MEMO: 入力したタスクの値を保存するState
  const [task, setTask] = useState<string>('');

  // MEMO: 現在のToDoリストの配列データを保存するState
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 'task1',
      task: '会議',
      isDone: false,
    },
    {
      id: 'task2',
      task: 'メール',
      isDone: false,
    },
    {
      id: 'task3',
      task: '読書',
      isDone: false,
    },
  ]);

  // MEMO: タスク入力欄が変更された場合の処理
  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // MEMO: タスクの値をStateに保存する
    setTask(e.target.value);
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

  // フォームを送信した場合(追加ボタンをクリックした場合)の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // MEMO: formタグのデフォルトの挙動 (送信処理) を無効化
    e.preventDefault();
    // MEMO: タスクの値をアラート表示して確認
    alert(task);
  };

  return (
    <>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div className={styles.heading}>ToDo</div>
        </div>
        <div className="panelBody">
          <div className={styles.inputField}>
            <form noValidate className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                placeholder="タスクを入力してください"
                type="text"
                name="task"
                value={task}
                onChange={handleTaskChange}
              />
              <button type="submit" className={styles.formButton}>
                追加
              </button>
            </form>
          </div>
          <div className="todo">
            <div className={styles.todoStatus}>
              <button className={styles.statusButton}>すべて</button>
              <button className={styles.statusButton}>未完了</button>
              <button className={styles.statusButton}>完了</button>
            </div>
            <ul className={styles.todoList}>
              {/* todos配列からhtmlの配列を生成する */}
              {todos.map((todo, index) => {
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
