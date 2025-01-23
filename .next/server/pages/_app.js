const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_material_d38f93._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_system_esm_6db35d._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_112e04._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__c379bd._.js");
runtime.loadChunk("server/chunks/ssr/src_components_layout_Header_module_e88f63.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
