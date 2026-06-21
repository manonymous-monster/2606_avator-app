/** 猫アバター共通レイアウト定数 */

export const CAT_SCALE = 1.1;
export const CAT_SCALE_ORIGIN_X = 100;
export const CAT_SCALE_ORIGIN_Y = 112;

export const CAT_CONTENT_TRANSFORM = `translate(${CAT_SCALE_ORIGIN_X} ${CAT_SCALE_ORIGIN_Y}) scale(${CAT_SCALE}) translate(-${CAT_SCALE_ORIGIN_X} -${CAT_SCALE_ORIGIN_Y})`;

export const HEAD_CX = 100;
export const HEAD_BASE_CY = 88;
export const HEAD_OUTLINE_DY = 50 * 0.15;
export const HEAD_SIZE = 0.9;
export const HEAD_WIDE = 1.1;

export const HEAD_RY_BASE = 50 * 0.95 * 0.9 * 0.97 * HEAD_SIZE;
export const HEAD_RX_BASE = 54 * 0.95 * 0.9 * 0.97 * 1.03 * HEAD_SIZE * HEAD_WIDE;

export const OUTLINE_SIZE = 0.97 * 1.05 * 0.9;
export const OUTLINE_TALL = 1.03;
export const OUTLINE_RX = HEAD_RX_BASE * OUTLINE_SIZE;
export const OUTLINE_RY = HEAD_RY_BASE * OUTLINE_SIZE * OUTLINE_TALL;
export const OUTLINE_EXTRA_DY = HEAD_RY_BASE * (0.15 + 0.05);

export const FACE_DY = HEAD_RY_BASE * 0.05;
export const HEAD_OUTLINE_CY =
  HEAD_BASE_CY + HEAD_OUTLINE_DY + FACE_DY + OUTLINE_EXTRA_DY;

export const HEAD_TOP = HEAD_OUTLINE_CY - OUTLINE_RY;

export const SHADE_SCALE = 0.95 * 0.9 * 0.97 * HEAD_SIZE * OUTLINE_SIZE;
export const SHADE_WIDE = 1.03 * HEAD_WIDE;

export const MUZZLE_CY = 118 + FACE_DY - 22 * 0.15;

export const EAR_SCALE = 1.05 * 1.3;
export const EAR_PIVOT_Y = 62;
export const EAR_GROUP_DY = HEAD_OUTLINE_DY + FACE_DY + OUTLINE_EXTRA_DY;
export const EAR_HEIGHT = 17;
export const EAR_UP_DY = EAR_HEIGHT * (0.15 + 0.05 + 0.2);
export const EAR_INWARD = 28 * 0.15;
export const EAR_ROTATE = 12;

export const BODY_SHIFT = -10 - HEAD_RY_BASE * 0.05;

/** 胴体・首（AvatarFace と同期） */
export const BODY_CX = 100;
export const BODY_CY = 168 + BODY_SHIFT;
export const BODY_RX = 28;
export const BODY_RY = 22;
export const PAW_FRONT_CY = 174 + BODY_SHIFT;
export const PAW_BACK_CY = 196 + BODY_SHIFT;
export const NECK_Y = HEAD_OUTLINE_CY + OUTLINE_RY * 0.78;
export const SHOULDER_X = BODY_CX + BODY_RX * 0.82;
