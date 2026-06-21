import type { AvatarPartOptions } from "@/types/avatar";

export const AVATAR_PART_OPTIONS: AvatarPartOptions = {
  breed: [
    { id: "tabby", label: "茶トラ", emoji: "🐱" },
    { id: "hachiware", label: "ハチワレ", emoji: "🐈‍⬛" },
    { id: "white", label: "白猫", emoji: "🤍" },
  ],
  hair: [
    { id: "short", label: "なし", emoji: "🐱" },
    { id: "bob", label: "ヘッドホン", emoji: "🎧" },
    { id: "long", label: "ベレー帽", emoji: "🎨" },
    { id: "twintail", label: "パーティーハット", emoji: "🎉" },
  ],
  eyes: [
    { id: "round", label: "まる目", emoji: "⚫" },
    { id: "sparkle", label: "にこにこ", emoji: "^^" },
    { id: "sleepy", label: "眠た目", emoji: "😴" },
    { id: "wink", label: "メガネ", emoji: "👓" },
  ],
  mouth: [
    { id: "smile", label: "ねこ口", emoji: "🐾" },
    { id: "grin", label: "あけ口", emoji: "😮" },
    { id: "small", label: "ちいさめ", emoji: "·" },
  ],
  clothes: [
    { id: "tshirt", label: "マフラー", emoji: "🧣" },
    { id: "hoodie", label: "バンダナ", emoji: "🔵" },
    { id: "dress", label: "リボン", emoji: "🎀" },
    { id: "overalls", label: "ボーダー", emoji: "👕" },
  ],
  background: [
    { id: "red", label: "パステル赤", emoji: "", swatch: "#FFCACA" },
    { id: "yellow", label: "パステル黄", emoji: "", swatch: "#FFEDA0" },
    { id: "blue", label: "パステル青", emoji: "", swatch: "#B8DAFF" },
  ],
};

export const PART_CATEGORY_LABELS: Record<
  keyof AvatarPartOptions,
  string
> = {
  breed: "猫の種類",
  hair: "アクセサリー",
  eyes: "目",
  mouth: "口",
  clothes: "おしゃれ",
  background: "背景",
};
