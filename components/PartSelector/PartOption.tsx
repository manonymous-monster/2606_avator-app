interface PartOptionProps {
  label: string;
  emoji: string;
  swatch?: string;
  isSelected: boolean;
  onClick: () => void;
}

export function PartOption({
  label,
  emoji,
  swatch,
  isSelected,
  onClick,
}: PartOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={[
        "flex flex-col items-center gap-1 rounded-2xl border-2 px-3 py-2.5",
        "text-sm font-bold transition-all duration-200",
        "hover:scale-105 active:scale-95",
        isSelected
          ? "border-pink-400 bg-pink-100 text-pink-600 shadow-md shadow-pink-200/60"
          : "border-white/80 bg-white/70 text-gray-600 hover:border-pink-200 hover:bg-pink-50",
      ].join(" ")}
    >
      {swatch ? (
        <span
          className="h-6 w-6 rounded-full border-2 border-white shadow-sm"
          style={{ backgroundColor: swatch }}
          aria-hidden="true"
        />
      ) : (
        <span className="text-xl leading-none" aria-hidden="true">
          {emoji}
        </span>
      )}
      <span className="text-xs">{label}</span>
    </button>
  );
}
