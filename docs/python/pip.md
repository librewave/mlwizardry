---
sidebar_position: 3
---


# pipの役割と使い方

pipは、Pythonのパッケージ管理システムです。パッケージとは、他の開発者が作成したコードやモジュールの集まりで、簡単にインストールして利用できます。pipを使用することで、あらかじめ作られたPythonパッケージを簡単にインストール、アップデート、削除できます。

Pythonをインストールしていれば、pipはデフォルトでインストールされています。まだPythonをインストールしていない場合は以下のページを確認してください。

[Pythonのインストール →](/python/install)

## 基本的なpipコマンド

### パッケージのインストール

指定したパッケージをインストールするには、以下のコマンドを実行します。

```bash
pip install パッケージ名
```

例えば、`numpy`という数値計算を効率的に行うためのパッケージをインストールするには、以下のように実行します。

```bash
pip install numpy
```

### パッケージのアップデート

インストール済みのパッケージをアップデートするには、以下のコマンドを実行します。

```bash
pip install --upgrade パッケージ名
```

### パッケージの削除

```bash
pip uninstall パッケージ名
```

### インストール済みのパッケージ一覧を表示

インストール済みのパッケージ一覧を表示するには、以下のコマンドを実行します。

```bash
pip list
```

## インストールしたパッケージの使用

インストールしたパッケージを使用するには、Pythonスクリプト内でimport文を使ってそのパッケージをインポートします。例えば、numpyをインストールした後に使用するには、以下のようにインポートして利用します。

```py
import numpy as np

# numpyを使って配列を作成
array = np.array([1, 2, 3, 4, 5])

# 配列の要素をすべて2倍にする
array = array * 2

print(array)
```

インストールしたパッケージの詳しい使用方法などは公式ドキュメントなどを参照しましょう。

これで、pipの基本的な使い方について学びました。pipを活用して、さまざまなPythonパッケージをインストールして、開発を効率化しましょう！