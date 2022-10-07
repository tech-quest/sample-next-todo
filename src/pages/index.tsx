import type { NextPage } from 'next';
import styles from '~/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div className={styles.heading}>ToDo</div>
        </div>
        <div className="panelBody">
          <div className={styles.inputField}>
            <form noValidate className={styles.form}>
              <input className={styles.input} placeholder="タスクを入力してください" type="text" name="task" />
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
              <li className={styles.todoListItem}>
                <label className={styles.checkbox}>
                  <input type="checkbox" name="todo" id="todo_1" value="1" className={styles.todoCheckbox} />
                  会議
                </label>
              </li>
              <li className={styles.todoListItem}>
                <label className={styles.checkbox}>
                  <input type="checkbox" name="todo" id="todo_2" value="2" className={styles.todoCheckbox} />
                  メール
                </label>
              </li>
              <li className={styles.todoListItem}>
                <label className={styles.checkbox}>
                  <input type="checkbox" name="todo" id="todo_3" value="3" className={styles.todoCheckbox} />
                  読書
                </label>
              </li>
            </ul>
            <div className={styles.todoFooter}>
              <div className={styles.todoDetail}>3 todos</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
