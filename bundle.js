/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! leyre-unsplash.jpg */ "./src/leyre-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! hellosign.jpg */ "./src/hellosign.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#container {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) ;
}

#header {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    color: white;
    padding-top: 20px;

    display: flex;
    flex-direction: row;
    /* buttons seem to ignore justify-content */
    justify-content: center;
    justify-items: center;
    
}

.tab {
    padding: 20px;
    border: solid hotpink 3px;
    border-bottom: none;
    background-color: lightgray;
    margin-left: auto;
    margin-right: auto;

    font-weight: bold;
}

.tab:hover {
    cursor: pointer;
    background-color: cyan;
    border: solid lightblue;
    border-bottom: none;
}

p, h1 {
    color: white;
}

#content {
    color: white;
    display: flex;
    justify-content: center;
}

/* Tab1 styling */
#tabContainer {
    display: grid;
    width: 75%;
    margin-top: 30px;
    margin-bottom: 20px;
    /* background-color: black; */

    justify-items: center;
}

#subheader {
    grid-column-start: 1;
    grid-column-end: -1;
}

.introContain , .beverageContain, .foodContain {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 15px;

    align-items: center;
    column-gap: 25px;
    row-gap: 50px;

    background-color: black;
    border-radius: 100px;
    border-end-end-radius: 10px;
    border-top-right-radius: 10px;

    border-style: solid;
    border-width: 15px;
    border-right-color: hsl(240, 100%, 22%);
    border-left-color: hsl(240, 100%, 33%);
    border-top-color:hsl(240, 100%, 27%);
    border-bottom-color: hsl(240, 100%, 27%);
    /* border-style: double; */
    /* border-left-style: dashed; */
}

#introContainFirst {
    padding-right: 40px;
}

.headerContain, .subheaderContain {
    background-color: black;
    border-radius: 100px;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;

    border-style: solid;
    border-width: 15px;
    border-color: darkblue;

    border-radius: 100px;
    border-end-end-radius: 10px;
    border-top-right-radius: 10px;
}

h2 > h5 {
    text-align: center;
    margin-top: 10px;
}

#footer {
    display: flex;
    justify-content: space-around;
    background-color: darkblue;
    padding: 10px;
}

#footer a:visited {
    color: hotpink;
}

#footer a:link {
    color: lightgray;
}

/* Menu Styling */ 
.subheaderContain {
    margin-top: 40px;
}

h3 > h5 {
    text-align: center;
    margin-top: 10px;
}

h3 > h4 {
    text-align: end;
    margin-top: 10px;
    margin-right: 30px;
}

.subheaderContain, .headerContain{
    border-color: blue;
}

#contactHead1 {
    margin-bottom: 20px;
}

#contactHead2 {
    margin-top: 20px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0DAA0C;AAC9C;;AAEA;IACI,yDAAoC;IACpC,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;IACnB,2CAA2C;IAC3C,uBAAuB;IACvB,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,2BAA2B;IAC3B,iBAAiB;IACjB,kBAAkB;;IAElB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;;IAE7B,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;;IAEZ,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;;IAEb,uBAAuB;IACvB,oBAAoB;IACpB,2BAA2B;IAC3B,6BAA6B;;IAE7B,mBAAmB;IACnB,kBAAkB;IAClB,uCAAuC;IACvC,sCAAsC;IACtC,oCAAoC;IACpC,wCAAwC;IACxC,0BAA0B;IAC1B,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;;IAEnB,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;;IAEtB,oBAAoB;IACpB,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,0BAA0B;IAC1B,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA,iBAAiB;AACjB;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["#container {\n    background-image: url(leyre-unsplash.jpg) ;\n}\n\n#header {\n    background-image: url(hellosign.jpg);\n    background-size: contain;\n    color: white;\n    padding-top: 20px;\n\n    display: flex;\n    flex-direction: row;\n    /* buttons seem to ignore justify-content */\n    justify-content: center;\n    justify-items: center;\n    \n}\n\n.tab {\n    padding: 20px;\n    border: solid hotpink 3px;\n    border-bottom: none;\n    background-color: lightgray;\n    margin-left: auto;\n    margin-right: auto;\n\n    font-weight: bold;\n}\n\n.tab:hover {\n    cursor: pointer;\n    background-color: cyan;\n    border: solid lightblue;\n    border-bottom: none;\n}\n\np, h1 {\n    color: white;\n}\n\n#content {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n/* Tab1 styling */\n#tabContainer {\n    display: grid;\n    width: 75%;\n    margin-top: 30px;\n    margin-bottom: 20px;\n    /* background-color: black; */\n\n    justify-items: center;\n}\n\n#subheader {\n    grid-column-start: 1;\n    grid-column-end: -1;\n}\n\n.introContain , .beverageContain, .foodContain {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    margin: 15px;\n\n    align-items: center;\n    column-gap: 25px;\n    row-gap: 50px;\n\n    background-color: black;\n    border-radius: 100px;\n    border-end-end-radius: 10px;\n    border-top-right-radius: 10px;\n\n    border-style: solid;\n    border-width: 15px;\n    border-right-color: hsl(240, 100%, 22%);\n    border-left-color: hsl(240, 100%, 33%);\n    border-top-color:hsl(240, 100%, 27%);\n    border-bottom-color: hsl(240, 100%, 27%);\n    /* border-style: double; */\n    /* border-left-style: dashed; */\n}\n\n#introContainFirst {\n    padding-right: 40px;\n}\n\n.headerContain, .subheaderContain {\n    background-color: black;\n    border-radius: 100px;\n    padding: 20px;\n    padding-left: 50px;\n    padding-right: 50px;\n\n    border-style: solid;\n    border-width: 15px;\n    border-color: darkblue;\n\n    border-radius: 100px;\n    border-end-end-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\nh2 > h5 {\n    text-align: center;\n    margin-top: 10px;\n}\n\n#footer {\n    display: flex;\n    justify-content: space-around;\n    background-color: darkblue;\n    padding: 10px;\n}\n\n#footer a:visited {\n    color: hotpink;\n}\n\n#footer a:link {\n    color: lightgray;\n}\n\n/* Menu Styling */ \n.subheaderContain {\n    margin-top: 40px;\n}\n\nh3 > h5 {\n    text-align: center;\n    margin-top: 10px;\n}\n\nh3 > h4 {\n    text-align: end;\n    margin-top: 10px;\n    margin-right: 30px;\n}\n\n.subheaderContain, .headerContain{\n    border-color: blue;\n}\n\n#contactHead1 {\n    margin-bottom: 20px;\n}\n\n#contactHead2 {\n    margin-top: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/tab1.js":
/*!*********************!*\
  !*** ./src/tab1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tab1Function)
/* harmony export */ });
//current Tab tracker variable across all js files
window['currentTab'] = 0;

//Run at start; default page
tab1Function();

function tab1Function() {
  //debugging
  //console.log("I ran tab1Function");

  //replace current tab
  if (currentTab != 0) {
    const parent = document.getElementById("container");

    const afoot = document.getElementById("footer");
    parent.removeChild(afoot);

    const parent2 = document.getElementById("content"); 
    
    const child = document.getElementById("tabContainer");
    parent2.removeChild(child);
  
  }
  //set global variable to current tab
  currentTab = 1;

  //start creating page
  const content = document.getElementById("content");

  //header
  const tabContain = document.createElement('div');
  tabContain.id = 'tabContainer';

  const title = document.createElement('div');
  title.id = "subheader";
  tabContain.append(title);

  const headerContain = document.createElement('div');
  headerContain.className = "headerContain";
  title.append(headerContain);
  
  const titleHeader = document.createElement('h1');
  titleHeader.innerText = 'Lead and Breakfast 2077';
  headerContain.append(titleHeader);

  //intro
  const introContain = document.createElement('div');
  introContain.className = "introContain";
  introContain.id = "introContainFirst";
  tabContain.append(introContain);

  const bullet = document.createElement("img");
  bullet.setAttribute("src", "/src/bullet.png");
  bullet.setAttribute("height", "100px");
  introContain.append(bullet);

  const introBody = document.createElement('h3');
  introBody.innerText = "A hot stop in Night City. This eatery was founded by solos, for solos. \
  Whether you need to wind down from a job or wind up for the next job, we've got you covered. We are the one-stop-shop for all a solo could need.";
  introContain.append(introBody);

  const introBody2 = document.createElement('h2');
  let sometext = "-Some Mercenary";
  introBody2.innerHTML = "&emsp;" + "&emsp;" + "&emsp;" + sometext;
  introBody.append(introBody2);

  //hours
  const introContain2 = document.createElement('div');
  introContain2.className = "introContain";
  tabContain.append(introContain2);

  const bullet2 = document.createElement("img");
  bullet2.setAttribute("src", "/src/bullet.png");
  bullet2.setAttribute("height", "75px");
  introContain2.append(bullet2);
  
  const hoursBody = document.createElement('h2');
  hoursBody.innerHTML = "&emsp;" + "&emsp;" + "Hours";
  introContain2.append(hoursBody);

  const hoursBody2 = document.createElement('h5');
  hoursBody2.innerHTML = "Tuesday-Sunday: 5:00PM - 9:00AM" + "<br />" + "Monday: CLOSED";
  hoursBody.append(hoursBody2);

  //location
  const introContain3 = document.createElement('div');
  introContain3.className = "introContain";
  tabContain.append(introContain3);

  const bullet3 = document.createElement("img");
  bullet3.setAttribute("src", "/src/bullet.png");
  bullet3.setAttribute("height", "75px");
  introContain3.append(bullet3);
  
  const locationBody = document.createElement('h2');
  locationBody.innerHTML = "&emsp;" + "&emsp;" + "Location";
  introContain3.append(locationBody);

  const locationBody2 = document.createElement('h5');
  locationBody2.innerText = "123 27th Street, Night City";
  locationBody.append(locationBody2);

  //footer
  const footer = document.createElement('div');
  footer.id = 'footer';
  container.append(footer);

  const footerBody = document.createElement('p');
  footerBody.innerHTML = "Made by " + "<a href=https://github.com/George-Gabechava>George-Gabechava</a>" + " for The Odin Project";
  footer.append(footerBody);

  const footerBody2 = document.createElement('p');
  footerBody2.innerHTML = "Github " + "<a href=https://github.com/George-Gabechava/TOP-restaurantPage>Source Code</a>";
  footer.append(footerBody2);
    
  content.append(tabContain);
};

/***/ }),

/***/ "./src/tab2.js":
/*!*********************!*\
  !*** ./src/tab2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tab2Function)
/* harmony export */ });
function tab2Function() {
    //debugging console.log
    // console.log("I ran tab2Function");

    //delete current tab if needed
    if (currentTab != 0) {
    const parent = document.getElementById("container");

    const afoot = document.getElementById("footer");
    parent.removeChild(afoot);

    const parent2 = document.getElementById("content"); 

    const child = document.getElementById("tabContainer");
    parent2.removeChild(child);
    }

    //start creating page
    const content = document.getElementById("content");

    const tabContain = document.createElement('div');
    tabContain.id = 'tabContainer';

    //header
    const title = document.createElement('div');
    title.id = "subheader";
    tabContain.append(title);

    const headerContain = document.createElement('div');
    headerContain.className = "headerContain";
    title.append(headerContain);

    const titleHeader = document.createElement('h1');
    titleHeader.innerHTML = "&emsp;"+"&emsp;" + 'Menu' + "&emsp;"+"&emsp;";
    headerContain.append(titleHeader);

    //subheader beverages
    const headerContain2 = document.createElement('div');
    headerContain2.className = "subheaderContain";
    tabContain.append(headerContain2);

    const titleHeader2 = document.createElement('h2');
    titleHeader2.innerText = "Beverages";
    headerContain2.append(titleHeader2);

    //items beverages
    const beverage1 = document.createElement('div');
    beverage1.className = "beverageContain";
    tabContain.append(beverage1);

    const beverageImg1 = document.createElement("img");
    beverageImg1.setAttribute("src", "/src/ab-synth.webp");
    beverageImg1.setAttribute("height", "75px");
    beverage1.append(beverageImg1);
    
    const bevName1 = document.createElement('h3');
    bevName1.innerHTML = "Ab-Synth";
    beverage1.append(bevName1);

    const bevDesc1 = document.createElement('h5');
    bevDesc1.innerText = "Be intense. Be Bohemian."
    bevName1.append(bevDesc1);

    const bevPrice1 = document.createElement('h4');
    bevPrice1.innerHTML = "&euro;"+"&dollar;"+"11";
    bevName1.append(bevPrice1);


    const beverage2 = document.createElement('div');
    beverage2.className = "beverageContain";
    tabContain.append(beverage2);

    const beverageImg2 = document.createElement("img");
    beverageImg2.setAttribute("src", "/src/bro-lager.webp");
    beverageImg2.setAttribute("height", "75px");
    beverage2.append(beverageImg2);
    
    const bevName2 = document.createElement('h3');
    bevName2.innerHTML = "Broseph Lager";
    beverage2.append(bevName2);

    const bevDesc2 = document.createElement('h5');
    bevDesc2.innerText = "Light-coloured & highly carbonated beverage."
    bevName2.append(bevDesc2);

    const bevPrice2 = document.createElement('h4');
    bevPrice2.innerHTML = "&euro;"+"&dollar;"+"9";
    bevName2.append(bevPrice2);

    //subheader food
    const headerContain3 = document.createElement('div');
    headerContain3.className = "subheaderContain";
    tabContain.append(headerContain3);

    const titleHeader3 = document.createElement('h2');
    titleHeader3.innerText = "Breakfasts";
    headerContain3.append(titleHeader3);

    //items food
    const food1 = document.createElement('div');
    food1.className = "foodContain";
    tabContain.append(food1);

    const foodImg1 = document.createElement("img");
    foodImg1.setAttribute("src", "/src/croissant.webp");
    foodImg1.setAttribute("height", "75px");
    food1.append(foodImg1);
    
    const foodName1 = document.createElement('h3');
    foodName1.innerHTML = "Pierre's Croissant";
    food1.append(foodName1);

    const foodDesc1 = document.createElement('h5');
    foodDesc1.innerText = "Flaky synthetic buttery goodness!."
    foodName1.append(foodDesc1);

    const foodPrice1 = document.createElement('h4');
    foodPrice1.innerHTML = "&euro;"+"&dollar;"+"7";
    foodName1.append(foodPrice1);


    const food2 = document.createElement('div');
    food2.className = "foodContain";
    tabContain.append(food2);

    const foodImg2 = document.createElement("img");
    foodImg2.setAttribute("src", "/src/tamale.webp");
    foodImg2.setAttribute("height", "75px");
    food2.append(foodImg2);
    
    const foodName2 = document.createElement('h3');
    foodName2.innerHTML = "Loaded Tamales";
    food2.append(foodName2);

    const foodDesc2 = document.createElement('h5');
    foodDesc2.innerText = "Wrapped in real corn husks!"
    foodName2.append(foodDesc2);

    const foodPrice2 = document.createElement('h4');
    foodPrice2.innerHTML = "&euro;"+"&dollar;"+"9";
    foodName2.append(foodPrice2);

    //Lead
    //subheader food
    const headerContain4 = document.createElement('div');
    headerContain4.className = "subheaderContain";
    tabContain.append(headerContain4);

    const titleHeader4 = document.createElement('h2');
    titleHeader4.innerText = "Lead";
    headerContain4.append(titleHeader4);

    //items
    const introContain4 = document.createElement('div');
    introContain4.className = "introContain";
    tabContain.append(introContain4);

    const bullet4 = document.createElement("img");
    bullet4.setAttribute("src", "/src/bullet.png");
    bullet4.setAttribute("height", "75px");
    introContain4.append(bullet4);
    
    const leadHeader = document.createElement('h2');
    leadHeader.innerHTML = "See Vendor";
    introContain4.append(leadHeader);

    const leadDesc = document.createElement('h5');
    leadDesc.innerText = "Please see the vendor on staff selling merchandise for all your mercenary needs.";
    leadHeader.append(leadDesc);

    //footer
    const footer = document.createElement('div');
    footer.id = 'footer';
    container.append(footer);

    const footerBody = document.createElement('p');
    title.className = "footerbody";
    footerBody.innerHTML = "Made by " + "<a href=https://github.com/George-Gabechava>George-Gabechava</a>" + " for The Odin Project";
    footer.append(footerBody);

    const footerBody2 = document.createElement('p');
    title.className = "footerbody";
    footerBody2.innerHTML = "Github " + "<a href=https://github.com/George-Gabechava/TOP-restaurantPage>Source Code</a>";

    //append this file to website
    footer.append(footerBody2);

    content.append(tabContain);
}

/***/ }),

/***/ "./src/tab3.js":
/*!*********************!*\
  !*** ./src/tab3.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tab3Function)
/* harmony export */ });
function tab3Function() {
    //debugging console.log
    // console.log("I ran tab3Function");

    //delete current tab if needed
    if (currentTab != 0) {
    const parent = document.getElementById("container");

    const afoot = document.getElementById("footer");
    parent.removeChild(afoot);

    const parent2 = document.getElementById("content"); 

    const child = document.getElementById("tabContainer");
    parent2.removeChild(child);
    }

    //start creating page
    const content = document.getElementById("content");

    const tabContain = document.createElement('div');
    tabContain.id = 'tabContainer';

    //header
    const title = document.createElement('div');
    title.id = "subheader";
    tabContain.append(title);

    const headerContain = document.createElement('div');
    headerContain.className = "headerContain";
    headerContain.id = "contactHead1";
    title.append(headerContain);

    const titleHeader = document.createElement('h1');
    titleHeader.innerHTML = "&emsp;"+"&emsp;" + 'Contact Us' + "&emsp;"+"&emsp;";
    headerContain.append(titleHeader);


    //subheader
    const contactImg = document.createElement("img");
    contactImg.setAttribute("src", "/src/womanbullet.jpg");
    contactImg.setAttribute("height", "500px");
    tabContain.append(contactImg);


    const contactContain = document.createElement('div');
    contactContain.className = "headerContain";
    contactContain.id = "contactHead2";
    tabContain.append(contactContain);

    const contactHeader = document.createElement('h2');
    contactHeader.innerText = "Contact Info:";
    contactContain.append(contactHeader);

    const contactInfo = document.createElement('h5');
    contactInfo.innerHTML = "777-777-2077" + "<br />" + "LeadAndBreakfast@fake.com";
    contactHeader.append(contactInfo);


    //footer
    const footer = document.createElement('div');
    footer.id = 'footer';
    container.append(footer);

    const footerBody = document.createElement('p');
    title.className = "footerbody";
    footerBody.innerHTML = "Made by " + "<a href=https://github.com/George-Gabechava>George-Gabechava</a>" + " for The Odin Project";
    footer.append(footerBody);

    const footerBody2 = document.createElement('p');
    title.className = "footerbody";
    footerBody2.innerHTML = "Github " + "<a href=https://github.com/George-Gabechava/TOP-restaurantPage>Source Code</a>";

    //append this file to website
    footer.append(footerBody2);

    content.append(tabContain);
}


/***/ }),

/***/ "./src/hellosign.jpg":
/*!***************************!*\
  !*** ./src/hellosign.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53a3aa94725e5afc18da.jpg";

/***/ }),

/***/ "./src/leyre-unsplash.jpg":
/*!********************************!*\
  !*** ./src/leyre-unsplash.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba80a0552ad56c9c602b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tab1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.js */ "./src/tab1.js");
/* harmony import */ var _tab2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.js */ "./src/tab2.js");
/* harmony import */ var _tab3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.js */ "./src/tab3.js");
console.log('Hello Worlds!');






const button1 = document.getElementById("tab1");
button1.addEventListener('click', _tab1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

const button2 = document.getElementById("tab2");
button2.addEventListener("click", _tab2_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

const button3 = document.getElementById("tab3");
button3.addEventListener("click", _tab3_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBLGtDQUFrQyxnREFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL3NyYy90YWIxLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL3NyYy90YWIyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL3NyYy90YWIzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJsZXlyZS11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJoZWxsb3NpZ24uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIDtcbn1cblxuI2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLyogYnV0dG9ucyBzZWVtIHRvIGlnbm9yZSBqdXN0aWZ5LWNvbnRlbnQgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG5cbi50YWIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCBob3RwaW5rIDNweDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhYjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XG4gICAgYm9yZGVyOiBzb2xpZCBsaWdodGJsdWU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxucCwgaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBUYWIxIHN0eWxpbmcgKi9cbiN0YWJDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG5cbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzdWJoZWFkZXIge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogLTE7XG59XG5cbi5pbnRyb0NvbnRhaW4gLCAuYmV2ZXJhZ2VDb250YWluLCAuZm9vZENvbnRhaW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIG1hcmdpbjogMTVweDtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMjVweDtcbiAgICByb3ctZ2FwOiA1MHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBoc2woMjQwLCAxMDAlLCAyMiUpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBoc2woMjQwLCAxMDAlLCAzMyUpO1xuICAgIGJvcmRlci10b3AtY29sb3I6aHNsKDI0MCwgMTAwJSwgMjclKTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBoc2woMjQwLCAxMDAlLCAyNyUpO1xuICAgIC8qIGJvcmRlci1zdHlsZTogZG91YmxlOyAqL1xuICAgIC8qIGJvcmRlci1sZWZ0LXN0eWxlOiBkYXNoZWQ7ICovXG59XG5cbiNpbnRyb0NvbnRhaW5GaXJzdCB7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmhlYWRlckNvbnRhaW4sIC5zdWJoZWFkZXJDb250YWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrYmx1ZTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuaDIgPiBoNSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNmb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2Zvb3RlciBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBob3RwaW5rO1xufVxuXG4jZm9vdGVyIGE6bGluayB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLyogTWVudSBTdHlsaW5nICovIFxuLnN1YmhlYWRlckNvbnRhaW4ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbmgzID4gaDUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5oMyA+IGg0IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5zdWJoZWFkZXJDb250YWluLCAuaGVhZGVyQ29udGFpbntcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XG59XG5cbiNjb250YWN0SGVhZDEge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNjb250YWN0SGVhZDIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMERBQTBDO0FBQzlDOztBQUVBO0lBQ0kseURBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7SUFFN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTs7SUFFWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7O0lBRWIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsNkJBQTZCOztJQUU3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLHdDQUF3QztJQUN4QywwQkFBMEI7SUFDMUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7O0lBRXRCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGxleXJlLXVuc3BsYXNoLmpwZykgO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGhlbGxvc2lnbi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIC8qIGJ1dHRvbnMgc2VlbSB0byBpZ25vcmUganVzdGlmeS1jb250ZW50ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4udGFiIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBob3RwaW5rIDNweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhYjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gICAgYm9yZGVyOiBzb2xpZCBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbnAsIGgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFRhYjEgc3R5bGluZyAqL1xcbiN0YWJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc3ViaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogLTE7XFxufVxcblxcbi5pbnRyb0NvbnRhaW4gLCAuYmV2ZXJhZ2VDb250YWluLCAuZm9vZENvbnRhaW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIG1hcmdpbjogMTVweDtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXG4gICAgcm93LWdhcDogNTBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcblxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogaHNsKDI0MCwgMTAwJSwgMjIlKTtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGhzbCgyNDAsIDEwMCUsIDMzJSk7XFxuICAgIGJvcmRlci10b3AtY29sb3I6aHNsKDI0MCwgMTAwJSwgMjclKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogaHNsKDI0MCwgMTAwJSwgMjclKTtcXG4gICAgLyogYm9yZGVyLXN0eWxlOiBkb3VibGU7ICovXFxuICAgIC8qIGJvcmRlci1sZWZ0LXN0eWxlOiBkYXNoZWQ7ICovXFxufVxcblxcbiNpbnRyb0NvbnRhaW5GaXJzdCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxufVxcblxcbi5oZWFkZXJDb250YWluLCAuc3ViaGVhZGVyQ29udGFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcblxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5oMiA+IGg1IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jZm9vdGVyIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4jZm9vdGVyIGE6bGluayB7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi8qIE1lbnUgU3R5bGluZyAqLyBcXG4uc3ViaGVhZGVyQ29udGFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbmgzID4gaDUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmgzID4gaDQge1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLnN1YmhlYWRlckNvbnRhaW4sIC5oZWFkZXJDb250YWlue1xcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxufVxcblxcbiNjb250YWN0SGVhZDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jY29udGFjdEhlYWQyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL2N1cnJlbnQgVGFiIHRyYWNrZXIgdmFyaWFibGUgYWNyb3NzIGFsbCBqcyBmaWxlc1xud2luZG93WydjdXJyZW50VGFiJ10gPSAwO1xuXG4vL1J1biBhdCBzdGFydDsgZGVmYXVsdCBwYWdlXG50YWIxRnVuY3Rpb24oKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFiMUZ1bmN0aW9uKCkge1xuICAvL2RlYnVnZ2luZ1xuICAvL2NvbnNvbGUubG9nKFwiSSByYW4gdGFiMUZ1bmN0aW9uXCIpO1xuXG4gIC8vcmVwbGFjZSBjdXJyZW50IHRhYlxuICBpZiAoY3VycmVudFRhYiAhPSAwKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhZm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChhZm9vdCk7XG5cbiAgICBjb25zdCBwYXJlbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpOyBcbiAgICBcbiAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiQ29udGFpbmVyXCIpO1xuICAgIHBhcmVudDIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICBcbiAgfVxuICAvL3NldCBnbG9iYWwgdmFyaWFibGUgdG8gY3VycmVudCB0YWJcbiAgY3VycmVudFRhYiA9IDE7XG5cbiAgLy9zdGFydCBjcmVhdGluZyBwYWdlXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy9oZWFkZXJcbiAgY29uc3QgdGFiQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJDb250YWluLmlkID0gJ3RhYkNvbnRhaW5lcic7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuaWQgPSBcInN1YmhlYWRlclwiO1xuICB0YWJDb250YWluLmFwcGVuZCh0aXRsZSk7XG5cbiAgY29uc3QgaGVhZGVyQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWluLmNsYXNzTmFtZSA9IFwiaGVhZGVyQ29udGFpblwiO1xuICB0aXRsZS5hcHBlbmQoaGVhZGVyQ29udGFpbik7XG4gIFxuICBjb25zdCB0aXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlSGVhZGVyLmlubmVyVGV4dCA9ICdMZWFkIGFuZCBCcmVha2Zhc3QgMjA3Nyc7XG4gIGhlYWRlckNvbnRhaW4uYXBwZW5kKHRpdGxlSGVhZGVyKTtcblxuICAvL2ludHJvXG4gIGNvbnN0IGludHJvQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnRyb0NvbnRhaW4uY2xhc3NOYW1lID0gXCJpbnRyb0NvbnRhaW5cIjtcbiAgaW50cm9Db250YWluLmlkID0gXCJpbnRyb0NvbnRhaW5GaXJzdFwiO1xuICB0YWJDb250YWluLmFwcGVuZChpbnRyb0NvbnRhaW4pO1xuXG4gIGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGJ1bGxldC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvc3JjL2J1bGxldC5wbmdcIik7XG4gIGJ1bGxldC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMDBweFwiKTtcbiAgaW50cm9Db250YWluLmFwcGVuZChidWxsZXQpO1xuXG4gIGNvbnN0IGludHJvQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGludHJvQm9keS5pbm5lclRleHQgPSBcIkEgaG90IHN0b3AgaW4gTmlnaHQgQ2l0eS4gVGhpcyBlYXRlcnkgd2FzIGZvdW5kZWQgYnkgc29sb3MsIGZvciBzb2xvcy4gXFxcbiAgV2hldGhlciB5b3UgbmVlZCB0byB3aW5kIGRvd24gZnJvbSBhIGpvYiBvciB3aW5kIHVwIGZvciB0aGUgbmV4dCBqb2IsIHdlJ3ZlIGdvdCB5b3UgY292ZXJlZC4gV2UgYXJlIHRoZSBvbmUtc3RvcC1zaG9wIGZvciBhbGwgYSBzb2xvIGNvdWxkIG5lZWQuXCI7XG4gIGludHJvQ29udGFpbi5hcHBlbmQoaW50cm9Cb2R5KTtcblxuICBjb25zdCBpbnRyb0JvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbGV0IHNvbWV0ZXh0ID0gXCItU29tZSBNZXJjZW5hcnlcIjtcbiAgaW50cm9Cb2R5Mi5pbm5lckhUTUwgPSBcIiZlbXNwO1wiICsgXCImZW1zcDtcIiArIFwiJmVtc3A7XCIgKyBzb21ldGV4dDtcbiAgaW50cm9Cb2R5LmFwcGVuZChpbnRyb0JvZHkyKTtcblxuICAvL2hvdXJzXG4gIGNvbnN0IGludHJvQ29udGFpbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW50cm9Db250YWluMi5jbGFzc05hbWUgPSBcImludHJvQ29udGFpblwiO1xuICB0YWJDb250YWluLmFwcGVuZChpbnRyb0NvbnRhaW4yKTtcblxuICBjb25zdCBidWxsZXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYnVsbGV0Mi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvc3JjL2J1bGxldC5wbmdcIik7XG4gIGJ1bGxldDIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNzVweFwiKTtcbiAgaW50cm9Db250YWluMi5hcHBlbmQoYnVsbGV0Mik7XG4gIFxuICBjb25zdCBob3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBob3Vyc0JvZHkuaW5uZXJIVE1MID0gXCImZW1zcDtcIiArIFwiJmVtc3A7XCIgKyBcIkhvdXJzXCI7XG4gIGludHJvQ29udGFpbjIuYXBwZW5kKGhvdXJzQm9keSk7XG5cbiAgY29uc3QgaG91cnNCb2R5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIGhvdXJzQm9keTIuaW5uZXJIVE1MID0gXCJUdWVzZGF5LVN1bmRheTogNTowMFBNIC0gOTowMEFNXCIgKyBcIjxiciAvPlwiICsgXCJNb25kYXk6IENMT1NFRFwiO1xuICBob3Vyc0JvZHkuYXBwZW5kKGhvdXJzQm9keTIpO1xuXG4gIC8vbG9jYXRpb25cbiAgY29uc3QgaW50cm9Db250YWluMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnRyb0NvbnRhaW4zLmNsYXNzTmFtZSA9IFwiaW50cm9Db250YWluXCI7XG4gIHRhYkNvbnRhaW4uYXBwZW5kKGludHJvQ29udGFpbjMpO1xuXG4gIGNvbnN0IGJ1bGxldDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBidWxsZXQzLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvYnVsbGV0LnBuZ1wiKTtcbiAgYnVsbGV0My5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI3NXB4XCIpO1xuICBpbnRyb0NvbnRhaW4zLmFwcGVuZChidWxsZXQzKTtcbiAgXG4gIGNvbnN0IGxvY2F0aW9uQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxvY2F0aW9uQm9keS5pbm5lckhUTUwgPSBcIiZlbXNwO1wiICsgXCImZW1zcDtcIiArIFwiTG9jYXRpb25cIjtcbiAgaW50cm9Db250YWluMy5hcHBlbmQobG9jYXRpb25Cb2R5KTtcblxuICBjb25zdCBsb2NhdGlvbkJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgbG9jYXRpb25Cb2R5Mi5pbm5lclRleHQgPSBcIjEyMyAyN3RoIFN0cmVldCwgTmlnaHQgQ2l0eVwiO1xuICBsb2NhdGlvbkJvZHkuYXBwZW5kKGxvY2F0aW9uQm9keTIpO1xuXG4gIC8vZm9vdGVyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcbiAgY29udGFpbmVyLmFwcGVuZChmb290ZXIpO1xuXG4gIGNvbnN0IGZvb3RlckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3RlckJvZHkuaW5uZXJIVE1MID0gXCJNYWRlIGJ5IFwiICsgXCI8YSBocmVmPWh0dHBzOi8vZ2l0aHViLmNvbS9HZW9yZ2UtR2FiZWNoYXZhPkdlb3JnZS1HYWJlY2hhdmE8L2E+XCIgKyBcIiBmb3IgVGhlIE9kaW4gUHJvamVjdFwiO1xuICBmb290ZXIuYXBwZW5kKGZvb3RlckJvZHkpO1xuXG4gIGNvbnN0IGZvb3RlckJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJCb2R5Mi5pbm5lckhUTUwgPSBcIkdpdGh1YiBcIiArIFwiPGEgaHJlZj1odHRwczovL2dpdGh1Yi5jb20vR2VvcmdlLUdhYmVjaGF2YS9UT1AtcmVzdGF1cmFudFBhZ2U+U291cmNlIENvZGU8L2E+XCI7XG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVyQm9keTIpO1xuICAgIFxuICBjb250ZW50LmFwcGVuZCh0YWJDb250YWluKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFiMkZ1bmN0aW9uKCkge1xuICAgIC8vZGVidWdnaW5nIGNvbnNvbGUubG9nXG4gICAgLy8gY29uc29sZS5sb2coXCJJIHJhbiB0YWIyRnVuY3Rpb25cIik7XG5cbiAgICAvL2RlbGV0ZSBjdXJyZW50IHRhYiBpZiBuZWVkZWRcbiAgICBpZiAoY3VycmVudFRhYiAhPSAwKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhZm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChhZm9vdCk7XG5cbiAgICBjb25zdCBwYXJlbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpOyBcblxuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJDb250YWluZXJcIik7XG4gICAgcGFyZW50Mi5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuXG4gICAgLy9zdGFydCBjcmVhdGluZyBwYWdlXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IHRhYkNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJDb250YWluLmlkID0gJ3RhYkNvbnRhaW5lcic7XG5cbiAgICAvL2hlYWRlclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSBcInN1YmhlYWRlclwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKHRpdGxlKTtcblxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluLmNsYXNzTmFtZSA9IFwiaGVhZGVyQ29udGFpblwiO1xuICAgIHRpdGxlLmFwcGVuZChoZWFkZXJDb250YWluKTtcblxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZUhlYWRlci5pbm5lckhUTUwgPSBcIiZlbXNwO1wiK1wiJmVtc3A7XCIgKyAnTWVudScgKyBcIiZlbXNwO1wiK1wiJmVtc3A7XCI7XG4gICAgaGVhZGVyQ29udGFpbi5hcHBlbmQodGl0bGVIZWFkZXIpO1xuXG4gICAgLy9zdWJoZWFkZXIgYmV2ZXJhZ2VzXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluMi5jbGFzc05hbWUgPSBcInN1YmhlYWRlckNvbnRhaW5cIjtcbiAgICB0YWJDb250YWluLmFwcGVuZChoZWFkZXJDb250YWluMik7XG5cbiAgICBjb25zdCB0aXRsZUhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlSGVhZGVyMi5pbm5lclRleHQgPSBcIkJldmVyYWdlc1wiO1xuICAgIGhlYWRlckNvbnRhaW4yLmFwcGVuZCh0aXRsZUhlYWRlcjIpO1xuXG4gICAgLy9pdGVtcyBiZXZlcmFnZXNcbiAgICBjb25zdCBiZXZlcmFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZXZlcmFnZTEuY2xhc3NOYW1lID0gXCJiZXZlcmFnZUNvbnRhaW5cIjtcbiAgICB0YWJDb250YWluLmFwcGVuZChiZXZlcmFnZTEpO1xuXG4gICAgY29uc3QgYmV2ZXJhZ2VJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBiZXZlcmFnZUltZzEuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9hYi1zeW50aC53ZWJwXCIpO1xuICAgIGJldmVyYWdlSW1nMS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI3NXB4XCIpO1xuICAgIGJldmVyYWdlMS5hcHBlbmQoYmV2ZXJhZ2VJbWcxKTtcbiAgICBcbiAgICBjb25zdCBiZXZOYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYmV2TmFtZTEuaW5uZXJIVE1MID0gXCJBYi1TeW50aFwiO1xuICAgIGJldmVyYWdlMS5hcHBlbmQoYmV2TmFtZTEpO1xuXG4gICAgY29uc3QgYmV2RGVzYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGJldkRlc2MxLmlubmVyVGV4dCA9IFwiQmUgaW50ZW5zZS4gQmUgQm9oZW1pYW4uXCJcbiAgICBiZXZOYW1lMS5hcHBlbmQoYmV2RGVzYzEpO1xuXG4gICAgY29uc3QgYmV2UHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBiZXZQcmljZTEuaW5uZXJIVE1MID0gXCImZXVybztcIitcIiZkb2xsYXI7XCIrXCIxMVwiO1xuICAgIGJldk5hbWUxLmFwcGVuZChiZXZQcmljZTEpO1xuXG5cbiAgICBjb25zdCBiZXZlcmFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZXZlcmFnZTIuY2xhc3NOYW1lID0gXCJiZXZlcmFnZUNvbnRhaW5cIjtcbiAgICB0YWJDb250YWluLmFwcGVuZChiZXZlcmFnZTIpO1xuXG4gICAgY29uc3QgYmV2ZXJhZ2VJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBiZXZlcmFnZUltZzIuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL3NyYy9icm8tbGFnZXIud2VicFwiKTtcbiAgICBiZXZlcmFnZUltZzIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNzVweFwiKTtcbiAgICBiZXZlcmFnZTIuYXBwZW5kKGJldmVyYWdlSW1nMik7XG4gICAgXG4gICAgY29uc3QgYmV2TmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGJldk5hbWUyLmlubmVySFRNTCA9IFwiQnJvc2VwaCBMYWdlclwiO1xuICAgIGJldmVyYWdlMi5hcHBlbmQoYmV2TmFtZTIpO1xuXG4gICAgY29uc3QgYmV2RGVzYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGJldkRlc2MyLmlubmVyVGV4dCA9IFwiTGlnaHQtY29sb3VyZWQgJiBoaWdobHkgY2FyYm9uYXRlZCBiZXZlcmFnZS5cIlxuICAgIGJldk5hbWUyLmFwcGVuZChiZXZEZXNjMik7XG5cbiAgICBjb25zdCBiZXZQcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGJldlByaWNlMi5pbm5lckhUTUwgPSBcIiZldXJvO1wiK1wiJmRvbGxhcjtcIitcIjlcIjtcbiAgICBiZXZOYW1lMi5hcHBlbmQoYmV2UHJpY2UyKTtcblxuICAgIC8vc3ViaGVhZGVyIGZvb2RcbiAgICBjb25zdCBoZWFkZXJDb250YWluMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckNvbnRhaW4zLmNsYXNzTmFtZSA9IFwic3ViaGVhZGVyQ29udGFpblwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKGhlYWRlckNvbnRhaW4zKTtcblxuICAgIGNvbnN0IHRpdGxlSGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGVIZWFkZXIzLmlubmVyVGV4dCA9IFwiQnJlYWtmYXN0c1wiO1xuICAgIGhlYWRlckNvbnRhaW4zLmFwcGVuZCh0aXRsZUhlYWRlcjMpO1xuXG4gICAgLy9pdGVtcyBmb29kXG4gICAgY29uc3QgZm9vZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kMS5jbGFzc05hbWUgPSBcImZvb2RDb250YWluXCI7XG4gICAgdGFiQ29udGFpbi5hcHBlbmQoZm9vZDEpO1xuXG4gICAgY29uc3QgZm9vZEltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGZvb2RJbWcxLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvY3JvaXNzYW50LndlYnBcIik7XG4gICAgZm9vZEltZzEuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNzVweFwiKTtcbiAgICBmb29kMS5hcHBlbmQoZm9vZEltZzEpO1xuICAgIFxuICAgIGNvbnN0IGZvb2ROYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZm9vZE5hbWUxLmlubmVySFRNTCA9IFwiUGllcnJlJ3MgQ3JvaXNzYW50XCI7XG4gICAgZm9vZDEuYXBwZW5kKGZvb2ROYW1lMSk7XG5cbiAgICBjb25zdCBmb29kRGVzYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGZvb2REZXNjMS5pbm5lclRleHQgPSBcIkZsYWt5IHN5bnRoZXRpYyBidXR0ZXJ5IGdvb2RuZXNzIS5cIlxuICAgIGZvb2ROYW1lMS5hcHBlbmQoZm9vZERlc2MxKTtcblxuICAgIGNvbnN0IGZvb2RQcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGZvb2RQcmljZTEuaW5uZXJIVE1MID0gXCImZXVybztcIitcIiZkb2xsYXI7XCIrXCI3XCI7XG4gICAgZm9vZE5hbWUxLmFwcGVuZChmb29kUHJpY2UxKTtcblxuXG4gICAgY29uc3QgZm9vZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kMi5jbGFzc05hbWUgPSBcImZvb2RDb250YWluXCI7XG4gICAgdGFiQ29udGFpbi5hcHBlbmQoZm9vZDIpO1xuXG4gICAgY29uc3QgZm9vZEltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGZvb2RJbWcyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvdGFtYWxlLndlYnBcIik7XG4gICAgZm9vZEltZzIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNzVweFwiKTtcbiAgICBmb29kMi5hcHBlbmQoZm9vZEltZzIpO1xuICAgIFxuICAgIGNvbnN0IGZvb2ROYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZm9vZE5hbWUyLmlubmVySFRNTCA9IFwiTG9hZGVkIFRhbWFsZXNcIjtcbiAgICBmb29kMi5hcHBlbmQoZm9vZE5hbWUyKTtcblxuICAgIGNvbnN0IGZvb2REZXNjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgZm9vZERlc2MyLmlubmVyVGV4dCA9IFwiV3JhcHBlZCBpbiByZWFsIGNvcm4gaHVza3MhXCJcbiAgICBmb29kTmFtZTIuYXBwZW5kKGZvb2REZXNjMik7XG5cbiAgICBjb25zdCBmb29kUHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmb29kUHJpY2UyLmlubmVySFRNTCA9IFwiJmV1cm87XCIrXCImZG9sbGFyO1wiK1wiOVwiO1xuICAgIGZvb2ROYW1lMi5hcHBlbmQoZm9vZFByaWNlMik7XG5cbiAgICAvL0xlYWRcbiAgICAvL3N1YmhlYWRlciBmb29kXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluNC5jbGFzc05hbWUgPSBcInN1YmhlYWRlckNvbnRhaW5cIjtcbiAgICB0YWJDb250YWluLmFwcGVuZChoZWFkZXJDb250YWluNCk7XG5cbiAgICBjb25zdCB0aXRsZUhlYWRlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlSGVhZGVyNC5pbm5lclRleHQgPSBcIkxlYWRcIjtcbiAgICBoZWFkZXJDb250YWluNC5hcHBlbmQodGl0bGVIZWFkZXI0KTtcblxuICAgIC8vaXRlbXNcbiAgICBjb25zdCBpbnRyb0NvbnRhaW40ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW50cm9Db250YWluNC5jbGFzc05hbWUgPSBcImludHJvQ29udGFpblwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKGludHJvQ29udGFpbjQpO1xuXG4gICAgY29uc3QgYnVsbGV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYnVsbGV0NC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvc3JjL2J1bGxldC5wbmdcIik7XG4gICAgYnVsbGV0NC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI3NXB4XCIpO1xuICAgIGludHJvQ29udGFpbjQuYXBwZW5kKGJ1bGxldDQpO1xuICAgIFxuICAgIGNvbnN0IGxlYWRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxlYWRIZWFkZXIuaW5uZXJIVE1MID0gXCJTZWUgVmVuZG9yXCI7XG4gICAgaW50cm9Db250YWluNC5hcHBlbmQobGVhZEhlYWRlcik7XG5cbiAgICBjb25zdCBsZWFkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgbGVhZERlc2MuaW5uZXJUZXh0ID0gXCJQbGVhc2Ugc2VlIHRoZSB2ZW5kb3Igb24gc3RhZmYgc2VsbGluZyBtZXJjaGFuZGlzZSBmb3IgYWxsIHlvdXIgbWVyY2VuYXJ5IG5lZWRzLlwiO1xuICAgIGxlYWRIZWFkZXIuYXBwZW5kKGxlYWREZXNjKTtcblxuICAgIC8vZm9vdGVyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG4gICAgY29udGFpbmVyLmFwcGVuZChmb290ZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImZvb3RlcmJvZHlcIjtcbiAgICBmb290ZXJCb2R5LmlubmVySFRNTCA9IFwiTWFkZSBieSBcIiArIFwiPGEgaHJlZj1odHRwczovL2dpdGh1Yi5jb20vR2VvcmdlLUdhYmVjaGF2YT5HZW9yZ2UtR2FiZWNoYXZhPC9hPlwiICsgXCIgZm9yIFRoZSBPZGluIFByb2plY3RcIjtcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckJvZHkpO1xuXG4gICAgY29uc3QgZm9vdGVyQm9keTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJmb290ZXJib2R5XCI7XG4gICAgZm9vdGVyQm9keTIuaW5uZXJIVE1MID0gXCJHaXRodWIgXCIgKyBcIjxhIGhyZWY9aHR0cHM6Ly9naXRodWIuY29tL0dlb3JnZS1HYWJlY2hhdmEvVE9QLXJlc3RhdXJhbnRQYWdlPlNvdXJjZSBDb2RlPC9hPlwiO1xuXG4gICAgLy9hcHBlbmQgdGhpcyBmaWxlIHRvIHdlYnNpdGVcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckJvZHkyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKHRhYkNvbnRhaW4pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhYjNGdW5jdGlvbigpIHtcbiAgICAvL2RlYnVnZ2luZyBjb25zb2xlLmxvZ1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSSByYW4gdGFiM0Z1bmN0aW9uXCIpO1xuXG4gICAgLy9kZWxldGUgY3VycmVudCB0YWIgaWYgbmVlZGVkXG4gICAgaWYgKGN1cnJlbnRUYWIgIT0gMCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgYWZvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoYWZvb3QpO1xuXG4gICAgY29uc3QgcGFyZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTsgXG5cbiAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiQ29udGFpbmVyXCIpO1xuICAgIHBhcmVudDIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cblxuICAgIC8vc3RhcnQgY3JlYXRpbmcgcGFnZVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0YWJDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFiQ29udGFpbi5pZCA9ICd0YWJDb250YWluZXInO1xuXG4gICAgLy9oZWFkZXJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmlkID0gXCJzdWJoZWFkZXJcIjtcbiAgICB0YWJDb250YWluLmFwcGVuZCh0aXRsZSk7XG5cbiAgICBjb25zdCBoZWFkZXJDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGFpbi5jbGFzc05hbWUgPSBcImhlYWRlckNvbnRhaW5cIjtcbiAgICBoZWFkZXJDb250YWluLmlkID0gXCJjb250YWN0SGVhZDFcIjtcbiAgICB0aXRsZS5hcHBlbmQoaGVhZGVyQ29udGFpbik7XG5cbiAgICBjb25zdCB0aXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVIZWFkZXIuaW5uZXJIVE1MID0gXCImZW1zcDtcIitcIiZlbXNwO1wiICsgJ0NvbnRhY3QgVXMnICsgXCImZW1zcDtcIitcIiZlbXNwO1wiO1xuICAgIGhlYWRlckNvbnRhaW4uYXBwZW5kKHRpdGxlSGVhZGVyKTtcblxuXG4gICAgLy9zdWJoZWFkZXJcbiAgICBjb25zdCBjb250YWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb250YWN0SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvd29tYW5idWxsZXQuanBnXCIpO1xuICAgIGNvbnRhY3RJbWcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNTAwcHhcIik7XG4gICAgdGFiQ29udGFpbi5hcHBlbmQoY29udGFjdEltZyk7XG5cblxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRhaW4uY2xhc3NOYW1lID0gXCJoZWFkZXJDb250YWluXCI7XG4gICAgY29udGFjdENvbnRhaW4uaWQgPSBcImNvbnRhY3RIZWFkMlwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKGNvbnRhY3RDb250YWluKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0IEluZm86XCI7XG4gICAgY29udGFjdENvbnRhaW4uYXBwZW5kKGNvbnRhY3RIZWFkZXIpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGNvbnRhY3RJbmZvLmlubmVySFRNTCA9IFwiNzc3LTc3Ny0yMDc3XCIgKyBcIjxiciAvPlwiICsgXCJMZWFkQW5kQnJlYWtmYXN0QGZha2UuY29tXCI7XG4gICAgY29udGFjdEhlYWRlci5hcHBlbmQoY29udGFjdEluZm8pO1xuXG5cbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9vdGVyKTtcblxuICAgIGNvbnN0IGZvb3RlckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJmb290ZXJib2R5XCI7XG4gICAgZm9vdGVyQm9keS5pbm5lckhUTUwgPSBcIk1hZGUgYnkgXCIgKyBcIjxhIGhyZWY9aHR0cHM6Ly9naXRodWIuY29tL0dlb3JnZS1HYWJlY2hhdmE+R2VvcmdlLUdhYmVjaGF2YTwvYT5cIiArIFwiIGZvciBUaGUgT2RpbiBQcm9qZWN0XCI7XG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJCb2R5KTtcblxuICAgIGNvbnN0IGZvb3RlckJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwiZm9vdGVyYm9keVwiO1xuICAgIGZvb3RlckJvZHkyLmlubmVySFRNTCA9IFwiR2l0aHViIFwiICsgXCI8YSBocmVmPWh0dHBzOi8vZ2l0aHViLmNvbS9HZW9yZ2UtR2FiZWNoYXZhL1RPUC1yZXN0YXVyYW50UGFnZT5Tb3VyY2UgQ29kZTwvYT5cIjtcblxuICAgIC8vYXBwZW5kIHRoaXMgZmlsZSB0byB3ZWJzaXRlXG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJCb2R5Mik7XG5cbiAgICBjb250ZW50LmFwcGVuZCh0YWJDb250YWluKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkcyEnKTtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgdGFiMUZ1bmN0aW9uIGZyb20gJy4vdGFiMS5qcyc7XG5pbXBvcnQgdGFiMkZ1bmN0aW9uIGZyb20gJy4vdGFiMi5qcyc7XG5pbXBvcnQgdGFiM0Z1bmN0aW9uIGZyb20gJy4vdGFiMy5qcyc7XG5cbmNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYjFcIik7XG5idXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFiMUZ1bmN0aW9uKTtcblxuY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiMlwiKTtcbmJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYjJGdW5jdGlvbik7XG5cbmNvbnN0IGJ1dHRvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYjNcIik7XG5idXR0b24zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YWIzRnVuY3Rpb24pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=