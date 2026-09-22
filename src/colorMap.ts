import type { ColorMap, ColorMapChannels } from "./types.js";

function toHexComponent(value: number): string {
  const channel = Math.min(255, Math.max(0, Math.round(value * 255)));
  return channel.toString(16).padStart(2, "0");
}

export function toHexList({ r, g, b }: ColorMapChannels): string[] {
  if (r.length !== g.length || r.length !== b.length) {
    throw new Error("Color map channels must have matching lengths");
  }

  return r.map((red, index) => {
    const green = g[index];
    const blue = b[index];

    if (green === undefined || blue === undefined) {
      throw new Error("Color map channels must have matching lengths");
    }

    return `#${toHexComponent(red)}${toHexComponent(green)}${toHexComponent(blue)}`;
  });
}

export function createColorMap(channels: ColorMapChannels): ColorMap {
  return {
    ...channels,
    hex: toHexList(channels),
  };
}
