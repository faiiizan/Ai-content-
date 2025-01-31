(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__080bf8._.js", {

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
"[project]/src/pages/dashboard/assistant/index.tsx [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// "use Client"
// import { Box, Button, Container, Drawer, Grid, IconButton, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import logoImage from '../../../app/Assets/Imges/logo.svg'
// import Image from 'next/image'
// import Hero from '../../../pages/dashboard.module.css'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import dashboardman from '../../../app/Assets/Imges/dasboardman.png'
// import { Menu as MenuIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import image1 from '../../../app/Assets/Imges/Ellipse 1 (1).png'
// import image2 from '../../../app/Assets/Imges/Ellipse 1 (2).png'
// import image3 from '../../../app/Assets/Imges/Ellipse 1 (3).png'
// import image4 from '../../../app/Assets/Imges/Ellipse 1 (4).png'
// import image5 from '../../../app/Assets/Imges/Ellipse 1 (5).png'
// import image6 from '../../../app/Assets/Imges/Ellipse 1 (6).png'
// import image7 from '../../../app/Assets/Imges/Ellipse 1 (7).png'
// import image8 from '../../../app/Assets/Imges/Ellipse 1 (8).png'
// import image9 from '../../../app/Assets/Imges/Ellipse 1 (9).png'
// import image10 from '../../../app/Assets/Imges/Ellipse 1 (10).png'
// import image11 from '../../../app/Assets/Imges/Ellipse 1 (11).png'
// import image12 from '../../../app/Assets/Imges/Ellipse 1 (11).png'
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }
// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }
// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }
// const Templates = () => {
//   const [value, setValue] = React.useState(0);
//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//       setValue(newValue);
//     };
//   const [open, setOpen] = useState(false); // State to control drawer visibility
//   // Function to toggle the drawer open/close
//   const toggleDrawer = () => {
//     setOpen(prevState => !prevState);
//   };
//   const router = useRouter();
//   const getLinkStyle = (path:string) => {
//     return router.pathname === path
//       ? { color:"red"} // active style
//       : {};
//   };
//   const menuItems = (
//       <Box sx={{ width: {xs:250,sm:"500px"}, padding: {xs:"60px 10px",sm:"60px 30px"} }}>
//         {/* Credits Section */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: {xs:"4px solid #4AB58E",sm:"8px solid #4AB58E"}, borderRadius: {xs:"2px",sm:"4px"}, marginBottom: "40px" }}>
//           <Typography sx={{ fontFamily: "Poppins", fontSize: {xs:"15px",sm:"18px"}, lineHeight: "22.5px", fontWeight: {xs:"400",sm:"700"}}}>Credits</Typography>
//           <Typography sx={{ fontFamily: "Poppins", fontSize: {xs:"15px",sm:"18px"}, lineHeight: "22.5px", fontWeight: {xs:"400",sm:"700"}}}>5000 words left</Typography>
//         </Box>
//         {/* Dashboard Section */}
//         <Box sx={{ height: "100px", width: {xs:"100%",sm:"90%"}, border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: {sm:"30px",xs:"none"}, padding: {xs:"0px 0px 30px 10px",sm:"30px 0px 50px 30px"}, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative",borderBottom:{xs:"1px solid #0000001A"} }}>
//           <ul style={{padding:"0px",margin:"0px"}}>
//           <li style={{textDecoration:"none",listStyle:"none"}}> <Typography  sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize:  {xs:"16px",sm:"22px"}, lineHeight:{xs:"20px",sm:"27px"}, fontWeight:{xs: "400",sm:"700"}, color: "#737791" }}>  
//              <DashboardIcon sx={{ marginRight: "20px" }} /> Dashboard</Typography> 
//              </li> 
//          <li style={{textDecoration:"none",listStyle:"none"}}>
//           <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize:  {xs:"16px",sm:"22px"}, lineHeight:{xs:"20px",sm:"27px"}, fontWeight: {xs: "400",sm:"700"}, color: "#737791", paddingTop: "20px" }}>
//             <DashboardIcon sx={{ marginRight: "20px" }} /> Templates
//           </Typography>
//           </li> 
//           <li style={{textDecoration:"none",listStyle:"none"}}>
//           <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: {xs:"20px",sm:"27px"}, fontWeight:{xs: "400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Assistant
//           </Typography>
//           </li>
//           </ul>
//         </Box>
//         {/* Workflows Section */}
//         <Box sx={{ minHeight: "100px", width: {xs:"100%",sm:"90%"}, border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: {sm:"30px",xs:"none"}, padding: {xs:"0px 0px 30px 10px",sm:"30px 0px 50px 30px"}, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "40px",borderBottom:{xs:"1px solid #0000001A"} }}>
//           <ul style={{padding:"0px",margin:"0px"}}>
//         <Typography  sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791"}}>
//         <DashboardIcon sx={{ marginRight: "20px" }} />  Workflows
//         </Typography>
//           <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px" }}>
//             <DashboardIcon sx={{ marginRight: "20px" }} /> Data Analyst
//           </Typography>
//           <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize:{xs:"16px",sm:"22px"} , lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Article Generator
//           </Typography>
//           <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Image Generator
//           </Typography>
//           <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Content Rewriter
//           </Typography>
//           <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Documents
//           </Typography>
//           </ul>
//         </Box>
//         {/* Account Section */}
//         <Box sx={{ minHeight: "100px", width: {xs:"100%",sm:"90%"}, border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: "30px", padding: {xs:"0px 0px 30px 10px",sm:"30px 0px 50px 30px"}, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "40px" }}>
//           <ul style={{padding:"0px",margin:"0px"}}>
//            <li style={{listStyle:"none"}}> <Typography  sx={{  display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791" }}>
//             <DashboardIcon sx={{ marginRight: "20px" }} /> Account
//            </Typography> </li>
//           <li  style={{listStyle:"none"}} >
//             <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight:  {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px" }}>
//             <DashboardIcon sx={{ marginRight: "20px" }} /> My History
//           </Typography>
//           </li>
//           <li style={{listStyle:"none"}}>
//             <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight:  {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Usage History
//           </Typography>
//           </li>
//           <li style={{listStyle:"none"}}>
//             <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize:{xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight:  {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Image Generator
//           </Typography>
//           </li>
//           <li style={{listStyle:"none"}}>
//             <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Plans and Billing
//           </Typography>
//           </li>
//           <li style={{listStyle:"none"}}>
//             <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight:{xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
//             <DashboardIcon sx={{ paddingRight: "20px" }} /> Profile Details
//           </Typography>
//           </li>
//           </ul>
//         </Box>
//       </Box>
//     );
//   return (
//     <>
//      <Box>
//        <Container maxWidth='xl'>
//           <Box sx={{height:"100px",width:"100%"}}>
//             <Grid container>
//               <Grid xs={12} sm={2.5} sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//                 {/* hambburger part start */}
//                 <Box>
//             <Grid container>
//                 <Grid item xs={12} sm={12} md={0} sx={{ display: { xs: 'block', md: 'none',sm:"block" } }}>
//                 <IconButton onClick={() => toggleDrawer()}>
//                   <MenuIcon sx={{ color: '#737791', fontSize: '30px' }} />
//                 </IconButton>
//               </Grid>
//             </Grid>
//             <Drawer
//             anchor="left"
//             open={open}
//             onClose={() => toggleDrawer()}
//             sx={{
//               '& .MuiDrawer-paper': {
//                 width: open ? {xs:"280px",sm:'580px'} : '240px', // Customize the width based on the open state
//                 transition: 'width 0.3s', // Smooth transition when resizing
//               },
//             }}
//           >
//             {menuItems} {/* Drawer content */}
//           </Drawer>
//           </Box>
//           {/* hamburger part end */}
//           <Box sx={{display:"flex",justifyContent:"flex-start",marginRight:{md:"50px",xs:"0px"}}}>
//                  <Image src={logoImage} alt='logo image' className={Hero.LogoImage}/>
//                  </Box>
//               </Grid>
//               <Grid xs={0} sm={8.5} sx={{display:{xs:"none",md:"flex"},justifyContent:"flex-start",alignItems:"center"}}>
//                 <Box sx={{display:"flex"}} >
//                   <Typography sx={{fontSize:"30px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"42px",color:"#151D48",paddingRight:"60px"}}>
//                     Dashboard
//                   </Typography>
//                   <Box>
//                   <input type="text" style={{padding:"10px 0px",borderRadius:"16px",backgroundColor:"#F9FAFB",border:"none",outline:"none",fontFamily:"Poppins",fontSize:"14px",fontWeight:"400",lineHeight:"27px",paddingLeft:"30px"}} placeholder='What do you want to write?...'  />
//                   </Box>
//                   <Box sx={{paddingLeft:"15px",paddingTop:"10px"}}>
//                     <Typography sx={{paddingLeft:"20px",display:"flex",justifyContent:"center",alignItems:"center",color:"#374557",fontSize:"18px",fontWeight:"600",lineHeight:"27px",fontFamily:"Poppins",cursor:"pointer"}}>
//                       Mode <KeyboardArrowDownIcon/>
//                     </Typography>
//                   </Box>
//                   <Box sx={{paddingLeft:"15px",paddingTop:"10px"}}>
//                     <Typography sx={{paddingLeft:"10px",display:"flex",justifyContent:"center",alignItems:"center",color:"#374557",fontSize:"18px",fontWeight:"600",lineHeight:"27px",fontFamily:"Poppins",cursor:"pointer"}}>
//                       Chat
//                     </Typography>
//                   </Box>
//                   <Box sx={{padding:"0px 25px",width:"150px"}}>
//                     <Button variant='contained' sx={{width:"100%",fontSize:"14px",fontWeight:"600",fontFamily:"Poppins",textTransform:"capitalize",padding:"12px",boxShadow:"none",backgroundColor:"#D7F200",color:"#000000",borderRadius:"12px"}}>
//                       create content
//                     </Button>
//                   </Box>
//                   <Box sx={{height:"48px",width:"48px",backgroundColor:"#FFFAF1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",color:"#FFA412",cursor:"pointer",marginLeft:"5px"}}>
//                     <NotificationsIcon/>
//                   </Box>
//                   <Box sx={{paddingLeft:"20px",display:"flex"}}>
//                     <Image src={dashboardman} alt='dashboardman' style={{width:"60px",height:"60px"}}/>
//                     <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"space-between",flexDirection:"column",height:"60px"}}>
//                     <Typography sx={{paddingLeft:"5px",fontSize:"16px",fontFamily:"Poppins",color:"#151D48",lineHeight:"24px",fontWeight:"500"}}>
//                       surya 
//                     </Typography>
//                     <Typography sx={{paddingLeft:"12px",fontSize:"14px",color:"#737791",lineHeight:"20px",fontWeight:"400",fontFamily:"Poppins",paddingTop:"10px",display:"flex",alignItems:"center"}}>
//                     Admin  <KeyboardArrowDownIcon sx={{color:"#151D48"}}/>
//                     </Typography>
//                     </Box>
//                   </Box>
//                 </Box>
//               </Grid>
//              </Grid>
//           </Box>
//           {/* top header completed */}
//           {/* body part started */}
//           <Box sx={{paddingTop:"15px"}}>
//             <Grid container>
//             <Grid xs={12} md={2.5} sx={{padding:"20px",display:{xs:"none",md:"block",sm:"none"}}}>
//                 <Box sx={{display:{sm:"flex"},justifyContent:"space-between",borderBottom:"4px solid #4AB58E",borderRadius:"2px",marginBottom:"40px"}}>
//                   <Typography sx={{fontFamily:"Poppins",fontSize:"15px",lineHeight:"22.5px",fontWeight:"400"}}>
//                   Credits
//                   </Typography>
//                   <Typography sx={{fontFamily:"Poppins",fontSize:"15px",lineHeight:"22.5px",fontWeight:"400"}}>
//                   5000 words left
//                   </Typography>
//                 </Box>
//                 {/* start dashboard part */}
//                 <Box sx={{height:"100px",width:"90%",border:'1px solid #0000001A',borderRadius:"30px",padding:"25px 0px 40px 20px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",position:"relative"}}>
//                     <ul style={{margin:"0px",padding:"0px"}}>
//                       <li style={{listStyle:"none"}}>
//                         <Link href='/dashboard' passHref style={{textDecoration:"none"}}>
//                          <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",...getLinkStyle('/dashboard')}}>
//                          <DashboardIcon sx={{marginRight:"20px"}}/>Dashoard
//                         </Typography>
//                         </Link>
//                         </li>
//                     <li style={{listStyle:"none"}}>
//                     <Link href='/dashboard/templates' style={{textDecoration:"none"}}> <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px"}}>
//                        <DashboardIcon sx={{marginRight:"20px"}}/>   Templates
//                     </Typography></Link> 
//                     </li>
//                      <li style={{listStyle:"none"}}>
//                       <Link href='/dashboard/assistant' style={{textDecoration:"none"}}>
//                     <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Assistant
//                     </Typography>
//                     </Link>
//                     </li>
//                     </ul>
//                 </Box>
//                 {/* end dashboard part */}
//                 {/* start workflows */}
//                 <Box sx={{minHeight:"100px",width:"90%",border:'1px solid #0000001A',borderRadius:"30px",padding:"50px 0px 20px 20px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",position:"relative",marginTop:"40px"}}>
//                   <ul style={{margin:"0px",padding:"0px"}}>
//                     <li style={{listStyle:"none"}}>
//                       <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
//                        <DashboardIcon sx={{marginRight:"20px"}}/>   Data Analyst
//                     </Typography>
//                     </li>
//                    <li style={{listStyle:"none"}}>
//                     <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Article Generator
//                     </Typography>
//                     </li>
//                     <li style={{listStyle:"none"}}>
//                       <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Image Generator
//                     </Typography>
//                     </li>
//                      <li style={{listStyle:"none"}}> 
//                       <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Content Rewriter
//                     </Typography> 
//                     </li>
//                     <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Documents
//                     </Typography>
//                     </ul>
//                     <Box sx={{position:"absolute",top:"-16px",left:"35px",}}>
//                          <Typography  sx={{background:"#D7F200",borderRadius:"16px",color:"#000",padding:"8px 35px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Workflows</Typography>
//                     </Box>
//                 </Box>
//                 {/* end wokflows */}
//                 {/* start account parts */}
//                 <Box sx={{minHeight:"100px",width:"100%",border:'1px solid #0000001A',borderRadius:"30px",padding:"50px 0px 20px 0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",marginTop:"40px"}}>
//                   <ul style={{margin:"0px",padding:"0px"}}>
//                     <li style={{listStyle:"none"}}>
//                     <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
//                        <DashboardIcon sx={{marginRight:"20px"}}/>   My History
//                     </Typography>
//                     </li>
//                     <li style={{listStyle:"none"}}>
//                       <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Usage History
//                     </Typography>
//                     </li>
//                     <li style={{listStyle:"none"}}>
//                     <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Image Generator
//                     </Typography>
//                     </li>
//                     <li style={{listStyle:"none"}}>
//                       <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Plans and Billing
//                     </Typography>
//                     </li>
//                     <li style={{listStyle:"none"}}>
//                       <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
//                        <DashboardIcon sx={{paddingRight:"20px"}}/>   Profile Details
//                     </Typography>
//                     </li>
//                     </ul>
//                     <Box sx={{position:"absolute",top:"-16px",left:"40px",}}>
//                          <Typography  sx={{background:"#D7F200",borderRadius:"16px",color:"#000",padding:"8px 35px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Accounts</Typography>
//                     </Box>
//                 </Box>
//               </Grid>
//                <Grid container xs={12} sm={12} md={9.5} sx={{backgroundColor:"#F8F9FA",padding:{xs:"20px",sm:"20px 15px 20px 20px"}}}>
//                   <Box sx={{padding:"60px 20px",backgroundColor:"#fff",width:"100%",borderRadius:"27px 27px 69px 69px"}}>
//                        <Typography sx={{textAlign:"center",fontFamily:"Quicksand",fontSize:"45px",fontWeight:"600",lineHeight:"56.63px",color:"#000000"}}>
//                        How can I help you today?
//                        </Typography>
//                        <Typography sx={{paddingTop:"12px",textAlign:"center",fontFamily:"Quicksand",fontWeight:"400",fontSize:"20px",lineHeight:"25px"}}>
//                        Please select an assistant or enter your message in the input box below.
//                        </Typography>
//                   </Box>
//                </Grid>
//             </Grid>
//           </Box>
//        </Container>
//        </Box>
//     </>
//   )
// }
// export default Templates
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/dashboard/assistant/index.tsx [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const PAGE_PATH = "/dashboard/assistant";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/dashboard/assistant/index.tsx [client] (ecmascript)");
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
"[project]/src/pages/dashboard/assistant/index.tsx (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_require__("[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/dashboard/assistant/index.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__080bf8._.js.map