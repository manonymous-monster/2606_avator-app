export type HairStyle = "short" | "bob" | "long" | "twintail";
export type EyeStyle = "round" | "sparkle" | "sleepy" | "wink";
export type MouthStyle = "smile" | "grin" | "small";
export type ClothesStyle = "tshirt" | "hoodie" | "dress" | "overalls";

export type AvatarPartCategory = "hair" | "eyes" | "mouth" | "clothes";

export interface AvatarConfig {
  hair: HairStyle;
  eyes: EyeStyle;
  mouth: MouthStyle;
  clothes: ClothesStyle;
}

export interface PartOption<T extends string = string> {
  id: T;
  label: string;
  emoji: string;
}

export type AvatarPartOptions = {
  hair: PartOption<HairStyle>[];
  eyes: PartOption<EyeStyle>[];
  mouth: PartOption<MouthStyle>[];
  clothes: PartOption<ClothesStyle>[];
};

export const DEFAULT_AVATAR_CONFIG: AvatarConfig = {
  hair: "short",
  eyes: "round",
  mouth: "smile",
  clothes: "tshirt",
};
