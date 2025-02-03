(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__81d204._.js", {

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
"[project]/src/pages/dashboard/index.tsx [client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Menu/Menu.js [client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBox$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/AccountBox.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Divider/Divider.js [client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkMode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/DarkMode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MotionPhotosAuto$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/MotionPhotosAuto.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Logout.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$KeyboardArrowDown$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/KeyboardArrowDown.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Breadcrumbs$2f$Breadcrumbs$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Breadcrumbs$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js [client] (ecmascript) <export default as Breadcrumbs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Link$2f$Link$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Link/Link.js [client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TextSnippet$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/TextSnippet.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Collections$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Collections.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$JoinLeft$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/JoinLeft.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Update$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Update.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$List$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/List.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SpaceDashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/SpaceDashboard.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SignalCellularAlt$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/SignalCellularAlt.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$QuestionMark$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/QuestionMark.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PermIdentity$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/PermIdentity.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FileCopy$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/FileCopy.js [client] (ecmascript)");
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
const Dashboard = ()=>{
    _s();
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
                        fileName: "[project]/src/pages/dashboard/index.tsx",
                        lineNumber: 47,
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
                        fileName: "[project]/src/pages/dashboard/index.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/dashboard/index.tsx",
                lineNumber: 46,
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
                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                            lineNumber: 57,
                                            columnNumber: 13
                                        }, this),
                                        " Dashboard"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 56,
                                    columnNumber: 70
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 56,
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
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    " Templates"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 60,
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
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    " Assistant"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/dashboard/index.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/dashboard/index.tsx",
                lineNumber: 53,
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
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                "  Workflows"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 77,
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
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                " Data Analyst"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 80,
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
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                " Article Generator"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 83,
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
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                " Image Generator"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 86,
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
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                " Content Rewriter"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 89,
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
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                " Documents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/dashboard/index.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/dashboard/index.tsx",
                lineNumber: 75,
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
                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                            lineNumber: 105,
                                            columnNumber: 13
                                        }, this),
                                        " Account"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 104,
                                    columnNumber: 46
                                }, this),
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 104,
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
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    " My History"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 108,
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
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    " Usage History"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 113,
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
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    " Image Generator"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 118,
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
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    " Plans and Billing"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 123,
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
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    " Profile Details"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/dashboard/index.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/dashboard/index.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/dashboard/index.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
    const [anchorEll, setAnchorEll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClickk = (event)=>{
        setAnchorEll(event.currentTarget);
    };
    const handleClosee = ()=>{
        setAnchorEll(null);
    };
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
                            height: "70px",
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            container: true,
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
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 160,
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
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                marginRight: {
                                                    md: "50px",
                                                    xs: "0px"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Assets$2f$Imges$2f$logo$2e$svg__$5b$client$5d$__$28$static$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                alt: "logo image",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$dashboard$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].LogoImage
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 157,
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
                                                        padding: "15px 10px",
                                                        boxShadow: "none",
                                                        backgroundColor: "#D7F200",
                                                        color: "#000000",
                                                        borderRadius: "12px"
                                                    },
                                                    children: "create content"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 192,
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
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    paddingLeft: "45px",
                                                    display: "flex",
                                                    cursor: "pointer",
                                                    justifyContent: "center"
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
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            display: "flex",
                                                            justifyContent: "flex-start",
                                                            alignItems: "space-between",
                                                            flexDirection: "column",
                                                            height: "60px",
                                                            paddingLeft: "20px"
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
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    paddingLeft: "12px",
                                                                    fontSize: "16px",
                                                                    color: "#737791",
                                                                    lineHeight: "20px",
                                                                    fontWeight: "400",
                                                                    fontFamily: "Poppins",
                                                                    paddingTop: "10px",
                                                                    display: "flex",
                                                                    alignItems: "flex-start"
                                                                },
                                                                children: "Admin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 207,
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
                                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                                lineNumber: 224,
                                                                                columnNumber: 174
                                                                            }, this),
                                                                            " User1 ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                                lineNumber: 224,
                                                                                columnNumber: 246
                                                                            }, this),
                                                                            "faizan@gmail"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                                                        sx: {
                                                                            my: 1,
                                                                            borderColor: '#e0e0e0',
                                                                            borderWidth: '1px'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 227,
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
                                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                                lineNumber: 228,
                                                                                columnNumber: 215
                                                                            }, this),
                                                                            "Dark"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 228,
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
                                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                                lineNumber: 230,
                                                                                columnNumber: 215
                                                                            }, this),
                                                                            "Auto"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 230,
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
                                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                                lineNumber: 232,
                                                                                columnNumber: 215
                                                                            }, this),
                                                                            "Dark"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 232,
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
                                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 215
                                                                            }, this),
                                                                            "Auto"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                                                        sx: {
                                                                            my: 1,
                                                                            borderColor: '#e0e0e0',
                                                                            borderWidth: '1px'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 236,
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
                                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                                lineNumber: 237,
                                                                                columnNumber: 194
                                                                            }, this),
                                                                            "Log Out"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            paddingLeft: "15px"
                                                        },
                                                        onClick: handleClickk,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$KeyboardArrowDown$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/dashboard/index.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/dashboard/index.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/dashboard/index.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        paddingTop: "15px",
                        backgroundColor: ""
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        container: true,
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
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 258,
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
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 257,
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        marginRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Dashoard"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 268,
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
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "   Templates"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 91
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 277,
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        paddingRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "   Assistant"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 266,
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
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Data Analyst"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 296,
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
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Article Generator"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 301,
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
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Image Generator"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 306,
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
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Content Rewriter"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 311,
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                sx: {
                                                                    paddingRight: "20px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 317,
                                                                columnNumber: 21
                                                            }, this),
                                                            "   Documents"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    position: "absolute",
                                                    top: "-16px",
                                                    left: "35px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        background: "#D7F200",
                                                        borderRadius: "16px",
                                                        color: "#000",
                                                        padding: "8px 35px",
                                                        boxShadow: "none",
                                                        textTransform: "capitalize",
                                                        fontSize: "18px",
                                                        fontFamily: "Poppins",
                                                        fontWeight: "600"
                                                    },
                                                    children: "Workflows"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 293,
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        marginRight: "20px"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   My History"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 328,
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
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Usage History"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 333,
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
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Image Generator"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 338,
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
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Plans and Billing"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 343,
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
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "   Profile Details"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    position: "absolute",
                                                    top: "-16px",
                                                    left: "40px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        background: "#D7F200",
                                                        borderRadius: "16px",
                                                        color: "#000",
                                                        padding: "8px 35px",
                                                        boxShadow: "none",
                                                        textTransform: "capitalize",
                                                        fontSize: "18px",
                                                        fontFamily: "Poppins",
                                                        fontWeight: "600"
                                                    },
                                                    children: "Accounts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                xs: 12,
                                md: 6.2,
                                sm: 12,
                                sx: {
                                    backgroundColor: "#F8F9FA",
                                    padding: {
                                        xs: "20px",
                                        sm: "5px 10px"
                                    }
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
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 365,
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
                                                    href: "/dashboard",
                                                    children: "Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            backgroundColor: "#fff",
                                            padding: "20px",
                                            borderRadius: "20px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: {
                                                    fontFamily: "Poppins",
                                                    fontSize: "32px",
                                                    color: "#05004E",
                                                    lineHeight: "32px",
                                                    fontWeight: "500",
                                                    paddingBottom: "25px"
                                                },
                                                children: "Hello, Surya"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                                sx: {
                                                    color: "#D4E1E9"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                container: true,
                                                spacing: 1,
                                                sx: {
                                                    paddingTop: "25px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                        xs: 12,
                                                        sm: 3,
                                                        item: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                padding: {
                                                                    xs: "12px 20px",
                                                                    sm: "20px"
                                                                },
                                                                backgroundColor: "#FFE2E5",
                                                                borderRadius: "16px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    sx: {
                                                                        height: "40px",
                                                                        width: "40px",
                                                                        display: 'flex',
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                        backgroundColor: "#FA5A7D",
                                                                        borderRadius: "50%",
                                                                        color: "#fff",
                                                                        marginBottom: {
                                                                            xs: "10px",
                                                                            sm: "20px"
                                                                        }
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TextSnippet$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            sm: "22px",
                                                                            xs: "16px"
                                                                        },
                                                                        color: "#151D48",
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "600",
                                                                        lineHeight: {
                                                                            xs: "22px",
                                                                            sm: "32px"
                                                                        },
                                                                        paddingBottom: {
                                                                            xs: "4px",
                                                                            sm: "8px"
                                                                        }
                                                                    },
                                                                    children: "0 Words"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            sm: "20px",
                                                                            xs: "16px"
                                                                        },
                                                                        color: "#425166",
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "500",
                                                                        lineHeight: "24px",
                                                                        paddingBottom: {
                                                                            xs: "4px",
                                                                            sm: "8px"
                                                                        }
                                                                    },
                                                                    children: "Words Generated"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                        xs: 12,
                                                        sm: 3,
                                                        item: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                padding: {
                                                                    xs: "12px 20px",
                                                                    sm: "20px"
                                                                },
                                                                backgroundColor: "#FFF4DE",
                                                                borderRadius: "16px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    sx: {
                                                                        height: "40px",
                                                                        width: "40px",
                                                                        display: 'flex',
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                        backgroundColor: "#FF947A",
                                                                        borderRadius: "50%",
                                                                        color: "#fff",
                                                                        marginBottom: "20px"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Collections$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            sm: "22px",
                                                                            xs: "16px"
                                                                        },
                                                                        color: "#151D48",
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "600",
                                                                        lineHeight: {
                                                                            sm: "32px",
                                                                            xs: "22px"
                                                                        },
                                                                        paddingBottom: {
                                                                            xs: "4px",
                                                                            sm: "8px"
                                                                        }
                                                                    },
                                                                    children: "0 Image"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            xs: "16px",
                                                                            sm: "20px"
                                                                        },
                                                                        color: "#425166",
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "500",
                                                                        lineHeight: "24px",
                                                                        paddingBottom: {
                                                                            xs: "4px",
                                                                            sm: "8px"
                                                                        }
                                                                    },
                                                                    children: "Images Generated"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                        xs: 12,
                                                        sm: 3,
                                                        item: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                padding: {
                                                                    sm: "20px",
                                                                    xs: "12px 20px"
                                                                },
                                                                backgroundColor: "#DCFCE7",
                                                                borderRadius: "16px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    sx: {
                                                                        height: "40px",
                                                                        width: "40px",
                                                                        display: 'flex',
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                        backgroundColor: "#3CD856",
                                                                        borderRadius: "50%",
                                                                        color: "#fff",
                                                                        marginBottom: "20px"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$JoinLeft$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            xs: "16px",
                                                                            sm: "22px"
                                                                        },
                                                                        color: "#151D48",
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "600",
                                                                        lineHeight: {
                                                                            sm: "32px",
                                                                            xs: "22px"
                                                                        },
                                                                        paddingBottom: {
                                                                            xs: "4px",
                                                                            sm: "8px"
                                                                        }
                                                                    },
                                                                    children: "5 Words"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            sm: "20px",
                                                                            xs: "16px"
                                                                        },
                                                                        color: "#425166",
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "500",
                                                                        lineHeight: "24px",
                                                                        paddingBottom: {
                                                                            xs: "4px",
                                                                            sm: "8px"
                                                                        }
                                                                    },
                                                                    children: [
                                                                        "Credits ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$dashboard$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].break
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                            lineNumber: 418,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " Left"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                        xs: 12,
                                                        sm: 3,
                                                        item: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                padding: {
                                                                    xs: "12px 20px",
                                                                    sm: "20px"
                                                                },
                                                                backgroundColor: "#F3E8FF",
                                                                borderRadius: "16px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    sx: {
                                                                        height: "40px",
                                                                        width: "40px",
                                                                        display: 'flex',
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                        backgroundColor: "#BF83FF",
                                                                        borderRadius: "50%",
                                                                        color: "#fff",
                                                                        marginBottom: "20px"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Update$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            xs: "16px",
                                                                            sm: "22px"
                                                                        },
                                                                        color: "#151D48",
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "600",
                                                                        lineHeight: {
                                                                            xs: "22px",
                                                                            sm: "32px"
                                                                        },
                                                                        paddingBottom: {
                                                                            xs: "4px",
                                                                            sm: "8px"
                                                                        }
                                                                    },
                                                                    children: "0 Hours"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            xs: "16px",
                                                                            sm: "20px"
                                                                        },
                                                                        color: "#425166",
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "500",
                                                                        lineHeight: "24px",
                                                                        paddingBottom: {
                                                                            xs: "4px",
                                                                            sm: "8px"
                                                                        }
                                                                    },
                                                                    children: [
                                                                        "Time",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$dashboard$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].break
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                            lineNumber: 432,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " Saved"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            padding: {
                                                sm: "20px 25px",
                                                xs: "20px 25px"
                                            },
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: {
                                                    fontFamily: "Poppins",
                                                    fontSize: {
                                                        xs: "20px",
                                                        sm: "32px"
                                                    },
                                                    fontWeight: "500",
                                                    lineHeight: "32px",
                                                    color: "#05004E"
                                                },
                                                children: "For you"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    variant: "contained",
                                                    sx: {
                                                        backgroundColor: "#D7F200",
                                                        borderRadius: "8px",
                                                        color: "#000",
                                                        boxShadow: "none",
                                                        fontSize: {
                                                            xs: "12px",
                                                            sm: "14px"
                                                        },
                                                        fontFamily: "Poppins",
                                                        textTransform: "capitalize",
                                                        border: "1px solid #C3D3E2"
                                                    },
                                                    children: "All Tools"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            backgroundColor: "#fff",
                                            padding: "20px 20px",
                                            borderRadius: "20px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                            container: true,
                                            spacing: 1,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    xs: 12,
                                                    md: 6,
                                                    item: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            backgroundColor: "#F6F6F6",
                                                            padding: {
                                                                sm: "25px",
                                                                xs: "12px 20px"
                                                            },
                                                            borderRadius: "16px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            flexDirection: "column"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    height: "40px",
                                                                    width: "40px",
                                                                    display: 'flex',
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    backgroundColor: "#789FFE",
                                                                    borderRadius: "50%",
                                                                    color: "#fff",
                                                                    marginBottom: {
                                                                        sm: "20px",
                                                                        xs: "10px"
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$List$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    fontFamily: "Poppins",
                                                                    fontSize: {
                                                                        sm: "24px",
                                                                        xs: "18px"
                                                                    },
                                                                    color: "#151D48",
                                                                    lineHeight: {
                                                                        xs: "22px",
                                                                        sm: "32px"
                                                                    },
                                                                    fontWeight: "600"
                                                                },
                                                                children: "Artical Generator"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    fontFamily: "Poppins",
                                                                    fontSize: {
                                                                        xs: "14px",
                                                                        sm: "16px"
                                                                    },
                                                                    color: "#151D48",
                                                                    lineHeight: "24px",
                                                                    fontWeight: "400",
                                                                    textAlign: "center",
                                                                    paddingTop: {
                                                                        xs: "10px",
                                                                        sm: "15px"
                                                                    }
                                                                },
                                                                children: "Assists with homework writing by providing suggestions for grammar, style, and content improvements."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    xs: 12,
                                                    md: 6,
                                                    item: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            backgroundColor: "#F6F6F6",
                                                            padding: {
                                                                sm: "25px",
                                                                xs: "12px 20px"
                                                            },
                                                            borderRadius: "16px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            flexDirection: "column"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    height: "40px",
                                                                    width: "40px",
                                                                    display: 'flex',
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    backgroundColor: "#DDA840",
                                                                    borderRadius: "50%",
                                                                    color: "#fff",
                                                                    marginBottom: {
                                                                        sm: "20px",
                                                                        xs: "10px"
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SpaceDashboard$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    fontFamily: "Poppins",
                                                                    fontSize: {
                                                                        xs: "16px",
                                                                        sm: "24px"
                                                                    },
                                                                    color: "#151D48",
                                                                    lineHeight: "32px",
                                                                    fontWeight: "600"
                                                                },
                                                                children: "Headline Generator"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    fontFamily: "Poppins",
                                                                    fontSize: {
                                                                        xs: "14px",
                                                                        sm: "16px"
                                                                    },
                                                                    color: "#151D48",
                                                                    lineHeight: "24px",
                                                                    fontWeight: "400",
                                                                    textAlign: "center",
                                                                    paddingTop: {
                                                                        xs: "8px",
                                                                        sm: "15px"
                                                                    }
                                                                },
                                                                children: "Assists with homework writing by providing suggestions for grammar, style, and content improvements."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            backgroundColor: "#fff",
                                            padding: "20px 20px",
                                            borderRadius: "20px",
                                            marginTop: "20px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                            container: true,
                                            spacing: 1,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    xs: 12,
                                                    md: 6,
                                                    item: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            backgroundColor: "#F6F6F6",
                                                            padding: {
                                                                xs: "12px 20px",
                                                                sm: "25px"
                                                            },
                                                            borderRadius: "16px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            flexDirection: "column"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    height: "40px",
                                                                    width: "40px",
                                                                    display: 'flex',
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    backgroundColor: "#41D7A5",
                                                                    borderRadius: "50%",
                                                                    color: "#fff",
                                                                    marginBottom: "20px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SignalCellularAlt$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    fontFamily: "Poppins",
                                                                    fontSize: {
                                                                        xs: "16px",
                                                                        sm: "24px"
                                                                    },
                                                                    color: "#151D48",
                                                                    lineHeight: {
                                                                        xs: "22px",
                                                                        sm: "32px"
                                                                    },
                                                                    fontWeight: "600"
                                                                },
                                                                children: "Blog Conclusion"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    fontFamily: "Poppins",
                                                                    fontSize: {
                                                                        xs: "14px",
                                                                        sm: "16px"
                                                                    },
                                                                    color: "#151D48",
                                                                    lineHeight: "24px",
                                                                    fontWeight: "400",
                                                                    textAlign: "center",
                                                                    paddingTop: {
                                                                        xs: "8px",
                                                                        sm: "15px"
                                                                    }
                                                                },
                                                                children: "Assists with homework writing by providing suggestions for grammar, style, and content improvements."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    xs: 12,
                                                    md: 6,
                                                    item: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            backgroundColor: "#F6F6F6",
                                                            padding: "25px",
                                                            borderRadius: "16px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            flexDirection: "column"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    height: "40px",
                                                                    width: "40px",
                                                                    display: 'flex',
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    backgroundColor: "#9B69FF",
                                                                    borderRadius: "50%",
                                                                    color: "#fff",
                                                                    marginBottom: {
                                                                        xs: "10px",
                                                                        sm: "20px"
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$List$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    fontFamily: "Poppins",
                                                                    fontSize: {
                                                                        xs: "16px",
                                                                        sm: "24px"
                                                                    },
                                                                    color: "#151D48",
                                                                    lineHeight: {
                                                                        xs: "22px",
                                                                        sm: "32px"
                                                                    },
                                                                    fontWeight: "600"
                                                                },
                                                                children: "English Correction"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                sx: {
                                                                    fontFamily: "Poppins",
                                                                    fontSize: {
                                                                        xs: "14px",
                                                                        sm: "16px"
                                                                    },
                                                                    color: "#151D48",
                                                                    lineHeight: "24px",
                                                                    fontWeight: "400",
                                                                    textAlign: "center",
                                                                    paddingTop: {
                                                                        xs: "10px",
                                                                        sm: "15px"
                                                                    }
                                                                },
                                                                children: "Assists with homework writing by providing suggestions for grammar, style, and content improvements."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                            lineNumber: 484,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                xs: 12,
                                md: 3.5,
                                sx: {
                                    padding: "60px 15px",
                                    backgroundColor: "#F8F9FA"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: {
                                            fontSize: {
                                                xs: "18px",
                                                sm: "32px"
                                            },
                                            fontFamily: "Poppins",
                                            color: "#05004E",
                                            lineHeight: "32px",
                                            fontWeight: "500",
                                            paddingBottom: "20px",
                                            paddingLeft: {
                                                xs: "20px",
                                                sm: "0px"
                                            }
                                        },
                                        children: "Most Popular"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                        container: true,
                                        sx: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                xs: 10,
                                                sm: 12,
                                                sx: {
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        backgroundColor: "#fff",
                                                        padding: {
                                                            sm: "20px",
                                                            xs: "15px"
                                                        },
                                                        width: {
                                                            xs: "95%",
                                                            sm: "100%"
                                                        },
                                                        borderRadius: "20px",
                                                        border: "1px solid #F8F9FA"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                alignItems: "center",
                                                                borderBottom: "1px solid #D4E1E9",
                                                                paddingBottom: {
                                                                    xs: "12px",
                                                                    sm: "20px"
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            xs: "16px",
                                                                            sm: "18px"
                                                                        },
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "600",
                                                                        lineHeight: {
                                                                            sm: "32px",
                                                                            xs: "22px"
                                                                        },
                                                                        color: "#05004E"
                                                                    },
                                                                    children: "Tweet Generator"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    sx: {
                                                                        height: {
                                                                            xs: "25px",
                                                                            sm: "29px"
                                                                        },
                                                                        width: {
                                                                            sm: "29px",
                                                                            xs: "23px"
                                                                        },
                                                                        borderRadius: "8px",
                                                                        border: "2px solid #1C274C",
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$QuestionMark$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 529,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 528,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                padding: {
                                                                    sm: "20px 12px 0px 12px",
                                                                    xs: "10px 12px 0px 12px"
                                                                },
                                                                fontSize: {
                                                                    sm: "16px",
                                                                    xs: "14px"
                                                                },
                                                                fontFamily: "Poppins",
                                                                fontWeight: "400",
                                                                lineHeight: {
                                                                    sm: "23px",
                                                                    xs: "20px"
                                                                },
                                                                color: "#444444"
                                                            },
                                                            children: "AI-powered tool that uses natural language processing algorithms to generate high-quality questions for any given topic or document."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                xs: 10,
                                                sm: 12,
                                                sx: {
                                                    marginTop: "10px",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        backgroundColor: "#fff",
                                                        padding: {
                                                            sm: "20px",
                                                            xs: "15px"
                                                        },
                                                        width: {
                                                            xs: "95%",
                                                            sm: "100%"
                                                        },
                                                        borderRadius: "20px",
                                                        border: "1px solid #F8F9FA"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                alignItems: "center",
                                                                borderBottom: "1px solid #D4E1E9",
                                                                paddingBottom: {
                                                                    xs: "12px",
                                                                    sm: "20px"
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            xs: "16px",
                                                                            sm: "18px"
                                                                        },
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "600",
                                                                        lineHeight: {
                                                                            sm: "32px",
                                                                            xs: "22px"
                                                                        },
                                                                        color: "#05004E"
                                                                    },
                                                                    children: "Youtube Video Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 540,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    sx: {
                                                                        height: {
                                                                            xs: "25px",
                                                                            sm: "29px"
                                                                        },
                                                                        width: {
                                                                            sm: "29px",
                                                                            xs: "23px"
                                                                        },
                                                                        borderRadius: "8px",
                                                                        border: "2px solid #1C274C",
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$List$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 544,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                padding: "20px 12px 0px 12px",
                                                                fontSize: {
                                                                    sm: "16px",
                                                                    xs: "14px"
                                                                },
                                                                fontFamily: "Poppins",
                                                                fontWeight: "400",
                                                                lineHeight: {
                                                                    sm: "23px",
                                                                    xs: "20px"
                                                                },
                                                                color: "#444444"
                                                            },
                                                            children: "AI-powered tool that uses natural language processing algorithms to generate high-quality questions for any given topic or document."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                xs: 10,
                                                sm: 12,
                                                sx: {
                                                    marginTop: "10px",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        backgroundColor: "#fff",
                                                        padding: {
                                                            sm: "20px",
                                                            xs: "15px"
                                                        },
                                                        width: {
                                                            xs: "95%",
                                                            sm: "100%"
                                                        },
                                                        borderRadius: "20px",
                                                        border: "1px solid #F8F9FA"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                alignItems: "center",
                                                                borderBottom: "1px solid #D4E1E9",
                                                                paddingBottom: "20px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            xs: "16px",
                                                                            sm: "18px"
                                                                        },
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "600",
                                                                        lineHeight: {
                                                                            sm: "32px",
                                                                            xs: "22px"
                                                                        },
                                                                        color: "#05004E"
                                                                    },
                                                                    children: "Speeches Writing"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    sx: {
                                                                        height: {
                                                                            xs: "25px",
                                                                            sm: "29px"
                                                                        },
                                                                        width: {
                                                                            sm: "29px",
                                                                            xs: "23px"
                                                                        },
                                                                        borderRadius: "8px",
                                                                        border: "2px solid #1C274C",
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PermIdentity$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 558,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                padding: "20px 12px 0px 12px",
                                                                fontSize: {
                                                                    sm: "16px",
                                                                    xs: "14px"
                                                                },
                                                                fontFamily: "Poppins",
                                                                fontWeight: "400",
                                                                lineHeight: {
                                                                    sm: "23px",
                                                                    xs: "20px"
                                                                },
                                                                color: "#444444"
                                                            },
                                                            children: "AI-powered tool that uses natural language processing algorithms to generate high-quality questions for any given topic or document."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                xs: 10,
                                                sm: 12,
                                                sx: {
                                                    marginTop: "10px",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        backgroundColor: "#fff",
                                                        padding: {
                                                            sm: "20px",
                                                            xs: "15px"
                                                        },
                                                        width: {
                                                            xs: "95%",
                                                            sm: "100%"
                                                        },
                                                        borderRadius: "20px",
                                                        border: "1px solid #F8F9FA"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                alignItems: "center",
                                                                borderBottom: "1px solid #D4E1E9",
                                                                paddingBottom: "20px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                    sx: {
                                                                        fontSize: {
                                                                            xs: "16px",
                                                                            sm: "18px"
                                                                        },
                                                                        fontFamily: "Poppins",
                                                                        fontWeight: "600",
                                                                        lineHeight: {
                                                                            sm: "32px",
                                                                            xs: "22px"
                                                                        },
                                                                        color: "#05004E"
                                                                    },
                                                                    children: "Summarize Text"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 570,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    sx: {
                                                                        height: {
                                                                            xs: "25px",
                                                                            sm: "29px"
                                                                        },
                                                                        width: {
                                                                            sm: "29px",
                                                                            xs: "23px"
                                                                        },
                                                                        borderRadius: "8px",
                                                                        border: "2px solid #1C274C",
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FileCopy$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                        lineNumber: 574,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                padding: "20px 12px 0px 12px",
                                                                fontSize: {
                                                                    sm: "16px",
                                                                    xs: "14px"
                                                                },
                                                                fontFamily: "Poppins",
                                                                fontWeight: "400",
                                                                lineHeight: {
                                                                    sm: "23px",
                                                                    xs: "20px"
                                                                },
                                                                color: "#444444"
                                                            },
                                                            children: "AI-powered tool that uses natural language processing algorithms to generate high-quality questions for any given topic or document."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/dashboard/index.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/dashboard/index.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/dashboard/index.tsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/dashboard/index.tsx",
                                lineNumber: 517,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/dashboard/index.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/dashboard/index.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/dashboard/index.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(Dashboard, "f8TRFtvq7zDmPCxST7DkpTmlSPY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
const __TURBOPACK__default__export__ = Dashboard;
var _c;
__turbopack_refresh__.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/dashboard/index.tsx [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const PAGE_PATH = "/dashboard";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/dashboard/index.tsx [client] (ecmascript)");
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
"[project]/src/pages/dashboard/index.tsx (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_require__("[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/dashboard/index.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__81d204._.js.map