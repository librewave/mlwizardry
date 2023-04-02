---
sidebar_position: 2
---

# Pythonの基本

Pythonは、他のプログラミング言語と比較してシンプルで読みやすい構文が特徴です。この記事では、Pythonの基本的な構文やインデントについて説明します。

## print

Pythonの`print`関数は、引数として渡された値をコンソールに出力するための関数です。`print`関数は、文字列、数値、リスト、辞書など、さまざまなデータ型を出力できます。

プログラミングを始める際に、最初に行う典型的な例として、「Hello, World!」を出力するプログラムがあります。以下にその例を示します。

```python
print("Hello, World!")
```

このコードは、print関数を使用して文字列 "Hello, World!" をコンソールに出力します。

```bash
Hello, World!
```

## 変数と型

Pythonでは、変数を宣言する際に型を明示的に指定する必要はありません。変数名に値を代入することで、自動的に型が決定されます。

```py
x = 10  # 整数型 (int)
y = 3.14  # 浮動小数点型 (float)
name = "Python"  # 文字列型 (str)
```

## 条件分岐

Pythonでは、`if`, `elif`, `else`キーワードを使用して条件分岐を表現します。

```py
x = 10

if x > 0:
    print("xは正の数です")
elif x < 0:
    print("xは負の数です")
else:
    print("xは0です")
```

## 繰り返し

Pythonでは、`for`と`while`ループを使用して繰り返し処理を実現できます。


```py
# forループ
for i in range(5):
    print(i)

# whileループ
x = 0
while x < 5:
    print(x)
    x += 1
```

## リスト

Pythonには、複数の要素を格納するためのリスト型があります。リストは、[]を使用して表現されます。

```py
numbers = [1, 2, 3, 4, 5]

# 要素へのアクセス
print(numbers[0])  # 1

# 要素の追加
numbers.append(6)
print(numbers)  # [1, 2, 3, 4, 5, 6]

# 要素の削除
numbers.remove(3)
print(numbers)  # [1, 2, 4, 5, 6]
```

### 辞書

Pythonには、キーと値のペアを格納する辞書型があります。辞書は、{}を使用して表現されます。

```py
person = {
    'name': 'Alice',
    'age': 30,
    'city': 'New York'
}

# 要素へのアクセス
print(person['name'])  # Alice

# 要素の追加
person['country'] = 'USA'
print(person)  # {'name': 'Alice', 'age': 30, 'city': 'New York', 'country': 'USA'}

# 要素の削除
del person['age']
print(person)  # {'name': 'Alice', 'city': 'New York', 'country': 'USA'}
```

## 関数

Pythonでは、`def`キーワードを使用して関数を定義します。関数は、処理をまとめたものであり、引数を受け取り、必要に応じて戻り値を返します。

```python
def add(x, y):
    result = x + y
    return result

a = 10
b = 20
sum_result = add(a, b)
print(sum_result)
```

## インデント

Pythonでは、インデントが非常に重要です。インデントは、プログラムの構造を表現するために使用されます。他の言語では波括弧 {} などで表現される部分を、Pythonではインデントで表現します。

以下は、Pythonのインデントを使用した例です。

```py
def hello(name):  # 関数の定義
    message = "Hello, " + name
    return message

name = "John"
result = hello(name)
print(result)
```

インデントには、Pythonの[公式スタイルガイド (PEP 8)](https://peps.python.org/pep-0008/#indentation)によれば、通常スペース4つが推奨されますが、タブ文字やスペース2つを使用することもできます。ただし、コード内でインデントのスタイルを混在させることは避けるべきです。

---

以上で、Pythonの基本的な構文とインデントについて説明しました。Pythonはシンプルで読みやすい構文が特徴であり、これによりコードの可読性が高まり、プログラミングが効率的に行えます。これらの基本的な構文を理解し、実践的なPythonプログラムを作成していくことで、より深い理解が得られるでしょう。