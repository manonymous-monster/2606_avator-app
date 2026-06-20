import type { AvatarPartOptions } from "@/types/avatar";

export const AVATAR_PART_OPTIONS: AvatarPartOptions = {
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
    { id: "dress", label: "メイド", emoji: "🎀" },
    { id: "overalls", label: "ボーダー", emoji: "👕" },
  ],
};

export const PART_CATEGORY_LABELS: Record<
  keyof AvatarPartOptions,
  string
> = {
  hair: "頭の装飾",
  eyes: "目",
  mouth: "口",
  clothes: "おしゃれ",
};
