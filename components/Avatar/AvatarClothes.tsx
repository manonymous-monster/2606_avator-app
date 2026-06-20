import type { ClothesStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";

const BODY_SHIFT = -10 - 50 * 0.95 * 0.9 * 0.97 * 0.9 * 0.05;

interface AvatarClothesProps {
  style: ClothesStyle;
}

export function AvatarClothes({ style }: AvatarClothesProps) {
  switch (style) {
    case "tshirt":
      return (
        <g>
          <path d={`M120,${154 + BODY_SHIFT} Q128,${158 + BODY_SHIFT} 125,${166 + BODY_SHIFT}`} fill="none" stroke="#E8E0D4" strokeWidth="4" strokeLinecap="round" />
          <path d={`M80,${154 + BODY_SHIFT} Q72,${158 + BODY_SHIFT} 75,${166 + BODY_SHIFT}`} fill="none" stroke="#E8E0D4" strokeWidth="4" strokeLinecap="round" />
        </g>
      );

    case "hoodie":
      return (
        <g>
          <ellipse cx="100" cy={176 + BODY_SHIFT} rx="28" ry="14" fill="#6BA4E7" stroke={CAT.outline} strokeWidth="1.5" />
          <circle cx="88" cy={174 + BODY_SHIFT} r="2.2" fill="#fff" opacity="0.8" />
          <circle cx="100" cy={171 + BODY_SHIFT} r="1.8" fill="#fff" opacity="0.8" />
          <circle cx="112" cy={174 + BODY_SHIFT} r="2.2" fill="#fff" opacity="0.8" />
          <circle cx="93" cy={179 + BODY_SHIFT} r="1.6" fill="#fff" opacity="0.8" />
          <circle cx="107" cy={179 + BODY_SHIFT} r="1.6" fill="#fff" opacity="0.8" />
        </g>
      );

    case "dress":
      return (
        <g>
          <ellipse cx="100" cy={178 + BODY_SHIFT} rx="28" ry="20" fill="#FAF5EE" stroke={CAT.outline} strokeWidth="1.5" />
          <ellipse cx="100" cy={158 + BODY_SHIFT} rx="22" ry="9" fill="#F0E8DA" stroke={CAT.outline} strokeWidth="1" />
          <path d={`M74,${188 + BODY_SHIFT} Q84,${184 + BODY_SHIFT} 94,${188 + BODY_SHIFT} Q100,${186 + BODY_SHIFT} 106,${188 + BODY_SHIFT} Q116,${184 + BODY_SHIFT} 126,${188 + BODY_SHIFT}`} fill="none" stroke={CAT.outline} strokeWidth="1.2" strokeLinecap="round" />
          <ellipse cx="100" cy={155 + BODY_SHIFT} rx="7" ry="5" fill="#E74C3C" stroke={CAT.outline} strokeWidth="1" />
        </g>
      );

    case "overalls":
      return (
        <g>
          <ellipse cx="100" cy={174 + BODY_SHIFT} rx="28" ry="18" fill="#FADADD" stroke={CAT.outline} strokeWidth="1.5" />
          {[0, 1, 2, 3].map((i) => (
            <ellipse
              key={i}
              cx="100"
              cy={162 + BODY_SHIFT + i * 6}
              rx={24 - i * 1.2}
              ry="2.2"
              fill={i % 2 === 0 ? "#F8A5B8" : "#FADADD"}
            />
          ))}
        </g>
      );

    default:
      return null;
  }
}
