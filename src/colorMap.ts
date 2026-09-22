import type { ColorMap, ColorMapChannels } from "./types.js";

function toHexComponent(value: number): string {
  return Math.round(value * 255).toString(16).padStart(2, "0");
}

export function toHexList({ r, g, b }: ColorMapChannels): string[] {
  return r.map((red, index) => {
    const green = g[index] ?? 0;
    const blue = b[index] ?? 0;
    return `#${toHexComponent(red)}${toHexComponent(green)}${toHexComponent(blue)}`;
  });
}

export function createColorMap(channels: ColorMapChannels): ColorMap {
  return {
    ...channels,
    hex: toHexList(channels),
  };
}
