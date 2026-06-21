import type { HairStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";
import {
  FACE_DY,
  HEAD_BASE_CY,
  HEAD_CX,
  HEAD_OUTLINE_CY,
  OUTLINE_RX,
  OUTLINE_RY,
} from "@/lib/avatarLayout";

/** ベレー帽・パーティーハット用：調整済み頭輪郭に合わせる */
const HEADWEAR_TRANSFORM = `translate(${HEAD_CX} ${HEAD_OUTLINE_CY}) scale(${OUTLINE_RX / 50} ${OUTLINE_RY / 50}) translate(-${HEAD_CX} -${HEAD_BASE_CY})`;

/** 🎧 ヘッドホン：目・顔位置を基準に配置 */
function Headphones() {
  const cupR = OUTLINE_RX * 0.26;
  const cupY = 106 + FACE_DY;
  const cupXL = HEAD_CX - OUTLINE_RX * 0.84;
  const cupXR = HEAD_CX + OUTLINE_RX * 0.84;
  const bandTop = HEAD_OUTLINE_CY - OUTLINE_RY * 0.95;
  const bandWidth = OUTLINE_RX * 0.15;
  const bandAttachY = cupY - cupR * 0.75;

  return (
    <g>
      {/* ヘッドバンド（頭頂をまたぐ太いアーチ） */}
      <path
        d={`M ${cupXL + cupR * 0.5} ${bandAttachY}
            Q ${HEAD_CX} ${bandTop} ${cupXR - cupR * 0.5} ${bandAttachY}`}
        fill="none"
        stroke="#C0392B"
        strokeWidth={bandWidth}
        strokeLinecap="round"
      />
      <path
        d={`M ${cupXL + cupR * 0.5} ${bandAttachY - bandWidth * 0.15}
            Q ${HEAD_CX} ${bandTop + bandWidth * 0.2} ${cupXR - cupR * 0.5} ${bandAttachY - bandWidth * 0.15}`}
        fill="none"
        stroke="#E74C3C"
        strokeWidth={bandWidth * 0.55}
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* 左イヤーカップ */}
      <circle cx={cupXL} cy={cupY} r={cupR} fill="#E74C3C" stroke={CAT.outlineDark} strokeWidth="1.5" />
      <circle cx={cupXL} cy={cupY} r={cupR * 0.62} fill="#FADBD8" stroke={CAT.outlineDark} strokeWidth="0.8" />
      <circle cx={cupXL - cupR * 0.18} cy={cupY - cupR * 0.18} r={cupR * 0.12} fill="#fff" opacity="0.35" />

      {/* 右イヤーカップ */}
      <circle cx={cupXR} cy={cupY} r={cupR} fill="#E74C3C" stroke={CAT.outlineDark} strokeWidth="1.5" />
      <circle cx={cupXR} cy={cupY} r={cupR * 0.62} fill="#FADBD8" stroke={CAT.outlineDark} strokeWidth="0.8" />
      <circle cx={cupXR - cupR * 0.18} cy={cupY - cupR * 0.18} r={cupR * 0.12} fill="#fff" opacity="0.35" />
    </g>
  );
}

interface AvatarHairProps {
  style: HairStyle;
}

export function AvatarHair({ style }: AvatarHairProps) {
  switch (style) {
    case "short":
      return null;

    case "bob":
      return <Headphones />;

    case "long":
      return (
        <g transform={HEADWEAR_TRANSFORM}>
          <ellipse cx="100" cy="50" rx="50" ry="14" fill="#C4A882" stroke={CAT.outline} strokeWidth="1.5" />
          <ellipse cx="100" cy="40" rx="36" ry="22" fill="#D4B896" stroke={CAT.outline} strokeWidth="1.5" />
          <ellipse cx="88" cy="36" rx="9" ry="7" fill="#B89870" opacity="0.35" />
          <ellipse cx="108" cy="34" rx="8" ry="6" fill="#B89870" opacity="0.35" />
        </g>
      );

    case "twintail":
      return (
        <g transform={HEADWEAR_TRANSFORM}>
          <path d="M74,56 Q100,10 126,56 Q120,62 100,60 Q80,62 74,56" fill="#6BA4E7" stroke={CAT.outline} strokeWidth="1.5" strokeLinejoin="round" />
          <ellipse cx="100" cy="40" rx="16" ry="18" fill="#8BB8EE" opacity="0.45" />
          <circle cx="91" cy="38" r="2.5" fill="#fff" opacity="0.85" />
          <circle cx="108" cy="34" r="2" fill="#fff" opacity="0.85" />
          <ellipse cx="100" cy="58" rx="28" ry="6" fill="#FFD93D" stroke={CAT.outline} strokeWidth="1" />
        </g>
      );

    default:
      return null;
  }
}
