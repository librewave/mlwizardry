---
sidebar_position: 1
image: /mlops/langchain.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LangChain の概要

![/mlops/langchain.png](/mlops/langchain.png)

LangChain は、GPT や GPT4ALL などの大規模言語モデル（LLM）を活用し、Google 検索や Notion、Google ドキュメントへのアクセス、SQL の実行など、LLM が苦手とする計算などを行うための新しいライブラリです。

これにより、自然言語処理タスクに特化した LLM を利用し、より高度な自然言語処理タスクを実現できます。

Microsoft が作成した画像を対話的に生成できる [Visual ChatGPT](https://github.com/microsoft/visual-chatgpt) などにも使用されています。

https://js.langchain.com/docs/

## LangChain の機能を試す

LangChain は、Python と JavaScript / TypeScript のライブラリが存在します。今回は、Python・TypeScript のコードを記載します。

<!-- textlint-disable -->

:::caution
LangChain は比較的新しいライブラリであり、頻繁に変更が加えられることがあります。情報が古くなっている可能性がありますので、公式ドキュメントも合わせて参照することをおすすめします。
:::

<!-- textlint-enable -->

### モジュール

LangChain は、モジュールを組み合わせて複雑なアプリケーションを作成できます。以下が主要なモジュールです。

- **LLMs** : 言語モデルによる推論の実行
- **Prompt Template** : ユーザー入力からのプロンプト生成
- **Chains** : 複数の LLM やプロンプトの入出力を繋げる
- **Agent** : ユーザー入力を元にしたチェーンの動的呼び出し
- **Memory** : チェーンやエージェントで状態を保持

では、早速試してみましょう。

### インストール

LangChain を使用するために、各種ライブラリをインストールします。

<Tabs>
<TabItem value="python" label="Python">

pip を使用して langchain をインストールします。

```bash
pip install langchain
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

npm などのパッケージマネージャーでライブラリをインストールします。TypeScript ファイルの実行には ts-node などを使用できます。

```bash
## npm
npm install typescript ts-node @types/node langchain

## yarn
yarn add typescript ts-node @types/node langchain
```

</TabItem>
</Tabs>

### LLMs

**LLMs**は、大規模な言語モデルを利用するための基本的なモジュールです。今回は、OpenAI の LLM を使いますので、[API トークンを発行](https://platform.openai.com/account/api-keys)しましょう。2023 年 4 月現在、最初の$5 分は無料で利用できます。また、GPT4all や LLaMA.cpp などのローカルで動作するオプションもあります。

以下の方法で推論できます。

<Tabs>
<TabItem value="python" label="Python">

OpenAI のライブラリをインストールします。

```bash
pip install openai
```

OpenAI API キーの環境変数を定義して使用します。

```py
import os
from langchain.llms import OpenAI

os.environ["OPENAI_API_KEY"] = "<OpenAI_APIのトークン>"

llm = OpenAI()

print(llm("自己紹介してください"))
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

OpenAI ライブラリをインストールします。また、環境変数を読み込むために dotenv も使用します。

```bash
npm install openai dotenv
```

.env ファイルを作成して、OpenAI API キーの環境変数を定義します。

```bash
OPENAI_API_KEY="<OpenAI_APIのトークン>"
```

dotenv パッケージを読み込んで使用します。

```ts
import { OpenAI } from 'langchain/llms/openai';

require('dotenv').config();

export const runLlm = async () => {
  const llm = new OpenAI();

  const res = await llm.call('自己紹介してください');
  console.log(res);
};

runLlm();
```

</TabItem>
</Tabs>

上記のコードを実行することで、最もシンプルに LLM を呼び出すことができます。

```
はじめまして、田中と申します。大学では情報工学を専攻しています。
主な趣味は音楽鑑賞で、いろんなジャンルの音楽を聴いて楽しんでいます。
趣味では Web デザインをしていて、HTML・CSS・JavaScript などを使って Web サイトを作っています。
今後も音楽や Web デザインなどを通して自分を成長させていきたいと思っています。よろしくお願いします。
```

### Prompt Template

**Prompt Template** は、ユーザー入力からプロンプトを効率的に処理するためのモジュールです。このモジュールを使用することで、プロンプトを共通化できたり、変数を使用できます。これにより、LLM に同じ質問を繰り返す必要がある場合や、他の目的でプロンプトを再利用する場合に便利です。

<Tabs>
<TabItem value="python" label="Python">

```py
from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["menu"],
    template="{menu}を作る作るために必要な材料は？",
)

print(prompt.format(menu="カレー"))
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```ts
import { PromptTemplate } from 'langchain/prompts';

export const runTemplate = async () => {
  const template = new PromptTemplate({
    inputVariables: ['menu'],
    template: '{menu}を作る作るために必要な材料は？',
  });

  console.log(prompt.format({ menu: 'カレー' }));
};

runTemplate();
```

</TabItem>
</Tabs>

結果は以下のようになります。

```
カレーを作る作るために必要な材料は？
```

### Chains

**Chains** は、複数の LLM やプロンプトの入出力も繋げることができます。基本的な「LLMChain」は「LLM」と「Prompt Template」で作成できます。

<Tabs>
<TabItem value="python" label="Python">

```py
import os
from langchain.chains import LLMChain
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate

os.environ['OPENAI_API_KEY'] = '<OpenAI_APIのトークン>';

llm = OpenAI(temperature=0.9)

prompt = PromptTemplate(
    input_variables=["menu"],
    template="{menu}の具材を教えて下さい。",
)

chain = LLMChain(llm=llm, prompt=prompt)

print(chain.run("寿司"))
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```ts
import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';

require('dotenv').config();

export const runChain = async () => {
  const llm = new OpenAI({ temperature: 1 });

  const prompt = new PromptTemplate({
    inputVariables: ['menu'],
    template: '{menu}の具材を教えて下さい。',
  });

  const chain = new LLMChain({ llm, prompt });

  const res = await chain.call({ menu: '寿司' });
  console.log(res.text);
};

runChain();
```

</TabItem>
</Tabs>

<!-- textlint-disable -->

レスポンスの例:

<!-- textlint-enable -->

```
- 鮭（サケ）
- ネギ
- キャベツ
- タコ
- カニ
- イカ
- 木の芽
- マグロ
```

### Agent

LangChain における中心的な機能である**Agent**は、Google 検索などの様々な Tools モジュールを組み合わせ、より高度な回答を生成するためのモジュールです。ユーザーが入力した内容に応じて、どのツールを実行し、どの順序で使用するかを決定し、最適な回答を導き出すことができます。Agent は LangChain が提供する様々なツールを活用し、より質の高い回答を提供するために欠かせない存在です。

この例では、検索エンジンからデータをスクレイピングする SerpApi と、llm-math を使用します。SerpApi はアカウントを作成することで、月に 100 回まで無料で検索するできます。

https://serpapi.com/

<Tabs>
<TabItem value="python" label="Python">

SerpApi を使用するためのパッケージを pip でインストールします。

```bash
pip install google-search-results
```

```py
import os
from langchain.prompts import PromptTemplate
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.llms import OpenAI

os.environ['OPENAI_API_KEY'] = '<OpenAI_APIのトークン>';
os.environ["SERPAPI_API_KEY"] = "<SerpApiのトークン>"

llm = OpenAI(temperature=0)

tools = load_tools(["serpapi", "llm-math"], llm=llm)

agent = initialize_agent(
    tools,
    llm,
    agent="zero-shot-react-description",
    verbose=True
)

agent.run("アニメ、Lycoris Recoilの主人公の名前は？")

prompt = PromptTemplate(
    input_variables=["volumes"],
    template='{volumes}から10を割ると？',
)

agent.run(prompt.format(volumes=100))
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

SerpApi を使用するためのパッケージを npm などのパッケージマネージャーでインストールします。

```bash
# npm
npm install serpapi

# yarn
yarn add serpapi
```

TypesScript の場合、SERPAPI_API_KEY を.env に定義します。

```bash
SERPAPI_API_KEY=foo
```

```ts
import { initializeAgentExecutor } from 'langchain/agents';
import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';
import { PromptTemplate } from 'langchain/prompts';

require('dotenv').config();

export const runAgent = async () => {
  const llm = new OpenAI({ temperature: 0 });
  const tools = [new SerpAPI(), new Calculator()];

  const executor = await initializeAgentExecutor(
    tools,
    llm,
    'zero-shot-react-description',
    true
  );

  // 1つ目

  const prompt1 = 'アニメ、Lycoris Recoilの主人公の名前は？';
  const res1 = await executor.call({ input: prompt1 });
  console.log('User1', prompt1);
  console.log('Agent1', res1.output);

  // 2つ目

  const prompt2 = new PromptTemplate({
    inputVariables: ['volumes'],
    template: '{volumes}から10を割ると？',
  });

  const res2 = await executor.call({
    input: await prompt2.format({ volumes: 100 }),
  });

  console.log('User2', prompt2.template);
  console.log('Agent2', res2.output);
};

runAgent();
```

</TabItem>
</Tabs>

レスポンスは以下のようになりました。一部英語ではありますが、正しい情報が取得できていることが分かります。

```
Entering new agent_executor chain...
 I need to find out the name of the protagonist of Lycoris Recoil
Action: search
Action Input: "Lycoris Recoil protagonist"
Chisato Nishikigi
Finished chain.
User1 アニメ、Lycoris Recoilの主人公の名前は？
Agent1 Chisato Nishikigi
Entering new agent_executor chain...
 I need to divide 100 by 10
Action: calculator
Action Input: 100/10
10
Finished chain.
User2 {volumes}から10を割ると？
Agent2 100を10で割ると10になります。
```

### Memory

Memory は LLM の、チェーンやエージェントとの過去のやり取りの記憶を行えるモジュールです。例えば、ChatGPT のようなアプリケーションを作成する際に必要となります。

<Tabs>
<TabItem value="python" label="Python">

```py
import os
from langchain import OpenAI, ConversationChain

os.environ['OPENAI_API_KEY'] = '<OpenAI_APIのトークン>';

chain = ConversationChain(
    llm=OpenAI(temperature=0),
    verbose=True
)

chain.predict(input="こんにちは！")
chain.predict(input="あなたは何が好きですか？")
chain.predict(input="そのきっかけを教えて下さい")
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```ts
import { ConversationChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';

require('dotenv').config();

export const runMemory = async () => {
  const llm = new OpenAI({ temperature: 0 });

  const memoryChain = new ConversationChain({ llm });

  const input1 = 'こんにちは！';
  const res1 = await memoryChain.call({ input: input1 });
  console.log('User: ', input1);
  console.log('Agent:', res1.response);

  const input2 = 'あなたは何が好きですか？';
  const res2 = await memoryChain.call({ input: input2 });
  console.log('User: ', input2);
  console.log('Agent:', res2.response);

  const input3 = 'そのきっかけを教えて下さい';
  const res3 = await memoryChain.call({ input: input3 });
  console.log('User: ', input3);
  console.log('Agent:', res3.response);
};

runMemory();
```

</TabItem>
</Tabs>

<!-- textlint-disable -->

レスポンスの例:

<!-- textlint-enable -->

```
User: こんにちは！
Agent: こんにちは！私は AI です。どうぞよろしくお願いします！
User: あなたは何が好きですか？
Agent: 私は音楽が大好きです！特にジャズやクラシックなどのジャンルが好きです。また、私は芸術や文学などの文化的なものも好きです。
User: そのきっかけを教えて下さい
Agent: 私が音楽を好きになったきっかけは、小さい頃から家族と一緒に音楽を聴いていたからです。私が小さい頃、私の家族は毎日音楽を聴いていました。それが私が音楽を好きになったきっかけです。
```

このページでは、LangChain の基本的な機能を Python と TypeScript のコードを用いて紹介しました。また、OpenAI の LLM を使用する例を示しましたが、他の LLM を使用できます。

LangChain は、自然言語処理においてより高度なタスクを実現するための有力なツールとなることでしょう。
