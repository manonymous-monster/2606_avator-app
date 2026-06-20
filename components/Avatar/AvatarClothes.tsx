import type { ClothesStyle } from "@/types/avatar";

interface AvatarClothesProps {
  style: ClothesStyle;
}

export function AvatarClothes({ style }: AvatarClothesProps) {
  switch (style) {
    case "tshirt":
      return (
        <g>
          <path
            d="M55 165 L70 155 L85 162 L100 158 L115 162 L130 155 L145 165 L145 210 L55 210 Z"
            fill="#74B9FF"
          />
          <path
            d="M85 162 L100 175 L115 162"
            fill="#0984E3"
            opacity="0.3"
          />
          <circle cx="100" cy="185" r="4" fill="#FFD700" />
        </g>
      );
    case "hoodie":
      return (
        <g>
          <path
            d="M50 165 L68 152 L85 160 L100 155 L115 160 L132 152 L150 165 L150 215 L50 215 Z"
            fill="#A29BFE"
          />
          <path
            d="M85 155 Q100 148 115 155 L115 175 Q100 182 85 175 Z"
            fill="#6C5CE7"
          />
          <ellipse cx="100" cy="152" rx="18" ry="8" fill="#A29BFE" />
        </g>
      );
    case "dress":
      return (
        <g>
          <path
            d="M70 162 L100 158 L130 162 L145 215 Q100 225 55 215 Z"
            fill="#FD79A8"
          />
          <path
            d="M70 162 Q100 170 130 162"
            fill="#E84393"
            opacity="0.4"
          />
          <circle cx="85" cy="190" r="3" fill="#fff" opacity="0.5" />
          <circle cx="115" cy="200" r="3" fill="#fff" opacity="0.5" />
        </g>
      );
    case "overalls":
      return (
        <g>
          <path
            d="M60 165 L75 158 L85 165 L85 210 L60 210 Z"
            fill="#55EFC4"
          />
          <path
            d="M115 165 L130 158 L140 165 L140 210 L115 210 Z"
            fill="#55EFC4"
          />
          <rect x="55" y="165" width="90" height="50" rx="4" fill="#00B894" />
          <rect x="82" y="158" width="8" height="20" rx="2" fill="#55EFC4" />
          <rect x="110" y="158" width="8" height="20" rx="2" fill="#55EFC4" />
          <circle cx="100" cy="185" r="5" fill="#FFD700" />
        </g>
      );
    default:
      return null;
  }
}
