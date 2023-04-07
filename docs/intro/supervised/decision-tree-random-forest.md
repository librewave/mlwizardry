---
sidebar_position: 3
image: /intro/supervised/iris-machinelearning.png
---

# 決定木とランダムフォレスト

このページでは、分類問題を解決するための2つのアルゴリズム、**決定木**と**ランダムフォレスト**について解説します。

## 決定木

決定木は、データを分類するための木構造のアルゴリズムです。データを分ける際に、一番効果的な条件を選びながら分類していきます。

例えば、動物を「哺乳類」、「鳥類」、「爬虫類」に分類する場合、決定木は以下のような条件で分類します。

<!-- textlint-disable -->
1. 体温が高いか低いか
2. 羽があるかないか
3. 毛皮があるかないか
<!-- textlint-enable -->

このように、一連の質問に答えることで、データをカテゴリーに分類していくのが決定木です。

### Pythonで決定木を試す


以下のPythonコードは、花のデータ（アヤメ）を決定木で分類する例です。

[Irisデータセット](https://en.wikipedia.org/wiki/Iris_flower_data_set)は、機械学習の分類問題によく使用される有名なデータセットの1つです。このデータセットには、3種類のアヤメの花（setosa、versicolor、およびvirginica）の150個のサンプルが含まれています。

![/intro/supervised/iris-machinelearning.png](/intro/supervised/iris-machinelearning.png)

各サンプルには、花のがく片と花弁の長さと幅の4つの特徴が含まれます。使用するために必要なライブラリをインストールしましょう。

```bash
pip install scikit-learn
```

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# アヤメのデータを読み込む
iris = load_iris()
X, y = iris.data, iris.target

# データを訓練用とテスト用に分割
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# 決定木モデルを作成し、訓練データで学習
model = DecisionTreeClassifier()
model.fit(X_train, y_train)

# テストデータで予測し、正解率を計算
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"正解率: {accuracy:.2f}")
```

このコードは、`sklearn`ライブラリの`DecisionTreeClassifier`クラスを使って決定木を作成し、アヤメのデータを分類しています。正解率は、予測の正確さを表す指標であり、この例では0.93でした。

## ランダムフォレスト

ランダムフォレストは、複数の決定木を組み合わせて分類するアルゴリズムです。それぞれの決定木が異なるデータや特徴を元に分類し、最後にその結果を集約して最終的な予測を出します。これにより、個々の決定木の欠点を補い、より正確な分類が可能になります。

### Pythonでランダムフォレストを試す

以下のPythonコードは、花のデータ（アヤメ）をランダムフォレストで分類する例です。

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# アヤメのデータを読み込む
iris = load_iris()
X, y = iris.data, iris.target

# データを訓練用とテスト用に分割
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# ランダムフォレストモデルを作成し、訓練データで学習
model = RandomForestClassifier()
model.fit(X_train, y_train)

# テストデータで予測し、正解率を計算
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"正解率: {accuracy:.2f}")
```

このコードは、`sklearn`ライブラリの`RandomForestClassifier`クラスを使ってランダムフォレストを作成し、アヤメのデータを分類しています。

これで、決定木とランダムフォレストについての基本的な解説と実践の紹介が完了しました。これらのアルゴリズムを使って、さまざまな分類問題に挑戦してみましょう。