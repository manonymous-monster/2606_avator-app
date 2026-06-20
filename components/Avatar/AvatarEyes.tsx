import type { EyeStyle } from "@/types/avatar";
import { CAT } from "@/lib/avatarColors";

interface AvatarEyesProps {
  style: EyeStyle;
}

export function AvatarEyes({ style }: AvatarEyesProps) {
  switch (style) {
    case "round":
      return (
        <g>
          <circle cx="82" cy="98" r="4.5" fill={CAT.eye} />
          <circle cx="118" cy="98" r="4.5" fill={CAT.eye} />
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
          <path d="M76 100 Q82 94 88 100" />
          <path d="M112 100 Q118 94 124 100" />
        </g>
      );

    case "sleepy":
      return (
        <g stroke={CAT.eye} strokeWidth="2.5" strokeLinecap="round">
          <line x1="76" y1="98" x2="88" y2="98" />
          <line x1="112" y1="98" x2="124" y2="98" />
        </g>
      );

    case "wink":
      return (
        <g>
          <circle cx="82" cy="98" r="11" fill="none" stroke="#E74C3C" strokeWidth="2.5" />
          <circle cx="118" cy="98" r="11" fill="none" stroke="#E74C3C" strokeWidth="2.5" />
          <line x1="93" y1="98" x2="107" y2="98" stroke="#E74C3C" strokeWidth="2" />
          <circle cx="82" cy="98" r="3.5" fill={CAT.eye} />
          <circle cx="118" cy="98" r="3.5" fill={CAT.eye} />
        </g>
      );

    default:
      return null;
  }
}
