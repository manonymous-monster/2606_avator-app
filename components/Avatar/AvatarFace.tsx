import type { CatBreed } from "@/types/avatar";
import { getCatPalette, type CatPalette } from "@/lib/catBreeds";
import {
  BODY_CY,
  BODY_CX,
  BODY_RX,
  BODY_RY,
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

interface AvatarFaceProps {
  breed: CatBreed;
}

function TabbyStripes({ palette }: { palette: CatPalette }) {
  const stripe = palette.stripe ?? palette.fur.dark;

  return (
    <g opacity="0.5">
      <ellipse
        cx={HEAD_CX - 18}
        cy={HEAD_OUTLINE_CY - 8}
        rx={10}
        ry={4}
        fill={stripe}
        transform={`rotate(-25 ${HEAD_CX - 18} ${HEAD_OUTLINE_CY - 8})`}
        clipPath="url(#avatarHeadClip)"
      />
      <ellipse
        cx={HEAD_CX + 4}
        cy={HEAD_OUTLINE_CY - 14}
        rx={12}
        ry={3.5}
        fill={stripe}
        transform={`rotate(10 ${HEAD_CX + 4} ${HEAD_OUTLINE_CY - 14})`}
        clipPath="url(#avatarHeadClip)"
      />
      <ellipse
        cx={HEAD_CX + 22}
        cy={HEAD_OUTLINE_CY - 4}
        rx={9}
        ry={3}
        fill={stripe}
        transform={`rotate(30 ${HEAD_CX + 22} ${HEAD_OUTLINE_CY - 4})`}
        clipPath="url(#avatarHeadClip)"
      />
      <ellipse
        cx={100}
        cy={168 + BODY_SHIFT - 4}
        rx={18}
        ry={3}
        fill={stripe}
        transform={`rotate(-8 ${100} ${168 + BODY_SHIFT - 4})`}
      />
      <ellipse
        cx={100}
        cy={168 + BODY_SHIFT + 8}
        rx={16}
        ry={2.5}
        fill={stripe}
        transform={`rotate(5 ${100} ${168 + BODY_SHIFT + 8})`}
      />
    </g>
  );
}

function HachiwarePatch({ palette }: { palette: CatPalette }) {
  const patch = palette.patch ?? palette.fur.dark;

  return (
    <g clipPath="url(#avatarHeadClip)">
      <path
        d={`M ${HEAD_CX - OUTLINE_RX * 0.95} ${HEAD_OUTLINE_CY - OUTLINE_RY * 0.05}
            Q ${HEAD_CX - OUTLINE_RX * 0.5} ${HEAD_OUTLINE_CY - OUTLINE_RY * 1.05}
              ${HEAD_CX + OUTLINE_RX * 0.15} ${HEAD_OUTLINE_CY - OUTLINE_RY * 0.95}
            Q ${HEAD_CX + OUTLINE_RX * 0.85} ${HEAD_OUTLINE_CY - OUTLINE_RY * 0.55}
              ${HEAD_CX + OUTLINE_RX * 0.75} ${HEAD_OUTLINE_CY - OUTLINE_RY * 0.05}
            Q ${HEAD_CX} ${HEAD_OUTLINE_CY - OUTLINE_RY * 0.2}
              ${HEAD_CX - OUTLINE_RX * 0.95} ${HEAD_OUTLINE_CY - OUTLINE_RY * 0.05} Z`}
        fill={patch}
      />
    </g>
  );
}

function buildTailPath() {
  const baseX = BODY_CX - BODY_RX * 0.82;
  const baseY = BODY_CY + BODY_RY * 0.12;

  return [
    `M ${baseX} ${baseY}`,
    `Q ${baseX - 18} ${baseY - 18} ${baseX - 27} ${baseY - 40}`,
    `Q ${baseX - 38} ${baseY - 74} ${baseX - 36} ${baseY - 80}`,
  ].join(" ");
}

export function AvatarFace({ breed }: AvatarFaceProps) {
  const palette = getCatPalette(breed);

  return (
    <g>
      <defs>
        <clipPath id="avatarHeadClip">
          <ellipse cx={HEAD_CX} cy={HEAD_OUTLINE_CY} rx={OUTLINE_RX} ry={OUTLINE_RY} />
        </clipPath>
      </defs>

      {/* ── しっぽ（体の下・左後ろから） ── */}
      <path
        d={buildTailPath()}
        fill="none"
        stroke={breed === "hachiware" ? palette.fur.base : palette.fur.mid}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── 体 ── */}
      <ellipse
        cx="100"
        cy={168 + BODY_SHIFT}
        rx="28"
        ry="22"
        fill={palette.fur.base}
        stroke={palette.outline}
        strokeWidth="1.5"
      />
      <ellipse cx="80" cy={174 + BODY_SHIFT} rx="8" ry="7" fill={palette.fur.base} stroke={palette.outline} strokeWidth="1.5" />
      <ellipse cx="120" cy={174 + BODY_SHIFT} rx="8" ry="7" fill={palette.fur.base} stroke={palette.outline} strokeWidth="1.5" />
      <ellipse cx="88" cy={196 + BODY_SHIFT} rx="9" ry="8" fill={palette.fur.base} stroke={palette.outline} strokeWidth="1.5" />
      <ellipse cx="112" cy={196 + BODY_SHIFT} rx="9" ry="8" fill={palette.fur.base} stroke={palette.outline} strokeWidth="1.5" />

      {breed === "hachiware" && (
        <>
          <ellipse cx="88" cy={196 + BODY_SHIFT} rx="5" ry="4" fill={palette.patch} opacity="0.9" />
          <ellipse cx="112" cy={196 + BODY_SHIFT} rx="5" ry="4" fill={palette.patch} opacity="0.9" />
        </>
      )}

      {/* ── 頭（輪郭） ── */}
      <ellipse
        cx={HEAD_CX}
        cy={HEAD_OUTLINE_CY}
        rx={OUTLINE_RX}
        ry={OUTLINE_RY}
        fill={palette.fur.base}
        stroke={palette.outline}
        strokeWidth="1.5"
      />
      {breed === "hachiware" && <HachiwarePatch palette={palette} />}
      {breed === "tabby" && <TabbyStripes palette={palette} />}
      <ellipse
        cx="88"
        cy={HEAD_OUTLINE_CY - 10}
        rx={34 * SHADE_SCALE * SHADE_WIDE}
        ry={28 * SHADE_SCALE * OUTLINE_TALL}
        fill={palette.fur.light}
        opacity="0.45"
      />
      <ellipse
        cx="116"
        cy={HEAD_OUTLINE_CY + 6}
        rx={26 * SHADE_SCALE * SHADE_WIDE}
        ry={24 * SHADE_SCALE * OUTLINE_TALL}
        fill={palette.fur.shadow}
        opacity="0.25"
      />

      {/* ── 耳 ── */}
      <g transform={`translate(0 ${EAR_GROUP_DY - EAR_UP_DY})`}>
        <g
          transform={`translate(${EAR_INWARD} 0) translate(72 ${EAR_PIVOT_Y}) rotate(-${EAR_ROTATE}) scale(${EAR_SCALE}) translate(-72 -${EAR_PIVOT_Y})`}
        >
          <path
            d="M64,71 L70,54 Q72,52 74,54 L80,71 Z"
            fill={breed === "hachiware" ? palette.patch : palette.fur.base}
            stroke={palette.outline}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M68,69 L71,58 Q72,56 73,58 L76,67 Z" fill={palette.innerEar} opacity="0.6" />
        </g>

        <g
          transform={`translate(-${EAR_INWARD} 0) translate(128 ${EAR_PIVOT_Y}) rotate(${EAR_ROTATE}) scale(${EAR_SCALE}) translate(-128 -${EAR_PIVOT_Y})`}
        >
          <path
            d="M136,71 L130,54 Q128,52 126,54 L120,71 Z"
            fill={breed === "hachiware" ? palette.patch : palette.fur.base}
            stroke={palette.outline}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M132,69 L129,58 Q128,56 127,58 L124,67 Z" fill={palette.innerEar} opacity="0.6" />
        </g>
      </g>

      {/* ── マズル ── */}
      <ellipse
        cx="100"
        cy={MUZZLE_CY}
        rx="34"
        ry="22"
        fill={palette.muzzle}
        stroke={palette.outline}
        strokeWidth="1"
        clipPath="url(#avatarHeadClip)"
      />

      <ellipse cx="100" cy={112 + FACE_DY} rx="4" ry="3" fill={palette.nose} stroke={palette.outline} strokeWidth="0.8" />

      <g stroke={palette.whisker} strokeWidth="1.2" strokeLinecap="round">
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
