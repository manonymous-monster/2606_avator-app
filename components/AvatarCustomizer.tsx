"use client";

import { useState } from "react";
import type { AvatarConfig, AvatarPartCategory } from "@/types/avatar";
import { DEFAULT_AVATAR_CONFIG } from "@/types/avatar";
import { Avatar } from "@/components/Avatar/Avatar";
import { PartSelector } from "@/components/PartSelector/PartSelector";
import { AVATAR_PART_OPTIONS } from "@/lib/avatarParts";

export function AvatarCustomizer() {
  const [config, setConfig] = useState<AvatarConfig>(DEFAULT_AVATAR_CONFIG);

  const handleChange = <K extends AvatarPartCategory>(
    category: K,
    value: AvatarConfig[K],
  ) => {
    setConfig((prev) => ({ ...prev, [category]: value }));
  };

  const handleRandomize = () => {
    const categories = Object.keys(DEFAULT_AVATAR_CONFIG) as AvatarPartCategory[];
    const randomConfig = categories.reduce<AvatarConfig>(
      (acc, category) => {
        const options = AVATAR_PART_OPTIONS[category];
        const random = options[Math.floor(Math.random() * options.length)];
        return { ...acc, [category]: random.id };
      },
      { ...DEFAULT_AVATAR_CONFIG },
    );
    setConfig(randomConfig);
  };

  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
      <div className="avatar-preview flex-shrink-0">
        <div className="relative mx-auto h-72 w-60 rounded-3xl border-4 border-white/90 bg-white/40 shadow-xl shadow-pink-200/50 backdrop-blur-sm">
          <Avatar config={config} />
        </div>
        <button
          type="button"
          onClick={handleRandomize}
          className="mt-4 w-full rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-purple-200/60 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95"
        >
          🎲 ランダム生成
        </button>
      </div>

      <div className="w-full flex-1 rounded-3xl border-4 border-white/90 bg-white/50 p-5 shadow-xl shadow-purple-100/50 backdrop-blur-sm sm:p-6">
        <PartSelector config={config} onChange={handleChange} />
      </div>
    </div>
  );
}
