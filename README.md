# アバターカスタマイズアプリ

Next.js（App Router）+ TypeScript で作ったかわいいローポリ猫をカスタマイズできるアプリです。

## デモ

ブラウザですぐ試せます。

**https://2606-avator-app.vercel.app**

スマホ・PCどちらでも動作確認できます。

## 機能

- **猫の種類・背景・アクセサリー・目・口・おしゃれ** をそれぞれ選択
- 選択すると猫アバターがリアルタイムで更新
- 猫のパーツは **SVG** で描画（画像ファイル不要）
- **ランダムでつくる** ボタン付き
- **PNGで画像保存**（ファイル名: `avatar customize_yyyymmdd.png`）

## カスタマイズ一覧

| カテゴリ | 選択肢 |
|---|---|
| 猫の種類 | 茶トラ / ハチワレ / 白猫 |
| 背景 | あか / きいろ / あお |
| アクセサリー | なし / ヘッドホン / ベレー帽 / パーティーハット |
| 目 | まる目 / にこにこ / 眠た目 / メガネ |
| 口 | ねこ口 / あけ口 / ちいさめ |
| おしゃれ | マフラー / バンダナ / リボン / ボーダー |

## スマホUIの改善（実務経験を活かした対応）

Web制作・フロントエンド開発の実務で培った **モバイルファーストのUI設計** を踏まえ、スマホ表示を次のように改善しました。縦長画面でも「プレビューを見ながら選べる」「主要操作にすぐ届く」ことを優先しています。

| 課題 | 対応 |
|---|---|
| 縦長画面で選択肢が見づらい | 画面を **アバター領域 70% : 選択肢 30%**（`flex-[7]` / `flex-[3]`）に分割 |
| プレビューを見ながら操作したい | アバターを **上部に固定**、選択肢のみ **下部スクロール**（`overflow-y-auto` + `overscroll-contain`） |
| ボタンが押しづらい | アバターと **ランダム生成・画像保存** を横並び grid に配置（比率 8.5 : 1.5） |
| 主要操作の視認性 | **ランダム生成** を最優先、**画像保存** を次点のボタン階層に設計 |
| モバイルブラウザの表示崩れ | ビューポート高さに `h-dvh` を採用し、アドレスバー表示の揺れを吸収 |

PC表示は従来どおり左右2カラムを維持し、**レスポンシブでレイアウトを切り替える** 構成にしています（`lg:` ブレークポイントでスマホ専用レイアウトとPC用レイアウトを分離）。

## ファイル構成

```
260620_avator-app/
├── app/
│   ├── globals.css          # グローバルスタイル（Tailwind + 背景）
│   ├── layout.tsx           # ルートレイアウト
│   └── page.tsx             # メインページ
├── components/
│   ├── Avatar/
│   │   ├── Avatar.tsx       # 猫アバター全体（SVG）
│   │   ├── AvatarFace.tsx   # 頭・体・耳・しっぽ・ひげ
│   │   ├── AvatarHair.tsx   # アクセサリー（帽子・ヘッドホンなど）
│   │   ├── AvatarEyes.tsx   # 目パーツ
│   │   ├── AvatarMouth.tsx    # 口パーツ
│   │   └── AvatarClothes.tsx # おしゃれパーツ
│   ├── PartSelector/
│   │   ├── PartSelector.tsx # パーツ選択UI
│   │   └── PartOption.tsx   # 選択ボタン
│   └── AvatarCustomizer.tsx # 状態管理（Client Component）
├── lib/
│   ├── avatarParts.ts       # パーツ選択肢の定義
│   ├── avatarLayout.ts      # 猫・装飾のレイアウト定数
│   ├── avatarBackgrounds.ts # 背景色定義
│   ├── catBreeds.ts         # 猫の種類ごとの配色
│   └── downloadAvatarPng.ts # PNGダウンロード処理
├── types/
│   └── avatar.ts            # TypeScript 型定義
└── package.json
```

## スタイルの分担

| 対象 | 技術 |
|---|---|
| ページ・ボタン・カード | Tailwind CSS（`className`） |
| 猫アバター | SVG + `catBreeds.ts` / `avatarLayout.ts` |
| 背景グラデーション | `globals.css` |

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 でアプリを確認できます。

## 技術スタック

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS v4
- SVG（ローポリ猫パーツ）

## リポジトリ

https://github.com/manonymous-monster/2606_avator-app
