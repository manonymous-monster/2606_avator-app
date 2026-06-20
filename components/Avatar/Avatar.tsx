import type { AvatarConfig } from "@/types/avatar";
import { AvatarClothes } from "./AvatarClothes";
import { AvatarEyes } from "./AvatarEyes";
import { AvatarFace } from "./AvatarFace";
import { AvatarHair } from "./AvatarHair";
import { AvatarMouth } from "./AvatarMouth";

interface AvatarProps {
  config: AvatarConfig;
}

export function Avatar({ config }: AvatarProps) {
  return (
    <svg
      viewBox="0 0 200 230"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-label="カスタマイズされたローポリ猫アバター"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF8F5" />
          <stop offset="100%" stopColor="#F0EDE8" />
        </linearGradient>
        <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#C4B8A8" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* 背景 */}
      <rect
        x="8"
        y="8"
        width="184"
        height="214"
        rx="16"
        fill="url(#bgGradient)"
      />

      {/* 床影 */}
      <ellipse cx="100" cy="218" rx="48" ry="5" fill="#C4B8A8" opacity="0.25" />

      <g filter="url(#softShadow)">
        <AvatarFace />
        <AvatarClothes style={config.clothes} />
        <AvatarHair style={config.hair} />
        <AvatarEyes style={config.eyes} />
        <AvatarMouth style={config.mouth} />
      </g>
    </svg>
  );
}
