import type { CatBreed } from "@/types/avatar";

export interface CatPalette {
  fur: {
    base: string;
    light: string;
    mid: string;
    shadow: string;
    dark: string;
  };
  muzzle: string;
  outline: string;
  outlineDark: string;
  nose: string;
  whisker: string;
  innerEar: string;
  stripe?: string;
  patch?: string;
}

export const CAT_PALETTES: Record<CatBreed, CatPalette> = {
  tabby: {
    fur: {
      base: "#C89456",
      light: "#E0B878",
      mid: "#D4A060",
      shadow: "#A07040",
      dark: "#8B5A2B",
    },
    muzzle: "#FAF5EE",
    outline: "#6B4A28",
    outlineDark: "#523818",
    nose: "#E8A0A0",
    whisker: "#5A4030",
    innerEar: "#F0C4C4",
    stripe: "#8B5A2B",
  },
  hachiware: {
    fur: {
      base: "#F2F2F2",
      light: "#FFFFFF",
      mid: "#E8E8E8",
      shadow: "#D0D0D0",
      dark: "#3A3A3A",
    },
    muzzle: "#F8F8F8",
    outline: "#4A4A4A",
    outlineDark: "#2A2A2A",
    nose: "#E8A0A0",
    whisker: "#4A4A4A",
    innerEar: "#F0C4C4",
    patch: "#3A3A3A",
  },
  white: {
    fur: {
      base: "#F8F8F8",
      light: "#FFFFFF",
      mid: "#F0F0F0",
      shadow: "#E2E2E2",
      dark: "#D0D0D0",
    },
    muzzle: "#FFFFFF",
    outline: "#B8B8B8",
    outlineDark: "#989898",
    nose: "#FFB8C8",
    whisker: "#888888",
    innerEar: "#FFD6DE",
  },
};

export function getCatPalette(breed: CatBreed): CatPalette {
  return CAT_PALETTES[breed];
}
