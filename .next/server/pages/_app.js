const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_0f074c._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_material_674e9f._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_system_esm_3ff81f._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_6d5f16._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__3efd7c._.js");
runtime.loadChunk("server/chunks/ssr/src_components_layout_8a583d._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
