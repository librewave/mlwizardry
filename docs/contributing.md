---
sidebar_position: 2
---

# 貢献

このウェブサイトはオープンソースで公開されており、問題や情報の更新などを誰でも行なえます。このページでは貢献に参加する方法を解説します。

## 執筆環境の構築

まず、GitHubからリポジトリをクローンします。

```bash
git clone https://github.com/librewave/mlwizardry.git
```

次に、依存関係をインストールします。Node.js、Pythonのインストールは事前に行ってください。仮想環境で行うのもおすすめです。

```bash
pip install -r requirements.txt
yarn install
```

次に、JupyterLabとDocusaurusを起動します。

```bash
jupyter lab
yarn start
```

## 作成・編集

大きなPull Requestなどを送信する場合は、[GitHub Issues](https://github.com/librewave/mlwizardry/issues)で議論することをおすすめします。また、[Discordサーバー](https://discord.gg/kU4VJGNdwX)でディスカッションを行うこともおすすめします。

今後追加予定のコンテンツなどを[Github Projects](https://github.com/orgs/librewave/projects/1)で管理しています。不足しているコンテンツの作成、編集をお気軽に行ってください。

Markdownファイルの編集は基本的にVSCodeで行うようにしてください。また、文体・スタイルを統一するためのtextlintプラグインを導入することでテキストがチェックされます。

[vscode-textlint](https://marketplace.visualstudio.com/items?itemName=taichi.vscode-textlint)

## 不明点がある場合

このサイトに掲載されている記事について、何か分からない点や疑問がある場合は、記事の下にあるコメントフォームからお気軽にご連絡ください。パブリックな場でのディスカッションは、知識を深めるために非常に役立ちますので、どんな小さな疑問でも遠慮なくご質問ください。