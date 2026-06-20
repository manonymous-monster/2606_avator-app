import type { HairStyle } from "@/types/avatar";

interface AvatarHairProps {
  style: HairStyle;
}

export function AvatarHair({ style }: AvatarHairProps) {
  switch (style) {
    case "short":
      return (
        <g>
          <path
            d="M52 95 Q50 45 100 38 Q150 45 148 95 Q145 70 100 65 Q55 70 52 95"
            fill="#6B4226"
          />
          <path
            d="M58 88 Q55 60 100 55 Q145 60 142 88"
            fill="#8B5A2B"
            opacity="0.6"
          />
        </g>
      );
    case "bob":
      return (
        <g>
          <path
            d="M45 100 Q42 35 100 30 Q158 35 155 100 Q158 130 145 140 Q130 125 100 120 Q70 125 55 140 Q42 130 45 100"
            fill="#E84393"
          />
          <path
            d="M55 95 Q52 50 100 45 Q148 50 145 95"
            fill="#FD79A8"
            opacity="0.5"
          />
        </g>
      );
    case "long":
      return (
        <g>
          <path
            d="M42 105 Q38 30 100 25 Q162 30 158 105 Q165 180 145 195 Q130 160 100 155 Q70 160 55 195 Q35 180 42 105"
            fill="#9B59B6"
          />
          <path
            d="M55 100 Q50 45 100 40 Q150 45 145 100 Q148 160 100 150 Q52 160 55 100"
            fill="#BB8FCE"
            opacity="0.4"
          />
        </g>
      );
    case "twintail":
      return (
        <g>
          <path
            d="M50 95 Q48 40 100 35 Q152 40 150 95 Q148 75 100 70 Q52 75 50 95"
            fill="#FF6B9D"
          />
          <ellipse cx="38" cy="110" rx="14" ry="35" fill="#FF6B9D" />
          <ellipse cx="162" cy="110" rx="14" ry="35" fill="#FF6B9D" />
          <circle cx="38" cy="78" r="6" fill="#FFD700" />
          <circle cx="162" cy="78" r="6" fill="#FFD700" />
        </g>
      );
    default:
      return null;
  }
}
