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
          <path d="M34,94 Q22,94 20,108 Q18,124 30,128 Q34,116 34,102 Q34,94 34,94" fill="#E74C3C" stroke={CAT.outlineDark} strokeWidth="1.5" />
          <path d="M166,94 Q178,94 180,108 Q182,124 170,128 Q166,116 166,102 Q166,94 166,94" fill="#E74C3C" stroke={CAT.outlineDark} strokeWidth="1.5" />
          <path d="M36,98 Q100,80 164,98" fill="none" stroke="#C0392B" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="28" cy="110" rx="9" ry="11" fill="#FADBD8" stroke={CAT.outlineDark} strokeWidth="1" />
          <ellipse cx="172" cy="110" rx="9" ry="11" fill="#FADBD8" stroke={CAT.outlineDark} strokeWidth="1" />
        </g>
      );

    case "long":
      return (
        <g>
          <ellipse cx="100" cy="50" rx="50" ry="14" fill="#C4A882" stroke={CAT.outline} strokeWidth="1.5" />
          <ellipse cx="100" cy="40" rx="36" ry="22" fill="#D4B896" stroke={CAT.outline} strokeWidth="1.5" />
          <ellipse cx="88" cy="36" rx="9" ry="7" fill="#B89870" opacity="0.35" />
          <ellipse cx="108" cy="34" rx="8" ry="6" fill="#B89870" opacity="0.35" />
        </g>
      );

    case "twintail":
      return (
        <g>
          <path d="M74,56 Q100,10 126,56 Q120,62 100,60 Q80,62 74,56" fill="#6BA4E7" stroke={CAT.outline} strokeWidth="1.5" strokeLinejoin="round" />
          <ellipse cx="100" cy="40" rx="16" ry="18" fill="#8BB8EE" opacity="0.45" />
          <circle cx="91" cy="38" r="2.5" fill="#fff" opacity="0.85" />
          <circle cx="108" cy="34" r="2" fill="#fff" opacity="0.85" />
          <ellipse cx="100" cy="58" rx="28" ry="6" fill="#FFD93D" stroke={CAT.outline} strokeWidth="1" />
        </g>
      );

    default:
      return null;
  }
}
