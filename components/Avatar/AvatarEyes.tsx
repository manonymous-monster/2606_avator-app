import type { EyeStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";

interface AvatarEyesProps {
  style: EyeStyle;
}

const FACE_DY = 50 * 0.95 * 0.9 * 0.97 * 0.9 * 0.05;
const LEFT_EYE = { cx: 84, cy: 106 + FACE_DY };
const RIGHT_EYE = { cx: 116, cy: 106 + FACE_DY };
const EYE_R = 6;

/** 3枚目参考：黒目 + 白ハイライト2つ */
function DotEye({ cx, cy, r = EYE_R }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={CAT.eye} />
      {/* 大きいハイライト（左上） */}
      <circle cx={cx - r * 0.35} cy={cy - r * 0.4} r={r * 0.42} fill="#fff" />
      {/* 小さいハイライト（右下） */}
      <circle cx={cx + r * 0.28} cy={cy + r * 0.3} r={r * 0.22} fill="#fff" />
    </g>
  );
}

export function AvatarEyes({ style }: AvatarEyesProps) {
  switch (style) {
    case "round":
      return (
        <g>
          <DotEye cx={LEFT_EYE.cx} cy={LEFT_EYE.cy} />
          <DotEye cx={RIGHT_EYE.cx} cy={RIGHT_EYE.cy} />
        </g>
      );

    case "sparkle":
      return (
        <g
          fill="none"
          stroke={CAT.eye}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={`M${LEFT_EYE.cx - 7} ${LEFT_EYE.cy + 2} Q${LEFT_EYE.cx} ${LEFT_EYE.cy - 5} ${LEFT_EYE.cx + 7} ${LEFT_EYE.cy + 2}`} />
          <path d={`M${RIGHT_EYE.cx - 7} ${RIGHT_EYE.cy + 2} Q${RIGHT_EYE.cx} ${RIGHT_EYE.cy - 5} ${RIGHT_EYE.cx + 7} ${RIGHT_EYE.cy + 2}`} />
        </g>
      );

    case "sleepy":
      return (
        <g stroke={CAT.eye} strokeWidth="2.5" strokeLinecap="round">
          <line x1={LEFT_EYE.cx - 7} y1={LEFT_EYE.cy} x2={LEFT_EYE.cx + 7} y2={LEFT_EYE.cy} />
          <line x1={RIGHT_EYE.cx - 7} y1={RIGHT_EYE.cy} x2={RIGHT_EYE.cx + 7} y2={RIGHT_EYE.cy} />
        </g>
      );

    case "wink":
      return (
        <g>
          <circle cx={LEFT_EYE.cx} cy={LEFT_EYE.cy} r="12" fill="none" stroke="#E74C3C" strokeWidth="2.5" />
          <circle cx={RIGHT_EYE.cx} cy={RIGHT_EYE.cy} r="12" fill="none" stroke="#E74C3C" strokeWidth="2.5" />
          <line x1={LEFT_EYE.cx + 8} y1={LEFT_EYE.cy} x2={RIGHT_EYE.cx - 8} y2={RIGHT_EYE.cy} stroke="#E74C3C" strokeWidth="2" />
          <DotEye cx={LEFT_EYE.cx} cy={LEFT_EYE.cy} r={4} />
          <DotEye cx={RIGHT_EYE.cx} cy={RIGHT_EYE.cy} r={4} />
        </g>
      );

    default:
      return null;
  }
}
