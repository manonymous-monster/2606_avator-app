import type { ClothesStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";
import {
  BODY_CX,
  BODY_CY,
  BODY_RX,
  BODY_RY,
  CLOTHES_DY,
  NECK_Y,
} from "@/lib/avatarLayout";

interface AvatarClothesProps {
  style: ClothesStyle;
}

/** 🧣 マフラー：赤い首巻き＋前に垂れる2本 */
function Muffler() {
  const neckY = NECK_Y;
  const hangTop = neckY + BODY_RY * 0.18;
  const hangBottom = BODY_CY + BODY_RY * 0.42;
  const tailW = BODY_RX * 0.22;
  const red = "#E74C3C";
  const redDark = "#C0392B";

  const leftTailX = BODY_CX - tailW * 0.55;
  const rightTailX = BODY_CX + tailW * 0.35;

  const fringe = (baseX: number, baseY: number, count: number, spread: number) =>
    Array.from({ length: count }, (_, i) => {
      const x = baseX - spread / 2 + (spread / (count - 1)) * i;
      return (
        <line
          key={`${baseX}-${i}`}
          x1={x}
          y1={baseY}
          x2={x}
          y2={baseY + BODY_RY * 0.14}
          stroke={redDark}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      );
    });

  return (
    <g>
      {/* 首一周り（太い赤い輪） */}
      <ellipse
        cx={BODY_CX}
        cy={neckY + BODY_RY * 0.08}
        rx={BODY_RX * 0.74}
        ry={BODY_RY * 0.32}
        fill={red}
        stroke={CAT.outlineDark}
        strokeWidth="1.5"
      />
      <ellipse
        cx={BODY_CX}
        cy={neckY + BODY_RY * 0.14}
        rx={BODY_RX * 0.62}
        ry={BODY_RY * 0.14}
        fill={redDark}
        opacity="0.3"
      />

      {/* 左の垂れ */}
      <path
        d={`M ${leftTailX - tailW * 0.45} ${hangTop}
            L ${leftTailX + tailW * 0.45} ${hangTop}
            L ${leftTailX + tailW * 0.35} ${hangBottom}
            L ${leftTailX - tailW * 0.55} ${hangBottom} Z`}
        fill={red}
        stroke={CAT.outlineDark}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* 右の垂れ（少し長め・交差風） */}
      <path
        d={`M ${rightTailX - tailW * 0.45} ${hangTop + BODY_RY * 0.04}
            L ${rightTailX + tailW * 0.55} ${hangTop}
            L ${rightTailX + tailW * 0.65} ${hangBottom + BODY_RY * 0.08}
            L ${rightTailX - tailW * 0.35} ${hangBottom + BODY_RY * 0.04} Z`}
        fill={redDark}
        stroke={CAT.outlineDark}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* 房（フリンジ） */}
      {fringe(leftTailX, hangBottom, 5, tailW * 0.9)}
      {fringe(rightTailX + tailW * 0.1, hangBottom + BODY_RY * 0.08, 5, tailW * 0.95)}
    </g>
  );
}

/** バンダナ：首元の三角スカーフ */
function Bandana() {
  const knotY = NECK_Y + 1;
  const bandRx = BODY_RX * 0.92;
  const bandRy = BODY_RY * 0.55;

  return (
    <g>
      <path
        d={`M${BODY_CX - bandRx * 0.55},${knotY - 2}
            Q${BODY_CX},${knotY + bandRy * 1.1} ${BODY_CX + bandRx * 0.55},${knotY - 2}
            Q${BODY_CX + bandRx},${knotY + bandRy * 0.35} ${BODY_CX},${BODY_CY - BODY_RY * 0.35}
            Q${BODY_CX - bandRx},${knotY + bandRy * 0.35} ${BODY_CX - bandRx * 0.55},${knotY - 2} Z`}
        fill="#6BA4E7"
        stroke={CAT.outline}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {[
        { cx: BODY_CX - bandRx * 0.35, cy: knotY + bandRy * 0.45, r: 2.2 },
        { cx: BODY_CX, cy: knotY + bandRy * 0.2, r: 1.8 },
        { cx: BODY_CX + bandRx * 0.35, cy: knotY + bandRy * 0.45, r: 2.2 },
        { cx: BODY_CX - bandRx * 0.12, cy: BODY_CY - BODY_RY * 0.15, r: 1.6 },
        { cx: BODY_CX + bandRx * 0.12, cy: BODY_CY - BODY_RY * 0.08, r: 1.6 },
      ].map(({ cx, cy, r }) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#fff" opacity="0.85" />
      ))}
    </g>
  );
}

/** 🎀 リボン：バンダナと同位置・同サイズ感 */
function RibbonBow() {
  const knotY = NECK_Y + 1;
  const bandRx = BODY_RX * 0.92;
  const bandRy = BODY_RY * 0.55;
  const bowY = knotY + bandRy * 0.28;
  const tipY = BODY_CY - BODY_RY * 0.35;
  const loopRx = bandRx * 0.36;
  const loopRy = bandRy * 0.44;
  const pink = "#F8A5C8";
  const pinkLight = "#FADADD";

  return (
    <g>
      {/* 左ループ */}
      <ellipse
        cx={BODY_CX - loopRx * 0.88}
        cy={bowY - loopRy * 0.15}
        rx={loopRx}
        ry={loopRy}
        fill={pink}
        stroke={CAT.outline}
        strokeWidth="1.5"
        transform={`rotate(-20 ${BODY_CX - loopRx * 0.88} ${bowY - loopRy * 0.15})`}
      />
      {/* 右ループ */}
      <ellipse
        cx={BODY_CX + loopRx * 0.88}
        cy={bowY - loopRy * 0.15}
        rx={loopRx}
        ry={loopRy}
        fill={pink}
        stroke={CAT.outline}
        strokeWidth="1.5"
        transform={`rotate(20 ${BODY_CX + loopRx * 0.88} ${bowY - loopRy * 0.15})`}
      />
      {/* 左垂れ */}
      <path
        d={`M${BODY_CX - 4},${bowY + 3}
            L${BODY_CX - loopRx * 0.42},${tipY}
            L${BODY_CX - 1},${tipY - bandRy * 0.1} Z`}
        fill={pinkLight}
        stroke={CAT.outline}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* 右垂れ */}
      <path
        d={`M${BODY_CX + 4},${bowY + 3}
            L${BODY_CX + loopRx * 0.42},${tipY}
            L${BODY_CX + 1},${tipY - bandRy * 0.1} Z`}
        fill={pinkLight}
        stroke={CAT.outline}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* 結び目 */}
      <ellipse
        cx={BODY_CX}
        cy={bowY}
        rx={loopRx * 0.24}
        ry={loopRy * 0.3}
        fill="#E74C3C"
        stroke={CAT.outline}
        strokeWidth="1.2"
      />
      <circle cx={BODY_CX - loopRx * 0.95} cy={bowY - loopRy * 0.35} r="2" fill="#fff" opacity="0.55" />
      <circle cx={BODY_CX + loopRx * 0.75} cy={bowY - loopRy * 0.38} r="1.6" fill="#fff" opacity="0.55" />
    </g>
  );
}

/** ボーダー：胴体の横ストライプ（淡い青） */
function BorderShirt() {
  const shirtY = BODY_CY - BODY_RY * 0.05;
  const stripeTop = BODY_CY - BODY_RY * 0.55;
  const blueLight = "#D6EAF8";
  const blueStripe = "#9EC5E8";

  return (
    <g>
      <ellipse
        cx={BODY_CX}
        cy={shirtY}
        rx={BODY_RX}
        ry={BODY_RY * 0.82}
        fill={blueLight}
        stroke={CAT.outline}
        strokeWidth="1.5"
      />
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={i}
          cx={BODY_CX}
          cy={stripeTop + i * (BODY_RY * 0.22)}
          rx={BODY_RX * 0.86 - i * 1.2}
          ry={BODY_RY * 0.09}
          fill={i % 2 === 0 ? blueStripe : blueLight}
        />
      ))}
    </g>
  );
}

export function AvatarClothes({ style }: AvatarClothesProps) {
  const neckwear = (node: React.ReactNode) => (
    <g transform={`translate(0 ${CLOTHES_DY})`}>{node}</g>
  );

  switch (style) {
    case "tshirt":
      return neckwear(<Muffler />);
    case "hoodie":
      return neckwear(<Bandana />);
    case "dress":
      return neckwear(<RibbonBow />);
    case "overalls":
      return <BorderShirt />;
    default:
      return null;
  }
}
