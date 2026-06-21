import { forwardRef } from "react";
import type { AvatarConfig } from "@/types/avatar";
import { AVATAR_BACKGROUNDS } from "@/lib/avatarBackgrounds";
import { CAT_CONTENT_TRANSFORM, FLOOR_SHADOW_CY } from "@/lib/avatarLayout";
import { AvatarClothes } from "./AvatarClothes";
import { AvatarEyes } from "./AvatarEyes";
import { AvatarFace } from "./AvatarFace";
import { AvatarHair } from "./AvatarHair";
import { AvatarMouth } from "./AvatarMouth";

interface AvatarProps {
  config: AvatarConfig;
}

export const Avatar = forwardRef<SVGSVGElement, AvatarProps>(function Avatar(
  { config },
  ref,
) {
  const bg = AVATAR_BACKGROUNDS[config.background];

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 230"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)]"
      aria-label="カスタマイズされたローポリ猫アバター"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bg.from} />
          <stop offset="100%" stopColor={bg.to} />
        </linearGradient>
        <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#C4B8A8" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect
        x="8"
        y="8"
        width="184"
        height="214"
        rx="16"
        fill="url(#bgGradient)"
      />

      <g transform={CAT_CONTENT_TRANSFORM}>
        <ellipse cx="100" cy={FLOOR_SHADOW_CY} rx="38" ry="4" fill={bg.shadow} opacity="0.35" />

        <g filter="url(#softShadow)">
          <AvatarFace breed={config.breed} />
          <AvatarClothes style={config.clothes} />
          <AvatarHair style={config.hair} />
          <AvatarEyes style={config.eyes} />
          <AvatarMouth style={config.mouth} />
        </g>
      </g>
    </svg>
  );
});
