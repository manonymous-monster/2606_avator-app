import { AvatarCustomizer } from "@/components/AvatarCustomizer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-10 sm:px-6">
      <header className="mb-8 text-center">
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

      <main>
        <AvatarCustomizer />
      </main>

      <footer className="mt-12 text-xs text-purple-300">
        Made with Next.js + SVG ✨
      </footer>
    </div>
  );
}
