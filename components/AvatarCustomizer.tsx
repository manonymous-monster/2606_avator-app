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
    <div className="flex h-dvh w-full max-w-4xl flex-col overflow-hidden lg:h-auto lg:min-h-0 lg:max-h-none lg:flex-row lg:items-start lg:gap-12 lg:overflow-visible">
      {/* スマホ：70% / PC：左カラム */}
      <div className="avatar-preview z-10 flex min-h-0 flex-[7] flex-col border-b border-white/60 bg-gradient-to-b from-[#fdf2f8]/95 to-[#ede9fe]/90 px-4 pb-3 pt-2 backdrop-blur-md lg:flex-none lg:shrink-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <p className="mb-2 shrink-0 text-center text-xs font-bold tracking-widest text-pink-400 uppercase lg:hidden">
          Avatar Customize
        </p>
        <div className="flex min-h-0 flex-1 flex-col gap-2 lg:min-h-0 lg:flex-none lg:items-center lg:gap-4">
          <div className="relative isolate min-h-0 flex-[8.5] w-full overflow-hidden rounded-3xl border-4 border-white/90 bg-white/50 shadow-xl shadow-pink-200/50 backdrop-blur-sm lg:flex-none lg:h-72 lg:w-60 lg:bg-white/70 lg:backdrop-blur-none">
            <Avatar ref={svgRef} config={config} />
          </div>
          <div className="grid min-h-0 flex-[1.5] grid-cols-2 gap-2 lg:flex lg:w-full lg:max-w-xs lg:flex-none lg:flex-col lg:gap-2">
            <button
              type="button"
              onClick={handleRandomize}
              className="flex h-full min-h-0 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 px-2 py-2 text-xs font-extrabold text-white shadow-2xl shadow-purple-400/85 ring-[3px] ring-white/45 transition-all hover:scale-[1.02] hover:shadow-[0_14px_32px_rgba(192,132,252,0.5)] active:scale-95 sm:text-sm lg:px-[1.73rem] lg:py-[1.02rem] lg:text-[1.03rem]"
            >
              🎲 ランダムでつくる
            </button>
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex h-full min-h-0 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-500 px-2 py-2 text-xs font-bold text-white shadow-lg shadow-sky-200/60 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm lg:px-6 lg:py-3 lg:text-sm"
            >
              {isDownloading ? "保存中..." : "📥 画像を保存"}
            </button>
          </div>
        </div>
      </div>

      {/* スマホ：30%スクロール / PC：右カラム */}
      <div className="flex min-h-0 flex-[3] flex-col overflow-hidden lg:flex-1 lg:overflow-visible">
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 lg:overflow-visible lg:px-0 lg:py-0">
          <div className="w-full rounded-3xl border-4 border-white/90 bg-white/50 p-5 shadow-xl shadow-purple-100/50 backdrop-blur-sm sm:p-6 lg:flex-1">
            <PartSelector config={config} onChange={handleChange} />
          </div>
          <p className="py-4 text-center text-xs text-purple-300 lg:hidden">
            Made with Next.js + SVG ✨
          </p>
        </div>
      </div>
    </div>
  );
}
