import type { AvatarPartOptions } from "@/types/avatar";

export const AVATAR_PART_OPTIONS: AvatarPartOptions = {
  hair: [
    { id: "short", label: "ショート", emoji: "✂️" },
    { id: "bob", label: "ボブ", emoji: "💇" },
    { id: "long", label: "ロング", emoji: "🌊" },
    { id: "twintail", label: "ツインテール", emoji: "🎀" },
  ],
  eyes: [
    { id: "round", label: "まる目", emoji: "👀" },
    { id: "sparkle", label: "キラキラ", emoji: "✨" },
    { id: "sleepy", label: "眠た目", emoji: "😴" },
    { id: "wink", label: "ウィンク", emoji: "😉" },
  ],
  mouth: [
    { id: "smile", label: "にっこり", emoji: "😊" },
    { id: "grin", label: "にこにこ", emoji: "😄" },
    { id: "small", label: "小さめ", emoji: "🙂" },
  ],
  clothes: [
    { id: "tshirt", label: "Tシャツ", emoji: "👕" },
    { id: "hoodie", label: "パーカー", emoji: "🧥" },
    { id: "dress", label: "ワンピース", emoji: "👗" },
    { id: "overalls", label: "サロペット", emoji: "🩳" },
  ],
};

export const PART_CATEGORY_LABELS: Record<
  keyof AvatarPartOptions,
  string
> = {
  hair: "髪型",
  eyes: "目",
  mouth: "口",
  clothes: "服",
};
