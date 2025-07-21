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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _compoments_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compoments/createEmotionCache */ \"./compoments/createEmotionCache.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__, _compoments_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__, _compoments_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/_document.js\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: this.props.emotionStyleTags\n                }, void 0, false, {\n                    fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"noscript\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: \"https://www.googletagmanager.com/ns.html?id=GTM-W3DQ8NWR\",\n                                height: \"0\",\n                                width: \"0\",\n                                style: {\n                                    display: \"none\",\n                                    visibility: \"hidden\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this);\n    }\n}\n// Extract critical CSS on the server\nMyDocument.getInitialProps = async (ctx)=>{\n    const originalRenderPage = ctx.renderPage;\n    const cache = (0,_compoments_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cache);\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        emotionCache: cache,\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n                        lineNumber: 39,\n                        columnNumber: 39\n                    }, undefined)\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n            \"data-emotion\": `${style.key} ${style.ids.join(\" \")}`,\n            dangerouslySetInnerHTML: {\n                __html: style.css\n            }\n        }, style.key, false, {\n            fileName: \"C:\\\\kimsproject\\\\kage\\\\pages\\\\_document.js\",\n            lineNumber: 46,\n            columnNumber: 5\n        }, undefined));\n    return {\n        ...initialProps,\n        emotionStyleTags\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCOztBQUNrRDtBQUNMO0FBQ0E7QUFDbkM7QUFFaEIsTUFBTVEsbUJBQW1CUixzREFBUUE7SUFDOUNTLFNBQVM7UUFDUCxxQkFDRSw4REFBQ1IsK0NBQUlBO1lBQUNTLE1BQUs7OzhCQUNULDhEQUFDUiwrQ0FBSUE7OEJBQUUsSUFBSSxDQUFDUyxLQUFLLENBQUNDLGdCQUFnQjs7Ozs7OzhCQUNsQyw4REFBQ0M7O3NDQUNELDhEQUFDQztzQ0FDRyw0RUFBQ0M7Z0NBQ0NDLEtBQUk7Z0NBQ0pDLFFBQU87Z0NBQ1BDLE9BQU07Z0NBQ05DLE9BQU87b0NBQUVDLFNBQVM7b0NBQVFDLFlBQVk7Z0NBQVM7Ozs7Ozs7Ozs7O3NDQUluRCw4REFBQ2xCLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRjtBQUVBLHFDQUFxQztBQUNyQ0ksV0FBV2MsZUFBZSxHQUFHLE9BQU9DO0lBQ2xDLE1BQU1DLHFCQUFxQkQsSUFBSUUsVUFBVTtJQUV6QyxNQUFNQyxRQUFRcEIsMEVBQWtCQTtJQUNoQyxNQUFNLEVBQUVxQix1QkFBdUIsRUFBRSxHQUFHdEIsMkVBQW1CQSxDQUFDcUI7SUFFeERILElBQUlFLFVBQVUsR0FBRyxJQUNmRCxtQkFBbUI7WUFDakJJLFlBQVksQ0FBQ0MsTUFBUSxDQUFDbEIsc0JBQVUsOERBQUNrQjt3QkFBSUMsY0FBY0o7d0JBQVEsR0FBR2YsS0FBSzs7Ozs7O1FBQ3JFO0lBRUYsTUFBTW9CLGVBQWUsTUFBTS9CLG9FQUF3QixDQUFDdUI7SUFFcEQsTUFBTVMsZ0JBQWdCTCx3QkFBd0JJLGFBQWFFLElBQUk7SUFDL0QsTUFBTXJCLG1CQUFtQm9CLGNBQWNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNoQixzQkFDakQsOERBQUNBO1lBQ0NpQixnQkFBYyxDQUFDLEVBQUVqQixNQUFNa0IsR0FBRyxDQUFDLENBQUMsRUFBRWxCLE1BQU1tQixHQUFHLENBQUNDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFbkRDLHlCQUF5QjtnQkFBRUMsUUFBUXRCLE1BQU11QixHQUFHO1lBQUM7V0FEeEN2QixNQUFNa0IsR0FBRzs7Ozs7SUFLbEIsT0FBTztRQUNMLEdBQUdOLFlBQVk7UUFDZm5CO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2tpbXMvLi9wYWdlcy9fZG9jdW1lbnQuanM/NTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fZG9jdW1lbnQuanNcbmltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gXCJAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlXCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gXCIuLi9jb21wb21lbnRzL2NyZWF0ZUVtb3Rpb25DYWNoZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPnt0aGlzLnByb3BzLmVtb3Rpb25TdHlsZVRhZ3N9PC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sP2lkPUdUTS1XM0RROE5XUlwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjBcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH19XG4gICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgPC9ub3NjcmlwdD5cblxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgICk7XG4gIH1cbn1cblxuLy8gRXh0cmFjdCBjcml0aWNhbCBDU1Mgb24gdGhlIHNlcnZlclxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuXG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG4gIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gKHByb3BzKSA9PiA8QXBwIGVtb3Rpb25DYWNoZT17Y2FjaGV9IHsuLi5wcm9wc30gLz4sXG4gICAgfSk7XG5cbiAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG5cbiAgY29uc3QgZW1vdGlvblN0eWxlcyA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGluaXRpYWxQcm9wcy5odG1sKTtcbiAgY29uc3QgZW1vdGlvblN0eWxlVGFncyA9IGVtb3Rpb25TdHlsZXMuc3R5bGVzLm1hcCgoc3R5bGUpID0+IChcbiAgICA8c3R5bGVcbiAgICAgIGRhdGEtZW1vdGlvbj17YCR7c3R5bGUua2V5fSAke3N0eWxlLmlkcy5qb2luKFwiIFwiKX1gfVxuICAgICAga2V5PXtzdHlsZS5rZXl9XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlLmNzcyB9fVxuICAgIC8+XG4gICkpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uaW5pdGlhbFByb3BzLFxuICAgIGVtb3Rpb25TdHlsZVRhZ3MsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImNyZWF0ZUVtb3Rpb25TZXJ2ZXIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJSZWFjdCIsIk15RG9jdW1lbnQiLCJyZW5kZXIiLCJsYW5nIiwicHJvcHMiLCJlbW90aW9uU3R5bGVUYWdzIiwiYm9keSIsIm5vc2NyaXB0IiwiaWZyYW1lIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZSIsImRpc3BsYXkiLCJ2aXNpYmlsaXR5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImNhY2hlIiwiZXh0cmFjdENyaXRpY2FsVG9DaHVua3MiLCJlbmhhbmNlQXBwIiwiQXBwIiwiZW1vdGlvbkNhY2hlIiwiaW5pdGlhbFByb3BzIiwiZW1vdGlvblN0eWxlcyIsImh0bWwiLCJzdHlsZXMiLCJtYXAiLCJkYXRhLWVtb3Rpb24iLCJrZXkiLCJpZHMiLCJqb2luIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

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