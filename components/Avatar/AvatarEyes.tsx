import type { EyeStyle } from "@/types/avatar";

interface AvatarEyesProps {
  style: EyeStyle;
}

export function AvatarEyes({ style }: AvatarEyesProps) {
  switch (style) {
    case "round":
      return (
        <g>
          <ellipse cx="78" cy="108" rx="10" ry="12" fill="#2D3436" />
          <ellipse cx="122" cy="108" rx="10" ry="12" fill="#2D3436" />
          <circle cx="81" cy="105" r="3.5" fill="#fff" />
          <circle cx="125" cy="105" r="3.5" fill="#fff" />
        </g>
      );
    case "sparkle":
      return (
        <g>
          <ellipse cx="78" cy="108" rx="11" ry="13" fill="#2D3436" />
          <ellipse cx="122" cy="108" rx="11" ry="13" fill="#2D3436" />
          <circle cx="82" cy="104" r="4" fill="#fff" />
          <circle cx="126" cy="104" r="4" fill="#fff" />
          <circle cx="75" cy="112" r="1.5" fill="#74B9FF" />
          <circle cx="119" cy="112" r="1.5" fill="#74B9FF" />
          <path
            d="M78 92 L80 96 L78 100 L76 96 Z"
            fill="#FFD700"
            opacity="0.8"
          />
          <path
            d="M122 92 L124 96 L122 100 L120 96 Z"
            fill="#FFD700"
            opacity="0.8"
          />
        </g>
      );
    case "sleepy":
      return (
        <g>
          <path
            d="M66 108 Q78 100 90 108"
            stroke="#2D3436"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M110 108 Q122 100 134 108"
            stroke="#2D3436"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    case "wink":
      return (
        <g>
          <ellipse cx="78" cy="108" rx="10" ry="12" fill="#2D3436" />
          <circle cx="81" cy="105" r="3.5" fill="#fff" />
          <path
            d="M112 108 Q122 100 132 108"
            stroke="#2D3436"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      );
    default:
      return null;
  }
}
