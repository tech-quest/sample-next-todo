import React, { useState } from 'react';
import styles from './index.module.css';

type Props = {
  placeholder: string;
  onSubmit: (value: string) => void;
  name?: string;
};

export const SimpleInputForm = (props: Props) => {
  // MEMO: 入力した値を保存するState
  const [value, setValue] = useState('');

  // MEMO: 入力欄が変更された場合の処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // MEMO: データが送信された場合の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // MEMO: formタグのデフォルトの挙動 (送信処理) を無効化
    e.preventDefault();
    setValue('');

    // MEMO: propsで指定された処理を実行する
    props.onSubmit(value);
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder={props.placeholder}
        type="text"
        name={props.name}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.formButton}>
        追加
      </button>
    </form>
  );
};
