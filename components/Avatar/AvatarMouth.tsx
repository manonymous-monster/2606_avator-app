import type { MouthStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";

interface AvatarMouthProps {
  style: MouthStyle;
}

const FACE_DY = 50 * 0.95 * 0.9 * 0.97 * 0.9 * 0.05;
const MOUTH_Y = 122 + FACE_DY;

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
          <path d={`M90 ${MOUTH_Y} Q94 ${MOUTH_Y + 4} 100 ${MOUTH_Y} Q106 ${MOUTH_Y + 4} 110 ${MOUTH_Y}`} />
        </g>
      );

    case "grin":
      return (
        <g>
          <ellipse
            cx="100"
            cy={MOUTH_Y + 2}
            rx="7.2"
            ry="6.3"
            fill="#F5A0A0"
            stroke={CAT.outlineDark}
            strokeWidth="1.5"
          />
          <ellipse cx="100" cy={MOUTH_Y + 4} rx="4.5" ry="2.7" fill="#E88888" opacity="0.5" />
        </g>
      );

    case "small":
      return <circle cx="100" cy={MOUTH_Y + 1} r="2.2" fill={CAT.outlineDark} />;

    default:
      return null;
  }
}
