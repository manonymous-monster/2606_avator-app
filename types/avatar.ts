export type HairStyle = "short" | "bob" | "long" | "twintail";
export type EyeStyle = "round" | "sparkle" | "sleepy" | "wink";
export type MouthStyle = "smile" | "grin" | "small";
export type ClothesStyle = "tshirt" | "hoodie" | "dress" | "overalls";
export type BackgroundStyle = "red" | "yellow" | "blue";
export type CatBreed = "tabby" | "hachiware" | "white";

export type AvatarPartCategory =
  | "breed"
  | "hair"
  | "eyes"
  | "mouth"
  | "clothes"
  | "background";

export interface AvatarConfig {
  breed: CatBreed;
  hair: HairStyle;
  eyes: EyeStyle;
  mouth: MouthStyle;
  clothes: ClothesStyle;
  background: BackgroundStyle;
}

export interface PartOption<T extends string = string> {
  id: T;
  label: string;
  emoji: string;
  swatch?: string;
}

export type AvatarPartOptions = {
  breed: PartOption<CatBreed>[];
  hair: PartOption<HairStyle>[];
  eyes: PartOption<EyeStyle>[];
  mouth: PartOption<MouthStyle>[];
  clothes: PartOption<ClothesStyle>[];
  background: PartOption<BackgroundStyle>[];
};

export const DEFAULT_AVATAR_CONFIG: AvatarConfig = {
  breed: "tabby",
  hair: "short",
  eyes: "round",
  mouth: "smile",
  clothes: "tshirt",
  background: "red",
};
