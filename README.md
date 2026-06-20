# アバターカスタマイザー

Next.js（App Router）+ TypeScript で作った、かわいいアバターカスタマイズアプリです。

## 機能

- 髪型・目・口・服をそれぞれ 3〜4 種類から選択
- 選択するとアバターがリアルタイムで更新
- パーツは SVG で描画（画像ファイル不要）
- ランダム生成ボタン付き

## ファイル構成

```
260620_avator-app/
├── app/
│   ├── globals.css          # グローバルスタイル
│   ├── layout.tsx           # ルートレイアウト
│   └── page.tsx             # メインページ
├── components/
│   ├── Avatar/
│   │   ├── Avatar.tsx       # アバター全体（SVG）
│   │   ├── AvatarFace.tsx   # 顔・首
│   │   ├── AvatarHair.tsx   # 髪型パーツ
│   │   ├── AvatarEyes.tsx   # 目パーツ
│   │   ├── AvatarMouth.tsx  # 口パーツ
│   │   └── AvatarClothes.tsx # 服パーツ
│   ├── PartSelector/
│   │   ├── PartSelector.tsx # パーツ選択UI
│   │   └── PartOption.tsx   # 選択ボタン
│   └── AvatarCustomizer.tsx # 状態管理（Client Component）
├── lib/
│   └── avatarParts.ts       # パーツ選択肢の定義
├── types/
│   └── avatar.ts            # TypeScript 型定義
└── package.json
```

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 でアプリを確認できます。

## 技術スタック

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS
- SVG（アバターパーツ）

## Git

```bash
# リモートリポジトリを追加する場合
git remote add origin <your-repo-url>
git push -u origin main
```
