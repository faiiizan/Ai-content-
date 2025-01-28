const CHUNK_PUBLIC_PATH = "server/pages/blogs.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_aaa8d9._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_material_de9999._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_system_esm_3ff81f._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_8b573e._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__e9b9ed._.js");
runtime.loadChunk("server/chunks/ssr/src_2b5832._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/blogs.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/node_modules/next/document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
