import type { ColorMap } from "./types.js";
import { colormaps, type AvailableColorMaps } from "./colormaps/index.js";

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// linear spline
function spline( t: number, ...values: number[]): number {
  if (t <= 0) return values[0] as number;
  if (t >= 1) return values[values.length - 1] as number;
  const n = values.length - 1;
  const i = Math.floor(t * n);
  const u = t * n - i;
  // @ts-expect-error
  return lerp(values[i], values[i + 1] ?? values[i], u);
}

function clamp(x: number, min: number, max: number): number {
  return Math.min(Math.max(x, min), max);
}

export function colormap(cmap: AvailableColorMaps, cmin: number, cmax: number, val: number): [number, number, number]
{ 
  if (!(cmap in colormaps)) {
    throw new Error(`Colormap ${cmap} not found`);
  }
  const { r: redValues, g: greenValues, b: blueValues } = colormaps[cmap] as ColorMap;

  const normalizedVal = clamp( (val-cmin)/(cmax-cmin),0,1);
  const r = spline(normalizedVal, ...redValues);
  const g = spline(normalizedVal, ...greenValues);
  const b = spline(normalizedVal, ...blueValues);
  return [Math.round(r*255),Math.round(g*255),Math.round(b*255)];
}

