export function AvatarFace() {
  return (
    <>
      {/* 首 */}
      <rect x="88" y="148" width="24" height="18" rx="6" fill="#FFDAB9" />
      {/* 顔 */}
      <ellipse cx="100" cy="115" rx="52" ry="48" fill="#FFE0BD" />
      {/* ほっぺ */}
      <ellipse cx="68" cy="125" rx="10" ry="6" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="132" cy="125" rx="10" ry="6" fill="#FFB6C1" opacity="0.5" />
    </>
  );
}
