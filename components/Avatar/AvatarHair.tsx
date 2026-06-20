import type { HairStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";

interface AvatarHairProps {
  style: HairStyle;
}

export function AvatarHair({ style }: AvatarHairProps) {
  switch (style) {
    case "short":
      return null;

    case "bob":
      return (
        <g>
          <path
            d="M36,98 Q26,98 24,112 Q22,128 34,132 Q38,120 38,106 Q38,98 36,98"
            fill="#E74C3C"
            stroke={CAT.outlineDark}
            strokeWidth="1.5"
          />
          <path
            d="M164,98 Q174,98 176,112 Q178,128 166,132 Q162,120 162,106 Q162,98 164,98"
            fill="#E74C3C"
            stroke={CAT.outlineDark}
            strokeWidth="1.5"
          />
          <path
            d="M38,102 Q100,88 162,102"
            fill="none"
            stroke="#C0392B"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <ellipse cx="32" cy="114" rx="10" ry="12" fill="#FADBD8" stroke={CAT.outlineDark} strokeWidth="1" />
          <ellipse cx="168" cy="114" rx="10" ry="12" fill="#FADBD8" stroke={CAT.outlineDark} strokeWidth="1" />
        </g>
      );

    case "long":
      return (
        <g>
          <ellipse
            cx="100"
            cy="54"
            rx="54"
            ry="16"
            fill="#C4A882"
            stroke={CAT.outline}
            strokeWidth="1.5"
          />
          <ellipse
            cx="100"
            cy="44"
            rx="40"
            ry="28"
            fill="#D4B896"
            stroke={CAT.outline}
            strokeWidth="1.5"
          />
          <ellipse cx="88" cy="40" rx="10" ry="8" fill="#B89870" opacity="0.35" />
          <ellipse cx="108" cy="38" rx="9" ry="7" fill="#B89870" opacity="0.35" />
          <ellipse cx="98" cy="48" rx="8" ry="6" fill="#B89870" opacity="0.35" />
        </g>
      );

    case "twintail":
      return (
        <g>
          <path
            d="M76,64 Q100,16 124,64 Q118,70 100,68 Q82,70 76,64"
            fill="#6BA4E7"
            stroke={CAT.outline}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <ellipse cx="100" cy="48" rx="18" ry="22" fill="#8BB8EE" opacity="0.45" />
          <circle cx="90" cy="46" r="3" fill="#fff" opacity="0.85" />
          <circle cx="108" cy="42" r="2.5" fill="#fff" opacity="0.85" />
          <circle cx="100" cy="56" r="2" fill="#fff" opacity="0.85" />
          <ellipse cx="100" cy="68" rx="32" ry="7" fill="#FFD93D" stroke={CAT.outline} strokeWidth="1" />
        </g>
      );

    default:
      return null;
  }
}
