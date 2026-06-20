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
      className="h-full w-full drop-shadow-lg"
      aria-label="カスタマイズされたアバター"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0F6" />
          <stop offset="100%" stopColor="#E8F4FD" />
        </linearGradient>
      </defs>
      <rect
        x="10"
        y="10"
        width="180"
        height="210"
        rx="24"
        fill="url(#bgGradient)"
      />
      <AvatarHair style={config.hair} />
      <AvatarFace />
      <AvatarEyes style={config.eyes} />
      <AvatarMouth style={config.mouth} />
      <AvatarClothes style={config.clothes} />
    </svg>
  );
}
