export type ColorMapChannels = {r: number[], g: number[], b: number[]}

export type ColorMap = ColorMapChannels & {hex: string[]}

export interface ColorMaps {
    [key: string]: ColorMap;
}
