---
sidebar_position: 2
---

# Next.js + Vercel で ChatGPT を組み込んだアプリケーションを作成する

このページでは、Next.js と Vercel を使用して OpenAI の ChatGPT を組み込むアプリケーションの作成方法を解説します。

:::tip
このページで解説する内容は、React、Next.js のチュートリアルを事前に完了していることが前提となっています。理解を深めるためには、[チュートリアル](https://nextjs.org/learn/foundations/about-nextjs)から始めてください。
:::

## 2 種類の方法

Next.js は、フロントエンドだけではなくバックエンドサーバーとして利用できる API を構築可能です。

しかし、Vercel では`pages/api`ディレクトリに記載するサーバーレス関数においての[実行時間の制限が 10 秒と定められています](https://vercel.com/docs/concepts/functions/serverless-functions)。これは、ChatGPT などの API が実行時間を超えてしまう可能性が高いため問題となります。

この問題を回避するために、エンドユーザーに近いエッジで JavaScript/TypeScript を処理できる Vercel の Edge Functions を使用します。initial response を返した後に続く Streaming レスポンスに対してタイムアウトの制限が設けられていないため、適切な解決策となります。この場合、逐次表示する挙動になります。

この方法の場合、Vercel 公式のブログが参考になるでしょう。

https://vercel.com/blog/gpt-3-app-next-js-vercel-edge-functions

もう 1 つの方法は、直接クライアントで OpenAI API にリクエストを行う方法です。

この場合、API トークンがクライアントに露出してしまうため、ユースケースは限定的です。しかし、ユーザーが API トークンを入力する形式のアプリケーションでは、透明性が高く、適切な選択肢となります。

この場合、`@microsoft/fetch-event-source`などを活用すれば簡単に実装できます。

https://www.npmjs.com/package/@microsoft/fetch-event-source
