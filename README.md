# 🐳

## 事前準備

当リポジトリでは Docker というツールを使用して自身のPC上で環境が構築されるように作成しています。  
ご自身のPCに Docker をまだインストールしていない方は以下手順でインストールをしてください。　　

※ インストール済みの方は「環境構築手順」にお進みください。

### 1. Dockerのインストール

以下サイトでインストールが行えます。  
https://www.docker.com/products/docker-desktop/

### 2. 「Docker Desktop」(3.でインストールしたソフト) を起動

Docker Desktop を起動することで Docker を利用した環境構築が行えるようになります。

## 環境構築手順

### 1. 「template-docker-next」リポジトリをテンプレートとして、自身の Github にリポジトリを作成

<img width="1497" alt="スクリーンショット 2022-10-05 17 24 52" src="https://user-images.githubusercontent.com/114050379/194016469-0ea8f7c0-a672-4103-a7a2-038922e3fa8f.png">

### 2. 作成した自身のリポジトリをローカルにcloneする

1の手順で自身の Github に当リポジトリのファイルが複製されたリポジトリが作成されます。  
作成されたリポジトリを自身のリポジトリに clone してください。

### 3. 「Dockerコンテナ」の起動

clone したディレクトリに移動し、Dockerコンテナの初期化を行います。

```
cd [cloneしたディレクトリ名]

make init
```

### 4.ローカルで Next.js を起動する

下記コマンドを実行することで、 Next.js で開発したアプリケーションをブラウザで確認できるようになります。

```
make dev
```

上記を実行すると、ローカルサーバーが起動されますので、 http://localhost:3000/ にアクセスして表示の確認が行えるようになります。

※ 当リポジトリでは、 node.js がインストールされていない方でも利用できるように、学習に必要となるコマンドを `make 〇〇` という形式で簡略化して実行できるように作成しています。   
  そのため、これらのコマンドは docker や node.js を取り扱う正式なコマンドでは有りませんのでご注意ください。

## その他のコマンド

開発をすすめる上で必要なコマンドをいくつか用意しています。  
よく利用する代表的なコマンドを以下にご紹介します。

### node_modules を追加する

```
# dependencies でインストールする場合
make add MODULE=[module名]

# devDependencies でインストールする場合
make add-dev MODULE=[module名]

# 例
make add MODULE=@mui/material
make add-dev MODULE=prettier
```
※ モジュールは1つずつしか選択できないため、複数のモジュールをインストールする場合は個別にコマンドを実行してください。

### node_modules を削除する

```
make remove MODULE=[module名]

#例
make remove MODULE=prettier
```

### 必要な node_modules を再インストールする

```
make install
```

### 起動中のコンテナを停止させる

コンテナが起動していると、別のプロジェクトでDockerを使用する際に設定が競合してしまい、エラーとなる場合があります。  
その場合は、以下コマンドでコンテナを停止させます。

```
make stop
```

### Docker の設定を変更した場合

```
# 起動中のコンテナを停止させる
make stop
# コンテナを再構築して起動する
make rebuild
```
