import type { ClothesStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";

interface AvatarClothesProps {
  style: ClothesStyle;
}

export function AvatarClothes({ style }: AvatarClothesProps) {
  switch (style) {
    case "tshirt":
      return (
        <g>
          <ellipse
            cx="100"
            cy="158"
            rx="34"
            ry="14"
            fill="#F5F0E8"
            stroke={CAT.outline}
            strokeWidth="1.5"
          />
          <path
            d="M128,152 Q138,158 134,168"
            fill="none"
            stroke="#E8E0D4"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M72,152 Q62,158 66,168"
            fill="none"
            stroke="#E8E0D4"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
      );

    case "hoodie":
      return (
        <g>
          <ellipse
            cx="100"
            cy="158"
            rx="36"
            ry="14"
            fill="#6BA4E7"
            stroke={CAT.outline}
            strokeWidth="1.5"
          />
          <circle cx="86" cy="156" r="2.5" fill="#fff" opacity="0.75" />
          <circle cx="100" cy="152" r="2" fill="#fff" opacity="0.75" />
          <circle cx="114" cy="156" r="2.5" fill="#fff" opacity="0.75" />
          <circle cx="93" cy="162" r="2" fill="#fff" opacity="0.75" />
          <circle cx="108" cy="162" r="2" fill="#fff" opacity="0.75" />
        </g>
      );

    case "dress":
      return (
        <g>
          <ellipse
            cx="100"
            cy="172"
            rx="36"
            ry="28"
            fill="#FAF5EE"
            stroke={CAT.outline}
            strokeWidth="1.5"
          />
          <ellipse
            cx="100"
            cy="152"
            rx="28"
            ry="10"
            fill="#F0E8DA"
            stroke={CAT.outline}
            strokeWidth="1"
          />
          <path
            d="M66,188 Q78,182 90,188 Q100,184 110,188 Q122,182 134,188"
            fill="none"
            stroke={CAT.outline}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <ellipse cx="100" cy="148" rx="8" ry="6" fill="#E74C3C" stroke={CAT.outline} strokeWidth="1" />
        </g>
      );

    case "overalls":
      return (
        <g>
          <ellipse
            cx="100"
            cy="168"
            rx="38"
            ry="26"
            fill="#FADADD"
            stroke={CAT.outline}
            strokeWidth="1.5"
          />
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={i}
              cx="100"
              cy={154 + i * 7}
              rx={34 - i * 1.5}
              ry="2.5"
              fill={i % 2 === 0 ? "#F8A5B8" : "#FADADD"}
            />
          ))}
        </g>
      );

    default:
      return null;
  }
}
