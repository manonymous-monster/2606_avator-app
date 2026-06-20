import type { MouthStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";

interface AvatarMouthProps {
  style: MouthStyle;
}

export function AvatarMouth({ style }: AvatarMouthProps) {
  switch (style) {
    case "smile":
      return (
        <g
          fill="none"
          stroke={CAT.outlineDark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M88 116 Q94 120 100 116 Q106 120 112 116" />
        </g>
      );

    case "grin":
      return (
        <g>
          <ellipse
            cx="100"
            cy="118"
            rx="9"
            ry="8"
            fill="#F5A0A0"
            stroke={CAT.outlineDark}
            strokeWidth="1.5"
          />
          <ellipse cx="100" cy="120" rx="5.5" ry="3.5" fill="#E88888" opacity="0.5" />
        </g>
      );

    case "small":
      return <circle cx="100" cy="117" r="2.2" fill={CAT.outlineDark} />;

    default:
      return null;
  }
}
