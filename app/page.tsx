import { AvatarCustomizer } from "@/components/AvatarCustomizer";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden lg:h-auto lg:min-h-screen">
      <header className="hidden shrink-0 px-6 py-10 text-center lg:block">
        <p className="mb-2 text-sm font-bold tracking-widest text-pink-400 uppercase">
          Avatar Customize
        </p>
        <h1 className="text-3xl font-extrabold text-purple-700 sm:text-4xl">
          🎨 アバターカスタマイズアプリ
        </h1>
        <p className="mt-3 text-sm text-purple-400 sm:text-base">
          アクセサリー・目・口・おしゃれを選んで、あなただけのローポリ猫を作ろう！
        </p>
      </header>

      <main className="flex min-h-0 flex-1 flex-col items-center overflow-hidden lg:overflow-visible lg:px-6 lg:pb-10">
        <AvatarCustomizer />
      </main>

      <footer className="hidden py-8 text-center text-xs text-purple-300 lg:block">
        Made with Next.js + SVG ✨
      </footer>
    </div>
  );
}
