const VIEWBOX_WIDTH = 200;
const VIEWBOX_HEIGHT = 230;
const EXPORT_SCALE = 2;

export function getAvatarDownloadFilename(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `avatar customize_${y}${m}${d}.png`;
}

export async function downloadAvatarPng(
  svgElement: SVGSVGElement,
  filename = getAvatarDownloadFilename(),
) {
  const clone = svgElement.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", String(VIEWBOX_WIDTH * EXPORT_SCALE));
  clone.setAttribute("height", String(VIEWBOX_HEIGHT * EXPORT_SCALE));

  const svgString = new XMLSerializer().serializeToString(clone);
  const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  try {
    const pngBlob = await svgUrlToPngBlob(svgUrl);
    triggerDownload(pngBlob, filename);
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}

function svgUrlToPngBlob(svgUrl: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = VIEWBOX_WIDTH * EXPORT_SCALE;
      canvas.height = VIEWBOX_HEIGHT * EXPORT_SCALE;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas is not supported"));
        return;
      }

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Failed to create PNG"));
        },
        "image/png",
      );
    };
    image.onerror = () => reject(new Error("Failed to render SVG"));
    image.src = svgUrl;
  });
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
