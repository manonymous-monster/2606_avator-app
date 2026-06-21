import { CAT } from "@/lib/avatarColors";
import {
  BODY_SHIFT,
  EAR_GROUP_DY,
  EAR_INWARD,
  EAR_PIVOT_Y,
  EAR_ROTATE,
  EAR_SCALE,
  EAR_UP_DY,
  FACE_DY,
  HEAD_CX,
  HEAD_OUTLINE_CY,
  MUZZLE_CY,
  OUTLINE_RX,
  OUTLINE_RY,
  OUTLINE_TALL,
  SHADE_SCALE,
  SHADE_WIDE,
} from "@/lib/avatarLayout";

export function AvatarFace() {
  return (
    <g>
      <defs>
        <clipPath id="avatarHeadClip">
          <ellipse cx={HEAD_CX} cy={HEAD_OUTLINE_CY} rx={OUTLINE_RX} ry={OUTLINE_RY} />
        </clipPath>
      </defs>
      {/* ── しっぽ（1本） ── */}
      <path
        d="M56,148 Q38,130 30,108 Q26,90 40,84"
        fill="none"
        stroke={CAT.fur.mid}
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* ── 体 ── */}
      <ellipse
        cx="100"
        cy={168 + BODY_SHIFT}
        rx="28"
        ry="22"
        fill={CAT.fur.base}
        stroke={CAT.outline}
        strokeWidth="1.5"
      />
      {/* ── 手足 ── */}
      <ellipse cx="80" cy={174 + BODY_SHIFT} rx="8" ry="7" fill={CAT.fur.base} stroke={CAT.outline} strokeWidth="1.5" />
      <ellipse cx="120" cy={174 + BODY_SHIFT} rx="8" ry="7" fill={CAT.fur.base} stroke={CAT.outline} strokeWidth="1.5" />
      <ellipse cx="88" cy={196 + BODY_SHIFT} rx="9" ry="8" fill={CAT.fur.base} stroke={CAT.outline} strokeWidth="1.5" />
      <ellipse cx="112" cy={196 + BODY_SHIFT} rx="9" ry="8" fill={CAT.fur.base} stroke={CAT.outline} strokeWidth="1.5" />

      {/* ── 頭（外側輪郭のみ） ── */}
      <ellipse
        cx={HEAD_CX}
        cy={HEAD_OUTLINE_CY}
        rx={OUTLINE_RX}
        ry={OUTLINE_RY}
        fill={CAT.fur.base}
        stroke={CAT.outline}
        strokeWidth="1.5"
      />
      <ellipse
        cx="88"
        cy={HEAD_OUTLINE_CY - 10}
        rx={34 * SHADE_SCALE * SHADE_WIDE}
        ry={28 * SHADE_SCALE * OUTLINE_TALL}
        fill={CAT.fur.light}
        opacity="0.45"
      />
      <ellipse
        cx="116"
        cy={HEAD_OUTLINE_CY + 6}
        rx={26 * SHADE_SCALE * SHADE_WIDE}
        ry={24 * SHADE_SCALE * OUTLINE_TALL}
        fill={CAT.fur.shadow}
        opacity="0.25"
      />

      {/* ── 耳（内側へ・外側に傾斜） ── */}
      <g transform={`translate(0 ${EAR_GROUP_DY - EAR_UP_DY})`}>
        <g
          transform={`translate(${EAR_INWARD} 0) translate(72 ${EAR_PIVOT_Y}) rotate(-${EAR_ROTATE}) scale(${EAR_SCALE}) translate(-72 -${EAR_PIVOT_Y})`}
        >
          <path
            d="M64,71 L70,54 Q72,52 74,54 L80,71 Z"
            fill={CAT.fur.base}
            stroke={CAT.outline}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M68,69 L71,58 Q72,56 73,58 L76,67 Z" fill="#F0C4C4" opacity="0.6" />
        </g>

        <g
          transform={`translate(-${EAR_INWARD} 0) translate(128 ${EAR_PIVOT_Y}) rotate(${EAR_ROTATE}) scale(${EAR_SCALE}) translate(-128 -${EAR_PIVOT_Y})`}
        >
          <path
            d="M136,71 L130,54 Q128,52 126,54 L120,71 Z"
            fill={CAT.fur.base}
            stroke={CAT.outline}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M132,69 L129,58 Q128,56 127,58 L124,67 Z" fill="#F0C4C4" opacity="0.6" />
        </g>
      </g>

      {/* ── 白いマズル（15%上・目鼻口とは別） ── */}
      <ellipse
        cx="100"
        cy={MUZZLE_CY}
        rx="34"
        ry="22"
        fill={CAT.muzzle}
        stroke={CAT.outline}
        strokeWidth="1"
        clipPath="url(#avatarHeadClip)"
      />

      {/* 鼻（位置そのまま） */}
      <ellipse cx="100" cy={112 + FACE_DY} rx="4" ry="3" fill={CAT.nose} stroke={CAT.outline} strokeWidth="0.8" />

      {/* ひげ（位置そのまま） */}
      <g stroke={CAT.whisker} strokeWidth="1.2" strokeLinecap="round">
        <line x1="70" y1={114 + FACE_DY} x2="46" y2={112 + FACE_DY} />
        <line x1="70" y1={118 + FACE_DY} x2="44" y2={118 + FACE_DY} />
        <line x1="70" y1={122 + FACE_DY} x2="46" y2={124 + FACE_DY} />
        <line x1="130" y1={114 + FACE_DY} x2="154" y2={112 + FACE_DY} />
        <line x1="130" y1={118 + FACE_DY} x2="156" y2={118 + FACE_DY} />
        <line x1="130" y1={122 + FACE_DY} x2="154" y2={124 + FACE_DY} />
      </g>
    </g>
  );
}
