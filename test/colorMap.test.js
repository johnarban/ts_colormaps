import test from "node:test";
import assert from "node:assert/strict";

import viridis from "../dist/colormaps/viridis.js";

test("viridis exports a separate colormapHex list", () => {
  assert.equal("hex" in viridis.colormap, false);
  assert.equal(viridis.colormapHex.length, viridis.colormap.r.length);
  assert.equal(viridis.colormapHex[0], "#440154");
  assert.equal(viridis.colormapHex[viridis.colormapHex.length - 1], "#fde725");
});
