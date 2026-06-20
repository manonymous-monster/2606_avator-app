import { CAT } from "@/lib/avatarColors";

export function AvatarFace() {
  return (
    <g>
      {/* ── しっぽ（丸くカール） ── */}
      <path
        d="M58,162 Q38,155 32,128 Q28,105 42,98 Q52,108 55,130 Q58,148 62,158"
        fill="none"
        stroke={CAT.fur.mid}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M58,162 Q38,155 32,128 Q28,105 42,98"
        fill="none"
        stroke={CAT.fur.shadow}
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* ── 後ろ足 ── */}
      <ellipse cx="74" cy="200" rx="15" ry="11" fill={CAT.fur.shadow} />
      <ellipse cx="126" cy="200" rx="15" ry="11" fill={CAT.fur.shadow} />

      {/* ── 体（丸い楕円） ── */}
      <ellipse
        cx="100"
        cy="168"
        rx="42"
        ry="36"
        fill={CAT.fur.base}
        stroke={CAT.outline}
        strokeWidth="1.5"
      />
      <ellipse
        cx="92"
        cy="160"
        rx="28"
        ry="22"
        fill={CAT.fur.light}
        opacity="0.55"
      />
      <ellipse
        cx="112"
        cy="172"
        rx="22"
        ry="18"
        fill={CAT.fur.shadow}
        opacity="0.35"
      />

      {/* 胸の白パッチ */}
      <ellipse
        cx="100"
        cy="165"
        rx="22"
        ry="20"
        fill={CAT.chest}
        stroke={CAT.outline}
        strokeWidth="1"
        opacity="0.92"
      />

      {/* ── 前足（丸ナブ） ── */}
      <ellipse cx="76" cy="194" rx="12" ry="10" fill={CAT.fur.base} stroke={CAT.outline} strokeWidth="1.5" />
      <ellipse cx="124" cy="194" rx="12" ry="10" fill={CAT.fur.base} stroke={CAT.outline} strokeWidth="1.5" />
      <ellipse cx="66" cy="172" rx="10" ry="9" fill={CAT.fur.mid} stroke={CAT.outline} strokeWidth="1.5" />
      <ellipse cx="134" cy="172" rx="10" ry="9" fill={CAT.fur.mid} stroke={CAT.outline} strokeWidth="1.5" />

      {/* ── 頭（輪郭だけ10%小、中身・耳はそのまま） ── */}
      <defs>
        <clipPath id="headOutline">
          <ellipse cx="100" cy="92" rx="50.4" ry="46.8" />
        </clipPath>
      </defs>
      <g clipPath="url(#headOutline)">
        <ellipse cx="100" cy="92" rx="56" ry="52" fill={CAT.fur.base} />
        <ellipse cx="88" cy="82" rx="38" ry="32" fill={CAT.fur.light} opacity="0.5" />
        <ellipse cx="118" cy="98" rx="30" ry="28" fill={CAT.fur.shadow} opacity="0.3" />
      </g>
      <ellipse
        cx="100"
        cy="92"
        rx="50.4"
        ry="46.8"
        fill="none"
        stroke={CAT.outline}
        strokeWidth="1.5"
      />

      {/* ── 耳（丸みのある耳） ── */}
      <path
        d="M58,78 Q52,48 68,58 Q78,68 72,82 Q64,84 58,78"
        fill={CAT.fur.base}
        stroke={CAT.outline}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M60,76 Q56,54 68,62 Q72,72 66,78"
        fill={CAT.fur.light}
        opacity="0.6"
      />
      <ellipse cx="64" cy="66" rx="5" ry="6" fill="#F0C4C4" opacity="0.55" />

      <path
        d="M142,78 Q148,48 132,58 Q122,68 128,82 Q136,84 142,78"
        fill={CAT.fur.base}
        stroke={CAT.outline}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M140,76 Q144,54 132,62 Q128,72 134,78"
        fill={CAT.fur.light}
        opacity="0.6"
      />
      <ellipse cx="136" cy="66" rx="5" ry="6" fill="#F0C4C4" opacity="0.55" />

      {/* ── マズル（丸い白パッチ） ── */}
      <ellipse
        cx="100"
        cy="112"
        rx="26"
        ry="18"
        fill={CAT.muzzle}
        stroke={CAT.outline}
        strokeWidth="1"
      />

      {/* 鼻 */}
      <ellipse cx="100" cy="106" rx="4" ry="3" fill={CAT.nose} stroke={CAT.outline} strokeWidth="0.8" />

      {/* ── ひげ ── */}
      <g stroke={CAT.whisker} strokeWidth="1.2" strokeLinecap="round">
        <line x1="78" y1="108" x2="54" y2="104" />
        <line x1="78" y1="112" x2="52" y2="112" />
        <line x1="78" y1="116" x2="54" y2="120" />
        <line x1="122" y1="108" x2="146" y2="104" />
        <line x1="122" y1="112" x2="148" y2="112" />
        <line x1="122" y1="116" x2="146" y2="120" />
      </g>
    </g>
  );
}
