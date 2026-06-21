import type { AvatarPartCategory, AvatarConfig } from "@/types/avatar";
import { AVATAR_PART_OPTIONS, PART_CATEGORY_LABELS } from "@/lib/avatarParts";
import { PartOption } from "./PartOption";

interface PartSelectorProps {
  config: AvatarConfig;
  onChange: <K extends AvatarPartCategory>(
    category: K,
    value: AvatarConfig[K],
  ) => void;
}

export function PartSelector({ config, onChange }: PartSelectorProps) {
  const categories = Object.keys(AVATAR_PART_OPTIONS) as AvatarPartCategory[];

  return (
    <div className="flex w-full flex-col gap-5">
      {categories.map((category) => (
        <section key={category} aria-labelledby={`label-${category}`}>
          <h2
            id={`label-${category}`}
            className="mb-2.5 flex items-center gap-2 text-sm font-extrabold text-purple-600"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-pink-400" />
            {PART_CATEGORY_LABELS[category]}
          </h2>
          <div
            className={
              category === "background" || category === "breed"
                ? "grid grid-cols-3 gap-2"
                : "grid grid-cols-2 gap-2 sm:grid-cols-4"
            }
          >
            {AVATAR_PART_OPTIONS[category].map((option) => (
              <PartOption
                key={option.id}
                label={option.label}
                emoji={option.emoji}
                swatch={option.swatch}
                isSelected={config[category] === option.id}
                onClick={() => onChange(category, option.id)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
