"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./compoments/createEmotionCache.js":
/*!******************************************!*\
  !*** ./compoments/createEmotionCache.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// utils/createEmotionCache.js\n\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: \"css\",\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb21lbnRzL2NyZWF0ZUVtb3Rpb25DYWNoZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhCQUE4QjtBQUNXO0FBRTFCLFNBQVNDO0lBQ3RCLE9BQU9ELDBEQUFXQSxDQUFDO1FBQUVFLEtBQUs7UUFBT0MsU0FBUztJQUFLO0FBQ2pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2ltcy8uL2NvbXBvbWVudHMvY3JlYXRlRW1vdGlvbkNhY2hlLmpzPzNiZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlLmpzXHJcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJywgcHJlcGVuZDogdHJ1ZSB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./compoments/createEmotionCache.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _compoments_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compoments/createEmotionCache */ \"./compoments/createEmotionCache.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__, _compoments_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__, _compoments_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/_document.js\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: this.props.emotionStyleTags\n                }, void 0, false, {\n                    fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this);\n    }\n}\n// Extract critical CSS on the server\nMyDocument.getInitialProps = async (ctx)=>{\n    const originalRenderPage = ctx.renderPage;\n    const cache = (0,_compoments_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cache);\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        emotionCache: cache,\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                        lineNumber: 32,\n                        columnNumber: 39\n                    }, undefined)\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n            \"data-emotion\": `${style.key} ${style.ids.join(\" \")}`,\n            dangerouslySetInnerHTML: {\n                __html: style.css\n            }\n        }, style.key, false, {\n            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n            lineNumber: 39,\n            columnNumber: 5\n        }, undefined));\n    return {\n        ...initialProps,\n        emotionStyleTags\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCOztBQUNrRDtBQUNMO0FBQ0E7QUFDbkM7QUFFaEIsTUFBTVEsbUJBQW1CUixzREFBUUE7SUFDOUNTLFNBQVM7UUFDUCxxQkFDRSw4REFBQ1IsK0NBQUlBO1lBQUNTLE1BQUs7OzhCQUNULDhEQUFDUiwrQ0FBSUE7OEJBQ0YsSUFBSSxDQUFDUyxLQUFLLENBQUNDLGdCQUFnQjs7Ozs7OzhCQUU5Qiw4REFBQ0M7O3NDQUNDLDhEQUFDViwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQSxxQ0FBcUM7QUFDckNJLFdBQVdNLGVBQWUsR0FBRyxPQUFPQztJQUNsQyxNQUFNQyxxQkFBcUJELElBQUlFLFVBQVU7SUFFekMsTUFBTUMsUUFBUVosMEVBQWtCQTtJQUNoQyxNQUFNLEVBQUVhLHVCQUF1QixFQUFFLEdBQUdkLDJFQUFtQkEsQ0FBQ2E7SUFFeERILElBQUlFLFVBQVUsR0FBRyxJQUNmRCxtQkFBbUI7WUFDakJJLFlBQVksQ0FBQ0MsTUFBUSxDQUFDVixzQkFBVSw4REFBQ1U7d0JBQUlDLGNBQWNKO3dCQUFRLEdBQUdQLEtBQUs7Ozs7OztRQUNyRTtJQUVGLE1BQU1ZLGVBQWUsTUFBTXZCLG9FQUF3QixDQUFDZTtJQUVwRCxNQUFNUyxnQkFBZ0JMLHdCQUF3QkksYUFBYUUsSUFBSTtJQUMvRCxNQUFNYixtQkFBbUJZLGNBQWNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHNCQUNqRCw4REFBQ0E7WUFDQ0MsZ0JBQWMsQ0FBQyxFQUFFRCxNQUFNRSxHQUFHLENBQUMsQ0FBQyxFQUFFRixNQUFNRyxHQUFHLENBQUNDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFbkRDLHlCQUF5QjtnQkFBRUMsUUFBUU4sTUFBTU8sR0FBRztZQUFDO1dBRHhDUCxNQUFNRSxHQUFHOzs7OztJQUtsQixPQUFPO1FBQ0wsR0FBR1AsWUFBWTtRQUNmWDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raW1zLy4vcGFnZXMvX2RvY3VtZW50LmpzPzUzOGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2RvY3VtZW50LmpzXG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSAnQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZSc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4uL2NvbXBvbWVudHMvY3JlYXRlRW1vdGlvbkNhY2hlJzsgXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmVtb3Rpb25TdHlsZVRhZ3N9XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBFeHRyYWN0IGNyaXRpY2FsIENTUyBvbiB0aGUgc2VydmVyXG5NeURvY3VtZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG5cbiAgY29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcbiAgY29uc3QgeyBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyB9ID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cbiAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+IDxBcHAgZW1vdGlvbkNhY2hlPXtjYWNoZX0gey4uLnByb3BzfSAvPixcbiAgICB9KTtcblxuICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcblxuICBjb25zdCBlbW90aW9uU3R5bGVzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaW5pdGlhbFByb3BzLmh0bWwpO1xuICBjb25zdCBlbW90aW9uU3R5bGVUYWdzID0gZW1vdGlvblN0eWxlcy5zdHlsZXMubWFwKChzdHlsZSkgPT4gKFxuICAgIDxzdHlsZVxuICAgICAgZGF0YS1lbW90aW9uPXtgJHtzdHlsZS5rZXl9ICR7c3R5bGUuaWRzLmpvaW4oJyAnKX1gfVxuICAgICAga2V5PXtzdHlsZS5rZXl9XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlLmNzcyB9fVxuICAgIC8+XG4gICkpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uaW5pdGlhbFByb3BzLFxuICAgIGVtb3Rpb25TdHlsZVRhZ3MsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImNyZWF0ZUVtb3Rpb25TZXJ2ZXIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJSZWFjdCIsIk15RG9jdW1lbnQiLCJyZW5kZXIiLCJsYW5nIiwicHJvcHMiLCJlbW90aW9uU3R5bGVUYWdzIiwiYm9keSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJjYWNoZSIsImV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVtb3Rpb25DYWNoZSIsImluaXRpYWxQcm9wcyIsImVtb3Rpb25TdHlsZXMiLCJodG1sIiwic3R5bGVzIiwibWFwIiwic3R5bGUiLCJkYXRhLWVtb3Rpb24iLCJrZXkiLCJpZHMiLCJqb2luIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();