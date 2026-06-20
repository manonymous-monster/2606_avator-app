import type { MouthStyle } from "@/types/avatar";

interface AvatarMouthProps {
  style: MouthStyle;
}

export function AvatarMouth({ style }: AvatarMouthProps) {
  switch (style) {
    case "smile":
      return (
        <path
          d="M82 132 Q100 148 118 132"
          stroke="#E17055"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      );
    case "grin":
      return (
        <g>
          <path
            d="M78 130 Q100 155 122 130"
            stroke="#E17055"
            strokeWidth="3"
            fill="#FF7675"
            strokeLinecap="round"
          />
          <path
            d="M88 138 Q100 142 112 138"
            stroke="#fff"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </g>
      );
    case "small":
      return (
        <ellipse cx="100" cy="136" rx="5" ry="3" fill="#E17055" />
      );
    default:
      return null;
  }
}
