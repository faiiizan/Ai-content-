(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__050d09._.js", {

"[turbopack]/browser/dev/hmr-client/websocket.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Adapted from https://github.com/vercel/next.js/blob/canary/packages/next/src/client/dev/error-overlay/websocket.ts
__turbopack_esm__({
    "addMessageListener": (()=>addMessageListener),
    "connectHMR": (()=>connectHMR),
    "sendMessage": (()=>sendMessage)
});
let source;
const eventCallbacks = [];
// TODO: add timeout again
// let lastActivity = Date.now()
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
function addMessageListener(cb) {
    eventCallbacks.push(cb);
}
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        // lastActivity = Date.now()
        }
        function handleMessage(event) {
            // lastActivity = Date.now()
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        // let timer: NodeJS.Timeout
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}
}}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_esm__({
    "connect": (()=>connect),
    "setHooks": (()=>setHooks),
    "subscribeToUpdate": (()=>subscribeToUpdate)
});
var __TURBOPACK__imported__module__$5b$turbopack$5d2f$browser$2f$dev$2f$hmr$2d$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[turbopack]/browser/dev/hmr-client/websocket.ts [client] (ecmascript)");
;
function connect({ // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
addMessageListener = __TURBOPACK__imported__module__$5b$turbopack$5d2f$browser$2f$dev$2f$hmr$2d$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["addMessageListener"], // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$browser$2f$dev$2f$hmr$2d$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"], onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    // TODO(WEB-1465) Remove this backwards compat fallback once
    // vercel/next.js#54586 is merged.
    if (callback === undefined) {
        callback = sendMessage;
        sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$browser$2f$dev$2f$hmr$2d$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"];
    }
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}}),
"[project]/src/app/Assets/Imges/logo.svg [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/logo.0f8df20d.svg");}}),
"[project]/src/app/Assets/Imges/logo.svg.mjs { IMAGE => \"[project]/src/app/Assets/Imges/logo.svg [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$logo$2e$svg__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/logo.svg [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$logo$2e$svg__$5b$client$5d$__$28$static$29$__["default"],
    width: 197,
    height: 81,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/dashboard.module.css [client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Input": "dashboard-module__JsKwpa__Input",
  "LogoImage": "dashboard-module__JsKwpa__LogoImage",
  "barchart": "dashboard-module__JsKwpa__barchart",
  "break": "dashboard-module__JsKwpa__break",
  "clipIcon": "dashboard-module__JsKwpa__clipIcon",
  "css-hhdjsd-MuiContainer-root": "dashboard-module__JsKwpa__css-hhdjsd-MuiContainer-root",
  "css-uitvrg": "dashboard-module__JsKwpa__css-uitvrg",
  "templateCardGrid": "dashboard-module__JsKwpa__templateCardGrid",
  "worldmapImage": "dashboard-module__JsKwpa__worldmapImage",
});
}}),
"[project]/src/app/Assets/Imges/dasboardman.png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/dasboardman.3cc3ac3b.png");}}),
"[project]/src/app/Assets/Imges/dasboardman.png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/dasboardman.png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$dasboardman$2e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/dasboardman.png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$dasboardman$2e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 60,
    height: 60,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AFZVU2WopqHkV1NQ/zssJ/9/b2X/uLez/6yrqORZWVdlAKqoo+S2tbH/V0xG/49jTP+6knv/wLy2/7y7uf+trKrkALCuqv+7urf/hHdv/41fSv+3hnL/xsC7/8XEwv/CwsD/AKOfmv+0srD/kYyM/2dIOv+rkYf/zczK/9LR0P/S0dH/AJeSjf+BhY7/VWaI/3Zwff92eo7/gY6m/9DQ0f/f3t7/AIiDfv9DS1z/TmaR/1Nsmv9Rapf/TmaT/6etvf/q6en/AHhybeQ3O0b/TmCG/3eGqf9gcpv/a3KQ/8all//j2NLkADs4NWVLR0rkd19Z/+HBpv+wmY7/xaGK/9ifc+RwWUhlkzOncB1OL54AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1.png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1.b6b11de3.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1.png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1.png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1$2e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1.png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1$2e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 99,
    height: 99,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEAAAEfHh41Pi0mr39MM+x6SjLtNicgsSYnKDgCAgICAA8MCzVUT03QXjop/rd9Yf+1fmP/XTcl/oOHitMyNjg6ACcfG7BfV1P+Z0Qz/6dwVf+ia1D/VTcp/3yGjP6FlqC3ACwjH+1tYVz/jVY8/6llRP+gWzr/ckAp/3+Nlf+lvsryACsjH+9xbmz/blRI/4hdSP9/VUD/Uj40/5ystP+/y9LzAB0XFLVnZGL+XFpa/3VbT/9oUUb/N0BG/4+gqP+SmZ27AAYFBTsuKinWPy4l/lpFPP9YQTb/Oy0n/2Vpa9kwMDA/AAAAAAIFBQU9KBkRupdiR/R2UT/1GhQRvQoKCkACAgICQ9FsQ/pA27kAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (1).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (1).6d35109d.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (1).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (1).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$1$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (1).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$1$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 99,
    height: 99,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEBAQESEg4zRkEzrWFWQut9VzntdEousycaEToCAQACABcVETM/PS7OaFlC/khBLv80MiP/ST8s/nFDKNUfEQk8AD06LaxLRjL+b1c+/3xcQf9eSTP/MzAh/1lBLP5eOyW6AGhiUOtIQi//Y0sz/4ddQf+TZ0n/bk41/3VMMf96Ujb1AGxlUuxQQiz/UkAr/55pSf+vc07/jmNE/1pDLP+IUTD2AFdHNLGBWTn+TDok/3ZMMf+nd1r/jXJf/3VuY/9xTTnAACceFjiKWjnUY0Mo/nRjU/+zs7L/trzA/6Kprds0NTVCAAEBAQIqGQ47Y0ApuaWVifSzt7r1jpKWvzY4OUICAgID2TpsfpEPXdYAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (2).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (2).596f2228.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (2).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (2).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$2$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (2).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$2$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 100,
    height: 99,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAICAgEqLS8zeIOIrpelrOyntrzsiJKYrywvMTQCAgIBACotLzKEi4zOa2Na/od6cP+gn5z/tMPL/p2pr88rLzAzAG17gapjXVX+RjUm/6CIef+ml43/fZid/4Ost/5qgYmsAF50cehCNin/Pywd/3xeS/+tkoL/dXRo/1B/gP9QhYvqAHNlUOk2Jxr/PSgZ/3FNOP+kg3H/jHdg/5eUfP+KjHXrAEEyIq8rHhL+NSIT/2I/J/+Rc1f/k35h/6OZfP55c12xAA0JBTchFw3TRi4e/pFvVf+aiGj/lYZk/oJ8XtUmJRw5AAAAAAINCQU7UEE3urWxrPSinYT1c2lNuyknHjwBAQECmCZ47eq22CoAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (3).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (3).2ac0b4a6.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (3).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (3).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$3$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (3).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$3$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 99,
    height: 99,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAAAAAEFBQU2EhEPrzwtHexeRCfsLyMWsQcGBTcAAAACAAYFBTcTExHRHBkV/k42I/9dPif/OCgc/hUUEdIFBQU4ABAQD7IZFxX+Oyod/4NUOv+1f2L/g1tG/yIbF/4QEA61ABQTE+8gGxn/ZDwm/6hoRv/YmHb/sXpe/ysfGv8WFRPxABQUE/AZFhb/NCMc/5BXP//Vh2j/mWpN/yAcGP8YFxXyABAQD7cWFhX+KCAZ/31ROv/Qk3H/bFA7/xwbFv4UFBG6AAcHBjwiIBrXMSYd/kk0Jv9rTjj/QTYq/x0dGNgICAY+AAEBAAIPDAk9LyIZu1Y8KfWNaEj1f25XvRoZFT8AAAACiC9VhHS7o+UAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (4).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (4).c971b6a8.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (4).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (4).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$4$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (4).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$4$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 99,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEBAQIfIB85WlNLsn1aQeuDWTjqSzAYqw4KBTMAAAABABIVFD1iZmbWk3pv/uKYff/nmnb/vnZJ/jkqFs4EBwUzADxDQLxsb23+dlxN/7NzWP/He1r/vHFJ/1U+Jv4pLyitADI6MvY4PTT/iV5J/9GDYf/hjWn/zXxT/6F1Xf94dnHrAGJcT/ZuaF7/jWFG/9mAV//di2D/m1w3/z45Kv8iLSPrADQ2LbsmLyX+QTIf/5dXMf+XUir/o2A4/y8wI/4RGhKsAAUJBzwOGxTUIigd/plhRf/dl3b/5b6y/nVvbM0HCQcyAAAAAAIFCAU4Njk0r8Cop+nXxMfopJmdqTQwMjEBAQEBW6ZwZvghffIAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (5).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (5).a265a3d4.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (5).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (5).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$5$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (5).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$5$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 99,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAAAAAEDAgE1DQsJrSQiJOooIyTrFhQUsAQDAjgAAAACAAQDATYMCgPQJB0b/nxZSP+Xcl3/OS4v/hYUENQEBAI6AA4MBbEUEQn+MiYm/6N7a//CoI3/VUZG/ycnJv4MCwa4AA0NCe4VFA//RTU0/7aMeP/Srpf/c19a/ygnKf8OCwfzABANC+4VERD/NCgo/51tXP/OmYH/alNK/yQfIv8XFRHzACQeE7AgGhb+LSUl/3lSPf+xelj/QSoi/xwXGf4aHBi3AA0NCjVmbWjPrLKo/riRa//Jlmb/oohw/mtua9MMCww6AAEBAQExNTMzn6Wfq8yxlujIpYTpoJiMrjc5ODYCAgICc6Rgt3tab3YAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (7).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (7).da11625a.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (7).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (7).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$7$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (7).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$7$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEBAQEvLSo0mI+Jrbeso+qropjqlYyFrTMwLjQCAgIBACQiIDShmY/Pu6+l/mdWS/9GOTL/i4J7/rOooM8yLy0zAIF7dazAtqz+uKSW/7qFZf+NXkb/aVlQ/9DEuv6akYqsALKqoeq+tKv/1Lai/8uRcP+UYUr/iWxd/9PGvP/JvrXpALWtperFu7H/28Gv/8iJZP+ASy//p4x7/9jKwP/MwLjpAIJ9d6vGu7L+3M3B/8mVa/+IUyv/tpqE/+DTyP6elY+rACgmJDKzqaHO6t7R/u7Nqv/kvpr/7tvE/s7Fus02NDEyAAICAgE3NDIys6yiq+vh0Onr4M/otKyhqjk3MzICAgIBrOiYfNa3L+wAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (8).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (8).6058f766.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (8).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (8).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$8$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (8).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$8$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 99,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEBAQEWGRk0TltbrFplZuleamvpUmJjrRkfITUBAQECABsiIzdJU1PRXGVk/kAzLv9HOTT/VF5g/mR9gdElLC03AF5ydLNaZ2j+a2xn/49tW/+Sb13/XFtZ/3yYnP5wh4q0AICZnfBeamr/ioR8/6F5Zv+Xblz/d25o/4Canv+TsLPxAIKanvBibWz/io6I/6N+bP+Wbl3/gIWA/4Keof+UsbTxAGFzdrRgZ2b+ZGln/5F3Z/98ZFf/bHh3/3+anf5yiIq1ABQWGDg9MzLSKCsy/lpOSv90X1T/ODs+/kVIS9MaICI5AAEAAAIQDQ02GR4kriMpMOsnKS/rGRwirxANDTcAAAACA0RzoYGUwJwAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (9).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (9).e5df6485.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (9).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (9).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$9$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (9).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$9$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 99,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAAAAAETExUzY2Vqqz5BRuggISXpMi4urjEwMDYCAgICAC4vMjU6O0DPMisr/kc2L/8vIyL/SEA9/qmpqtM9P0E5AKuwtrC6u8H+l3xu/6F5Yf+MXET/UDMp/1tXWf6XmZ23AOTr8+7o6u//x6ua/7WKcf+3iGz/km1Y/0hBQv+pqq7zAOTr8+7p7/b/qpSI/6J5Y//UrI//49bO/9vg5v/m7fPzAK60ubLR09b+oYh5/7mVfv/auqP/6ejn/+/2/P63vMG4ADU3OTafpKvQvbq9/r2fjP/Nrpb/0MfA/r7Aw9M+P0A6AAEBAQEsLTA1jZOdra2jouqYioDrmpiWsDQ0NDgCAgICXnOSInAdUg8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (10).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (10).023f5f81.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (10).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (10).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$10$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (10).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$10$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 99,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEBAQEeGxcyaWBSqZqOeuipnozpi4R3rzEvLDcCAgICACEfHDNmWUrOe2tX/pJ/av+vmoj/v6mX/quilNQwMC47AGxoYK17X07+dl1M/4puXv+tk4X/y7er/8rAsf6RkYy6AI+Ifex+YE7/hWdX/6GFef+ojoP/t6KV/7m0qP+vsKv1AJycmuyCa1v/hmla/6KEdv+vkIT/u66k/6yrov+ur6r1AHt/ga6LeG3+iWxd/5x9bv+rjoP/tqie/7awp/6LjIm7ACQiITRvW1DPmX1t/rOVhf+ikIb/o4d5/qaTidU2NTM8AAEBAQEfGRYzfWlfrK+UiOqckIrrbl1VsS0lIjkCAgICQ0mJZfLpiscAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (11).png [client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/Ellipse 1 (11).52535692.png");}}),
"[project]/src/app/Assets/Imges/Ellipse 1 (11).png.mjs { IMAGE => \"[project]/src/app/Assets/Imges/Ellipse 1 (11).png [client] (static)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$11$292e$png__$5b$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/app/Assets/Imges/Ellipse 1 (11).png [client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$11$292e$png__$5b$client$5d$__$28$static$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAECAgEpLCsyeYJ/qniBfumPl5boZ3p2qxgiIDIBAQEBAAsMDDMxNDLOMzUz/iwnJP8+NzL/NDc3/igwMM0JCwsyABocG6wREA7+IhkU/2pJOP+IaVP/QTIp/zozLf4dHx+qAGl5dOoZGhj/Pywi/5lrU/+zjnn/b1JA/6OPff94dm7pAGiBe+oYGxj/MCQc/5hmUf+sfmn/W0U3/7Kekf/Iu7HpABggH60NDg3+Jh0Y/4NfS/+SbFf/PjEq/6SShP6ckYqsAAMDAzQKDAzPIRkU/oJfR/+BX0n/Nioj/oBtXM8vKiczAAAAAAEDAwQ0FhEOrXJQOOpgQi/qIxsWrR8YEzQBAQEBQI5i59Sl9hMAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/dashboard/analyst/index.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$logo$2e$svg__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/logo.svg.mjs { IMAGE => "[project]/src/app/Assets/Imges/logo.svg [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$dashboard$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/pages/dashboard.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$dasboardman$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$dasboardman$2e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/dasboardman.png.mjs { IMAGE => "[project]/src/app/Assets/Imges/dasboardman.png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1$2e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1.png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1.png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$1$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (1).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (1).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$2$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (2).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (2).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$3$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (3).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (3).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$4$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$4$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (4).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (4).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$5$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$5$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (5).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (5).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$7$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$7$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (7).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (7).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$8$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$8$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (8).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (8).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$9$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$9$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (9).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (9).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$10$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$10$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (10).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (10).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$11$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$11$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/app/Assets/Imges/Ellipse 1 (11).png.mjs { IMAGE => "[project]/src/app/Assets/Imges/Ellipse 1 (11).png [client] (static)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Dashboard.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Container/Container.js [client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Grid/Grid.js [client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/IconButton/IconButton.js [client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Menu.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Drawer/Drawer.js [client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Chat$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Chat.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$KeyboardArrowDown$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/KeyboardArrowDown.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Menu/Menu.js [client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBox$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/AccountBox.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Divider/Divider.js [client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkMode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/DarkMode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MotionPhotosAuto$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/MotionPhotosAuto.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Logout.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/pi/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/si/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Feed$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Feed.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InsertPhoto$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/InsertPhoto.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContentCopy$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/ContentCopy.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DocumentScanner$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/DocumentScanner.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$History$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/History.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Receipt$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Receipt.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Person.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Breadcrumbs$2f$Breadcrumbs$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Breadcrumbs$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js [client] (ecmascript) <export default as Breadcrumbs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Link$2f$Link$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Link/Link.js [client] (ecmascript) <export default as Link>");
;
var _s = __turbopack_refresh__.signature();
"use Client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-${index}`,
        "aria-labelledby": `simple-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                p: 3
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
            lineNumber: 58,
            columnNumber: 27
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = CustomTabPanel;
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}
const analyst = ()=>{
    _s();
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false); // State to control drawer visibility
    // Function to toggle the drawer open/close
    const toggleDrawer = ()=>{
        setOpen((prevState)=>!prevState);
    };
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const getLinkStyle = (path)=>{
        return router.pathname === path ? {
            color: "red"
        } // active style
         : {};
    };
    const menuItems = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: {
                xs: 250,
                sm: "500px"
            },
            padding: {
                xs: "60px 10px",
                sm: "60px 30px"
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: {
                        xs: "4px solid #4AB58E",
                        sm: "8px solid #4AB58E"
                    },
                    borderRadius: {
                        xs: "2px",
                        sm: "4px"
                    },
                    marginBottom: "40px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: {
                            fontFamily: "Poppins",
                            fontSize: {
                                xs: "15px",
                                sm: "18px"
                            },
                            lineHeight: "22.5px",
                            fontWeight: {
                                xs: "400",
                                sm: "700"
                            }
                        },
                        children: "Credits"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: {
                            fontFamily: "Poppins",
                            fontSize: {
                                xs: "15px",
                                sm: "18px"
                            },
                            lineHeight: "22.5px",
                            fontWeight: {
                                xs: "400",
                                sm: "700"
                            }
                        },
                        children: "5000 words left"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    height: "100px",
                    width: {
                        xs: "100%",
                        sm: "90%"
                    },
                    border: {
                        xs: "none",
                        sm: '1px solid #0000001A'
                    },
                    borderRadius: {
                        sm: "30px",
                        xs: "none"
                    },
                    padding: {
                        xs: "0px 0px 30px 10px",
                        sm: "30px 0px 50px 30px"
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    position: "relative",
                    borderBottom: {
                        xs: "1px solid #0000001A"
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        padding: "0px",
                        margin: "0px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                textDecoration: "none",
                                listStyle: "none"
                            },
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        fontFamily: "Poppins",
                                        fontSize: {
                                            xs: "16px",
                                            sm: "22px"
                                        },
                                        lineHeight: {
                                            xs: "20px",
                                            sm: "27px"
                                        },
                                        fontWeight: {
                                            xs: "400",
                                            sm: "700"
                                        },
                                        color: "#737791"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                marginRight: "20px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                            lineNumber: 108,
                                            columnNumber: 13
                                        }, this),
                                        " Dashboard"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 107,
                                    columnNumber: 70
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                textDecoration: "none",
                                listStyle: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    fontFamily: "Poppins",
                                    fontSize: {
                                        xs: "16px",
                                        sm: "22px"
                                    },
                                    lineHeight: {
                                        xs: "20px",
                                        sm: "27px"
                                    },
                                    fontWeight: {
                                        xs: "400",
                                        sm: "700"
                                    },
                                    color: "#737791",
                                    paddingTop: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            marginRight: "20px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    " Templates"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                textDecoration: "none",
                                listStyle: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    fontFamily: "Poppins",
                                    fontSize: {
                                        xs: "16px",
                                        sm: "22px"
                                    },
                                    lineHeight: {
                                        xs: "20px",
                                        sm: "27px"
                                    },
                                    fontWeight: {
                                        xs: "400",
                                        sm: "700"
                                    },
                                    color: "#737791",
                                    paddingTop: "20px",
                                    textAlign: "left"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            paddingRight: "20px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    " Assistant"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    minHeight: "100px",
                    width: {
                        xs: "100%",
                        sm: "90%"
                    },
                    border: {
                        xs: "none",
                        sm: '1px solid #0000001A'
                    },
                    borderRadius: {
                        sm: "30px",
                        xs: "none"
                    },
                    padding: {
                        xs: "0px 0px 30px 10px",
                        sm: "30px 0px 50px 30px"
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    position: "relative",
                    marginTop: "40px",
                    borderBottom: {
                        xs: "1px solid #0000001A"
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        padding: "0px",
                        margin: "0px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "Poppins",
                                fontSize: {
                                    xs: "16px",
                                    sm: "22px"
                                },
                                lineHeight: "27px",
                                fontWeight: {
                                    xs: "400",
                                    sm: "700"
                                },
                                color: "#737791"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        marginRight: "20px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                "  Workflows"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "Poppins",
                                fontSize: {
                                    xs: "16px",
                                    sm: "22px"
                                },
                                lineHeight: "27px",
                                fontWeight: {
                                    xs: "400",
                                    sm: "700"
                                },
                                color: "#737791",
                                paddingTop: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        marginRight: "20px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                " Data Analyst"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                display: "flex",
                                alignItems: "flex-start",
                                fontFamily: "Poppins",
                                fontSize: {
                                    xs: "16px",
                                    sm: "22px"
                                },
                                lineHeight: "27px",
                                fontWeight: {
                                    xs: "400",
                                    sm: "700"
                                },
                                color: "#737791",
                                paddingTop: "20px",
                                textAlign: "left"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        paddingRight: "20px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                " Article Generator"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                display: "flex",
                                alignItems: "flex-start",
                                fontFamily: "Poppins",
                                fontSize: {
                                    xs: "16px",
                                    sm: "22px"
                                },
                                lineHeight: "27px",
                                fontWeight: {
                                    xs: "400",
                                    sm: "700"
                                },
                                color: "#737791",
                                paddingTop: "20px",
                                textAlign: "left"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        paddingRight: "20px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                " Image Generator"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                display: "flex",
                                alignItems: "flex-start",
                                fontFamily: "Poppins",
                                fontSize: {
                                    xs: "16px",
                                    sm: "22px"
                                },
                                lineHeight: "27px",
                                fontWeight: {
                                    xs: "400",
                                    sm: "700"
                                },
                                color: "#737791",
                                paddingTop: "20px",
                                textAlign: "left"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        paddingRight: "20px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                " Content Rewriter"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                display: "flex",
                                alignItems: "flex-start",
                                fontFamily: "Poppins",
                                fontSize: {
                                    xs: "16px",
                                    sm: "22px"
                                },
                                lineHeight: "27px",
                                fontWeight: {
                                    xs: "400",
                                    sm: "700"
                                },
                                color: "#737791",
                                paddingTop: "20px",
                                textAlign: "left"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        paddingRight: "20px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                " Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    minHeight: "100px",
                    width: {
                        xs: "100%",
                        sm: "90%"
                    },
                    border: {
                        xs: "none",
                        sm: '1px solid #0000001A'
                    },
                    borderRadius: "30px",
                    padding: {
                        xs: "0px 0px 30px 10px",
                        sm: "30px 0px 50px 30px"
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    position: "relative",
                    marginTop: "40px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        padding: "0px",
                        margin: "0px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                listStyle: "none"
                            },
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        fontFamily: "Poppins",
                                        fontSize: {
                                            xs: "18px",
                                            sm: "22px"
                                        },
                                        lineHeight: "27px",
                                        fontWeight: {
                                            xs: "400",
                                            sm: "700"
                                        },
                                        color: "#737791"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                marginRight: "20px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                            lineNumber: 156,
                                            columnNumber: 13
                                        }, this),
                                        " Account"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 155,
                                    columnNumber: 46
                                }, this),
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                listStyle: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    fontFamily: "Poppins",
                                    fontSize: {
                                        xs: "18px",
                                        sm: "22px"
                                    },
                                    lineHeight: "27px",
                                    fontWeight: {
                                        xs: "400",
                                        sm: "700"
                                    },
                                    color: "#737791",
                                    paddingTop: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            marginRight: "20px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    " My History"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                listStyle: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    fontFamily: "Poppins",
                                    fontSize: {
                                        xs: "18px",
                                        sm: "22px"
                                    },
                                    lineHeight: "27px",
                                    fontWeight: {
                                        xs: "400",
                                        sm: "700"
                                    },
                                    color: "#737791",
                                    paddingTop: "20px",
                                    textAlign: "left"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            paddingRight: "20px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    " Usage History"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                listStyle: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    fontFamily: "Poppins",
                                    fontSize: {
                                        xs: "18px",
                                        sm: "22px"
                                    },
                                    lineHeight: "27px",
                                    fontWeight: {
                                        xs: "400",
                                        sm: "700"
                                    },
                                    color: "#737791",
                                    paddingTop: "20px",
                                    textAlign: "left"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            paddingRight: "20px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    " Image Generator"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                listStyle: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    fontFamily: "Poppins",
                                    fontSize: {
                                        xs: "18px",
                                        sm: "22px"
                                    },
                                    lineHeight: "27px",
                                    fontWeight: {
                                        xs: "400",
                                        sm: "700"
                                    },
                                    color: "#737791",
                                    paddingTop: "20px",
                                    textAlign: "left"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            paddingRight: "20px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    " Plans and Billing"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                listStyle: "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    fontFamily: "Poppins",
                                    fontSize: {
                                        xs: "18px",
                                        sm: "22px"
                                    },
                                    lineHeight: "27px",
                                    fontWeight: {
                                        xs: "400",
                                        sm: "700"
                                    },
                                    color: "#737791",
                                    paddingTop: "20px",
                                    textAlign: "left"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            paddingRight: "20px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    " Profile Details"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const [anchorEll, setAnchorEll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClickk = (event)=>{
        setAnchorEll(event.currentTarget);
    };
    const handleClosee = ()=>{
        setAnchorEll(null);
    };
    const card = [
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1$2e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Kierra Curtis"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$1$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Ashlynn Rhiel Madsen"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$2$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Terry Septimus"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$3$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$4$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$4$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$5$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$5$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$7$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$7$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$8$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$8$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$9$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$9$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$10$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$10$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$11$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$11$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$1$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$2$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$3$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$4$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$Ellipse__1__$28$4$292e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: "Advertiser"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    maxWidth: "xl",
                    sx: {
                        paddingLeft: "0px",
                        paddingRight: "0px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            height: "65px",
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            container: true,
                            sx: {
                                paddingLeft: "0px",
                                paddingRight: "0px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                    xs: 12,
                                    sm: 2.5,
                                    sx: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    container: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 12,
                                                        md: 0,
                                                        sx: {
                                                            display: {
                                                                xs: 'block',
                                                                md: 'none',
                                                                sm: "block"
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                            onClick: ()=>toggleDrawer(),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                sx: {
                                                                    color: '#737791',
                                                                    fontSize: '30px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
                                                    anchor: "left",
                                                    open: open,
                                                    onClose: ()=>toggleDrawer(),
                                                    sx: {
                                                        '& .MuiDrawer-paper': {
                                                            width: open ? {
                                                                xs: "280px",
                                                                sm: '580px'
                                                            } : '240px',
                                                            transition: 'width 0.3s'
                                                        }
                                                    },
                                                    children: [
                                                        menuItems,
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                marginRight: {
                                                    md: "70px",
                                                    xs: "0px"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$logo$2e$svg__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                alt: "logo image",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$dashboard$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].LogoImage
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                    xs: 0,
                                    sm: 9.5,
                                    sx: {
                                        display: {
                                            xs: "none",
                                            md: "flex"
                                        },
                                        justifyContent: "flex-end",
                                        alignItems: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: "flex",
                                            justifyContent: "flex-end"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    padding: "0px 45px",
                                                    width: "150px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    variant: "contained",
                                                    sx: {
                                                        width: "100%",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        fontFamily: "Poppins",
                                                        textTransform: "capitalize",
                                                        padding: "12px",
                                                        boxShadow: "none",
                                                        backgroundColor: "#D7F200",
                                                        color: "#000000",
                                                        borderRadius: "12px"
                                                    },
                                                    children: "create content"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    height: "48px",
                                                    width: "48px",
                                                    backgroundColor: "#FFFAF1",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: "8px",
                                                    color: "#FFA412",
                                                    cursor: "pointer",
                                                    marginLeft: "5px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Chat$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    sx: {
                                                        color: "#000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    paddingLeft: "45px",
                                                    display: "flex",
                                                    cursor: "pointer"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$dasboardman$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$dasboardman$2e$png__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                        alt: "dashboardman",
                                                        style: {
                                                            width: "60px",
                                                            height: "60px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            display: "flex",
                                                            justifyContent: "flex-start",
                                                            alignItems: "space-between",
                                                            flexDirection: "column",
                                                            height: "60px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    paddingLeft: "12px",
                                                                    fontSize: "18px",
                                                                    fontFamily: "Poppins",
                                                                    color: "#374557",
                                                                    lineHeight: "24px",
                                                                    fontWeight: "600"
                                                                },
                                                                children: "surya"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    paddingLeft: "12px",
                                                                    fontSize: "16px",
                                                                    color: "#374557",
                                                                    lineHeight: "20px",
                                                                    fontWeight: "600",
                                                                    fontFamily: "Poppins",
                                                                    paddingTop: "10px",
                                                                    display: "flex",
                                                                    alignItems: "center"
                                                                },
                                                                onClick: handleClickk,
                                                                children: [
                                                                    "Admin  ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$KeyboardArrowDown$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        sx: {
                                                                            color: "#151D48"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 32
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                                anchorEl: anchorEll,
                                                                open: Boolean(anchorEll),
                                                                onClose: handleClosee,
                                                                PaperProps: {
                                                                    style: {
                                                                        width: "220px",
                                                                        fontFamily: "Poppins",
                                                                        border: "1px solid #0000002B",
                                                                        padding: "10px"
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                        onClick: handleClosee,
                                                                        sx: {
                                                                            fontFamily: "Poppins",
                                                                            fontWeight: "500",
                                                                            letterSpacing: "1px",
                                                                            display: "flex",
                                                                            alignItems: "flex-start"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBox$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                sx: {
                                                                                    marginRight: "10px",
                                                                                    fontSize: "40px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                                lineNumber: 302,
                                                                                columnNumber: 174
                                                                            }, this),
                                                                            " User1 ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                                lineNumber: 302,
                                                                                columnNumber: 246
                                                                            }, this),
                                                                            "faizan@gmail"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                                                        sx: {
                                                                            my: 1,
                                                                            borderColor: '#e0e0e0',
                                                                            borderWidth: '1px'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                        onClick: handleClosee,
                                                                        sx: {
                                                                            fontFamily: "Poppins",
                                                                            fontWeight: "500",
                                                                            letterSpacing: "1px",
                                                                            paddingTop: "10px",
                                                                            display: "flex",
                                                                            alignItems: "flex-start",
                                                                            paddingLeft: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkMode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                sx: {
                                                                                    marginRight: "25px",
                                                                                    paddingLeft: "15px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                                lineNumber: 306,
                                                                                columnNumber: 215
                                                                            }, this),
                                                                            "Dark"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                        onClick: handleClosee,
                                                                        sx: {
                                                                            fontFamily: "Poppins",
                                                                            fontWeight: "500",
                                                                            letterSpacing: "1px",
                                                                            paddingTop: "10px",
                                                                            display: "flex",
                                                                            alignItems: "flex-start",
                                                                            paddingLeft: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MotionPhotosAuto$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                sx: {
                                                                                    marginRight: "25px",
                                                                                    paddingLeft: "15px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                                lineNumber: 308,
                                                                                columnNumber: 215
                                                                            }, this),
                                                                            "Auto"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                        onClick: handleClosee,
                                                                        sx: {
                                                                            fontFamily: "Poppins",
                                                                            fontWeight: "500",
                                                                            letterSpacing: "1px",
                                                                            paddingTop: "10px",
                                                                            display: "flex",
                                                                            alignItems: "flex-start",
                                                                            paddingLeft: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkMode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                sx: {
                                                                                    marginRight: "25px",
                                                                                    paddingLeft: "15px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                                lineNumber: 310,
                                                                                columnNumber: 215
                                                                            }, this),
                                                                            "Dark"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 310,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                        onClick: handleClosee,
                                                                        sx: {
                                                                            fontFamily: "Poppins",
                                                                            fontWeight: "500",
                                                                            letterSpacing: "1px",
                                                                            paddingTop: "10px",
                                                                            display: "flex",
                                                                            alignItems: "flex-start",
                                                                            paddingLeft: "15px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MotionPhotosAuto$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                sx: {
                                                                                    marginRight: "25px",
                                                                                    paddingLeft: "15px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                                lineNumber: 312,
                                                                                columnNumber: 215
                                                                            }, this),
                                                                            "Auto"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                                                        sx: {
                                                                            my: 1,
                                                                            borderColor: '#e0e0e0',
                                                                            borderWidth: '1px'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                        onClick: handleClosee,
                                                                        sx: {
                                                                            fontFamily: "Poppins",
                                                                            fontWeight: "500",
                                                                            letterSpacing: "1px",
                                                                            paddingTop: "10px",
                                                                            display: "flex",
                                                                            alignItems: "flex-start"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                sx: {
                                                                                    marginRight: "25px",
                                                                                    paddingLeft: "15px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                                lineNumber: 315,
                                                                                columnNumber: 194
                                                                            }, this),
                                                                            "Log Out"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        paddingTop: "15px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        container: true,
                        sx: {
                            paddingLeft: "0px",
                            paddingRight: "0px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                xs: 12,
                                md: 2.3,
                                sx: {
                                    padding: "20px",
                                    display: {
                                        xs: "none",
                                        md: "block",
                                        sm: "none"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: {
                                                sm: "flex"
                                            },
                                            justifyContent: "space-between",
                                            borderBottom: "4px solid #4AB58E",
                                            borderRadius: "2px",
                                            marginBottom: "40px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: {
                                                    fontFamily: "Poppins",
                                                    fontSize: "15px",
                                                    lineHeight: "22.5px",
                                                    fontWeight: "400"
                                                },
                                                children: "Credits"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: {
                                                    fontFamily: "Poppins",
                                                    fontSize: "15px",
                                                    lineHeight: "22.5px",
                                                    fontWeight: "400"
                                                },
                                                children: "5000 words left"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            height: "100px",
                                            width: "90%",
                                            border: '1px solid #0000001A',
                                            borderRadius: "30px",
                                            padding: "25px 0px 40px 20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            position: "relative"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            style: {
                                                margin: "0px",
                                                padding: "0px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        listStyle: "none"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard",
                                                        passHref: true,
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791",
                                                                ...getLinkStyle('/dashboard')
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["PiChartPieSliceFill"], {
                                                                    style: {
                                                                        marginRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Dashoard"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        listStyle: "none"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard/templates",
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    fontFamily: "Poppins",
                                                                    fontSize: "18px",
                                                                    lineHeight: "27px",
                                                                    fontWeight: "400",
                                                                    color: "#737791",
                                                                    paddingTop: "20px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        sx: {
                                                                            marginRight: "20px"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                        lineNumber: 353,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "   Templates"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 91
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        listStyle: "none"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard/assistant",
                                                        style: {
                                                            textDecoration: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791",
                                                                paddingTop: "20px",
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["SiGoogleassistant"], {
                                                                    style: {
                                                                        paddingRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "   Assistant"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            minHeight: "100px",
                                            width: "90%",
                                            border: '1px solid #0000001A',
                                            borderRadius: "30px",
                                            padding: "50px 0px 20px 20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            position: "relative",
                                            marginTop: "40px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                style: {
                                                    margin: "0px",
                                                    padding: "0px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            listStyle: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        marginRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 372,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Data Analyst"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            listStyle: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791",
                                                                paddingTop: "20px",
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Feed$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        paddingRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Article Generator"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            listStyle: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791",
                                                                paddingTop: "20px",
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InsertPhoto$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        paddingRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Image Generator"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            listStyle: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791",
                                                                paddingTop: "20px",
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContentCopy$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        paddingRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 387,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Content Rewriter"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "flex-start",
                                                            fontFamily: "Poppins",
                                                            fontSize: "18px",
                                                            lineHeight: "27px",
                                                            fontWeight: "400",
                                                            color: "#737791",
                                                            paddingTop: "20px",
                                                            textAlign: "left"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DocumentScanner$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                sx: {
                                                                    paddingRight: "20px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 21
                                                            }, this),
                                                            "   Documents"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 368,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    position: "absolute",
                                                    top: "-20px",
                                                    left: "55px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        background: "#fff",
                                                        borderRadius: "16px",
                                                        color: "#403F3F",
                                                        padding: "8px 25px",
                                                        boxShadow: "none",
                                                        textTransform: "capitalize",
                                                        fontSize: "18px",
                                                        fontFamily: "Poppins",
                                                        fontWeight: "600"
                                                    },
                                                    children: "Workflows"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            minHeight: "100px",
                                            width: "100%",
                                            border: '1px solid #0000001A',
                                            borderRadius: "30px",
                                            padding: "50px 0px 20px 0px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "relative",
                                            marginTop: "40px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                style: {
                                                    margin: "0px",
                                                    padding: "0px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            listStyle: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$History$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        marginRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   My History"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            listStyle: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791",
                                                                paddingTop: "20px",
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        paddingRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Usage History"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            listStyle: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791",
                                                                paddingTop: "20px",
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Receipt$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        paddingRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Plans and Billing"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            listStyle: "none"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                fontFamily: "Poppins",
                                                                fontSize: "18px",
                                                                lineHeight: "27px",
                                                                fontWeight: "400",
                                                                color: "#737791",
                                                                paddingTop: "20px",
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        paddingRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Profile Details"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 401,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    position: "absolute",
                                                    top: "-20px",
                                                    left: "60px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        background: "#fff",
                                                        borderRadius: "16px",
                                                        color: "#403F3F",
                                                        padding: "8px 25px",
                                                        boxShadow: "none",
                                                        textTransform: "capitalize",
                                                        fontSize: "18px",
                                                        fontFamily: "Poppins",
                                                        fontWeight: "600"
                                                    },
                                                    children: "Accounts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                container: true,
                                xs: 12,
                                sm: 12,
                                md: 9.7,
                                sx: {
                                    backgroundColor: "#F8F9FA",
                                    padding: {
                                        xs: "10px",
                                        sm: "5px 25px 20px 25px"
                                    },
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            padding: "10px 10px",
                                            paddingBottom: "15px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Breadcrumbs$2f$Breadcrumbs$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Breadcrumbs$3e$__["Breadcrumbs"], {
                                            maxItems: 2,
                                            "aria-label": "breadcrumb",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Link$2f$Link$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                    sx: {
                                                        textDecoration: 'none',
                                                        '&:hover': {
                                                            textDecoration: 'underline'
                                                        },
                                                        fontFamily: "Poppins",
                                                        fontWeight: "500",
                                                        fontSize: "16px",
                                                        lineHeight: "32px"
                                                    },
                                                    color: "inherit",
                                                    href: "/",
                                                    children: "Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Link$2f$Link$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                    sx: {
                                                        textDecoration: 'none',
                                                        '&:hover': {
                                                            textDecoration: 'underline'
                                                        },
                                                        fontFamily: "Poppins",
                                                        fontWeight: "500",
                                                        fontSize: "16px",
                                                        lineHeight: "32px"
                                                    },
                                                    color: "inherit",
                                                    href: "/dashboard/assistant",
                                                    children: "Assistant"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            background: "#fff",
                                            padding: "20px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: {
                                                    textAlign: "center",
                                                    fontFamily: "Quicksand",
                                                    fontSize: "52.1px",
                                                    lineHeight: "65.13px",
                                                    fontWeight: "600",
                                                    color: "#000000"
                                                },
                                                children: "Analyze Your Data"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 449,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: {
                                                    textAlign: "center",
                                                    fontFamily: "Quicksand",
                                                    fontSize: "23px",
                                                    lineHeight: "28px",
                                                    fontWeight: "400",
                                                    color: "#000000",
                                                    paddingTop: "10px"
                                                },
                                                children: "Upload your file for data analysis, summarization, and more."
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 452,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    paddingTop: "50px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        color: "#515151",
                                                        fontSize: "20px",
                                                        lineHeight: "25px",
                                                        fontWeight: "400",
                                                        fontFamily: "Quicksand",
                                                        textAlign: "center"
                                                    },
                                                    children: "You can add multiple PDF, DOC, TXT, and other files together."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                                lineNumber: 455,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/dashboard/analyst/index.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(analyst, "iSo7xS2jXBk6CyFu6N868bKym0M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
const __TURBOPACK__default__export__ = analyst;
var _c;
__turbopack_refresh__.register(_c, "CustomTabPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/dashboard/analyst/index.tsx [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const PAGE_PATH = "/dashboard/analyst";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/dashboard/analyst/index.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[project]/src/pages/dashboard/analyst/index.tsx (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_require__("[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/dashboard/analyst/index.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__050d09._.js.map