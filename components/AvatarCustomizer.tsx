"use client";

import { useRef, useState } from "react";
import type { AvatarConfig, AvatarPartCategory } from "@/types/avatar";
import { DEFAULT_AVATAR_CONFIG } from "@/types/avatar";
import { Avatar } from "@/components/Avatar/Avatar";
import { PartSelector } from "@/components/PartSelector/PartSelector";
import { AVATAR_PART_OPTIONS } from "@/lib/avatarParts";
import { downloadAvatarPng, getAvatarDownloadFilename } from "@/lib/downloadAvatarPng";

export function AvatarCustomizer() {
  const [config, setConfig] = useState<AvatarConfig>(DEFAULT_AVATAR_CONFIG);
  const [isDownloading, setIsDownloading] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

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

  const handleDownload = async () => {
    if (!svgRef.current || isDownloading) return;

    setIsDownloading(true);
    try {
      await downloadAvatarPng(svgRef.current, getAvatarDownloadFilename());
    } catch {
      window.alert("PNGのダウンロードに失敗しました。もう一度お試しください。");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
      <div className="avatar-preview flex-shrink-0">
        <div className="relative mx-auto h-72 w-60 rounded-3xl border-4 border-white/90 bg-white/40 shadow-xl shadow-pink-200/50 backdrop-blur-sm">
          <Avatar ref={svgRef} config={config} />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={handleRandomize}
            className="w-full rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 px-[1.73rem] py-[1.02rem] text-[1.03rem] font-extrabold text-white shadow-2xl shadow-purple-400/85 ring-[3px] ring-white/45 transition-all hover:scale-[1.035] hover:shadow-[0_14px_32px_rgba(192,132,252,0.5)] active:scale-95"
          >
            🎲 ランダムでつくる
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="w-full rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-200/60 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDownloading ? "保存中..." : "📥 画像を保存"}
          </button>
        </div>
      </div>

      <div className="w-full flex-1 rounded-3xl border-4 border-white/90 bg-white/50 p-5 shadow-xl shadow-purple-100/50 backdrop-blur-sm sm:p-6">
        <PartSelector config={config} onChange={handleChange} />
      </div>
    </div>
  );
}
