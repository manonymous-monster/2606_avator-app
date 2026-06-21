# アバターカスタマイズアプリタマイザー

Next.js（App Router）+ TypeScript で作った、snackanimals 風のかわいいローポリ猫をカスタマイズできるアプリです。

## 機能

- **アクセサリー・目・口・おしゃれ** をそれぞれ 3〜4 種類から選択
- 選択すると猫アバターがリアルタイムで更新
- 猫のパーツは **SVG** で描画（画像ファイル不要）
- **ランダムでつくる** ボタン付き

## カスタマイズ一覧

| カテゴリ | 選択肢 |
|---|---|
| アクセサリー | なし / ヘッドホン / ベレー帽 / パーティーハット |
| 目 | まる目 / にこにこ / 眠た目 / メガネ |
| 口 | ねこ口 / あけ口 / ちいさめ |
| おしゃれ | マフラー / バンダナ / メイド / ボーダー |

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
│   │   ├── AvatarMouth.tsx  # 口パーツ
│   │   └── AvatarClothes.tsx # おしゃれパーツ
│   ├── PartSelector/
│   │   ├── PartSelector.tsx # パーツ選択UI
│   │   └── PartOption.tsx   # 選択ボタン
│   └── AvatarCustomizer.tsx # 状態管理（Client Component）
├── lib/
│   ├── avatarParts.ts       # パーツ選択肢の定義
│   └── avatarColors.ts      # 猫の配色定数
├── types/
│   └── avatar.ts            # TypeScript 型定義
└── package.json
```

## スタイルの分担

| 対象 | 技術 |
|---|---|
| ページ・ボタン・カード | Tailwind CSS（`className`） |
| 猫アバター | SVG + `avatarColors.ts` |
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

## Git

```bash
# リモートリポジトリを追加する場合
git remote add origin <your-repo-url>
git push -u origin main
```
