import test from "node:test";
import assert from "node:assert/strict";

import { createColorMap } from "../dist/colorMap.js";

test("createColorMap adds a hex list", () => {
  const colorMap = createColorMap({
    r: [0, 1],
    g: [0.5, 0],
    b: [1, 0.5],
  });

  assert.deepEqual(colorMap.hex, ["#0080ff", "#ff0080"]);
});

test("createColorMap rejects mismatched channel lengths", () => {
  assert.throws(
    () =>
      createColorMap({
        r: [0, 1],
        g: [0.5],
        b: [1, 0.5],
      }),
    /Color map channels must have matching lengths/,
  );
});
