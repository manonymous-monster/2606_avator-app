import type { BackgroundStyle } from "@/types/avatar";

export interface AvatarBackgroundTheme {
  label: string;
  from: string;
  to: string;
  shadow: string;
}

export const AVATAR_BACKGROUNDS: Record<BackgroundStyle, AvatarBackgroundTheme> = {
  red: {
    label: "あか",
    from: "#FFE8E8",
    to: "#FFCACA",
    shadow: "#E8A8A8",
  },
  yellow: {
    label: "きいろ",
    from: "#FFF8DC",
    to: "#FFEDA0",
    shadow: "#E8D080",
  },
  blue: {
    label: "あお",
    from: "#E3F2FF",
    to: "#B8DAFF",
    shadow: "#98B8E0",
  },
};
