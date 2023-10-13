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
/* harmony import */ var _bullet_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet.png */ "./src/bullet.png");
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
  bullet.src = _bullet_png__WEBPACK_IMPORTED_MODULE_0__;
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
  bullet2.src = _bullet_png__WEBPACK_IMPORTED_MODULE_0__;
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
  bullet3.src = _bullet_png__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _ab_synth_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ab-synth.webp */ "./src/ab-synth.webp");
/* harmony import */ var _bro_lager_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bro-lager.webp */ "./src/bro-lager.webp");
/* harmony import */ var _croissant_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./croissant.webp */ "./src/croissant.webp");
/* harmony import */ var _tamale_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tamale.webp */ "./src/tamale.webp");
/* harmony import */ var _bullet_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bullet.png */ "./src/bullet.png");









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
    beverageImg1.src = _ab_synth_webp__WEBPACK_IMPORTED_MODULE_0__;
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
    beverageImg2.src = _bro_lager_webp__WEBPACK_IMPORTED_MODULE_1__;
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
    foodImg1.src = _croissant_webp__WEBPACK_IMPORTED_MODULE_2__;
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
    foodImg2.src = _tamale_webp__WEBPACK_IMPORTED_MODULE_3__;
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
    bullet4.src = _bullet_png__WEBPACK_IMPORTED_MODULE_4__;
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
/* harmony import */ var _womanbullet_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./womanbullet.jpg */ "./src/womanbullet.jpg");


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
    contactImg.src = _womanbullet_jpg__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ "./src/ab-synth.webp":
/*!***************************!*\
  !*** ./src/ab-synth.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dd375a32207b114b8e0.webp";

/***/ }),

/***/ "./src/bro-lager.webp":
/*!****************************!*\
  !*** ./src/bro-lager.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f12067441f43e5710091.webp";

/***/ }),

/***/ "./src/bullet.png":
/*!************************!*\
  !*** ./src/bullet.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b34cf7e0e856cb865d3a.png";

/***/ }),

/***/ "./src/croissant.webp":
/*!****************************!*\
  !*** ./src/croissant.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bb68c4eba9f4449e6e2.webp";

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

/***/ }),

/***/ "./src/tamale.webp":
/*!*************************!*\
  !*** ./src/tamale.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9525b19c4bb6c7b08cc2.webp";

/***/ }),

/***/ "./src/womanbullet.jpg":
/*!*****************************!*\
  !*** ./src/womanbullet.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d1189d67ae33d663908.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVxQjtBQUNnQjtBQUNBO0FBQ0E7O0FBRXJDO0FBQ0Esa0NBQWtDLGdEQUFZOztBQUU5QztBQUNBLGtDQUFrQyxnREFBWTs7QUFFOUM7QUFDQSxrQ0FBa0MsZ0RBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGFiMS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGFiMi5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGFiMy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwibGV5cmUtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaGVsbG9zaWduLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNjb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSA7XG59XG5cbiNoZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC8qIGJ1dHRvbnMgc2VlbSB0byBpZ25vcmUganVzdGlmeS1jb250ZW50ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIFxufVxuXG4udGFiIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogc29saWQgaG90cGluayAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YWI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICAgIGJvcmRlcjogc29saWQgbGlnaHRibHVlO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbnAsIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjb250ZW50IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogVGFiMSBzdHlsaW5nICovXG4jdGFiQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jc3ViaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xufVxuXG4uaW50cm9Db250YWluICwgLmJldmVyYWdlQ29udGFpbiwgLmZvb2RDb250YWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgICBtYXJnaW46IDE1cHg7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IDI1cHg7XG4gICAgcm93LWdhcDogNTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcblxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogaHNsKDI0MCwgMTAwJSwgMjIlKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogaHNsKDI0MCwgMTAwJSwgMzMlKTtcbiAgICBib3JkZXItdG9wLWNvbG9yOmhzbCgyNDAsIDEwMCUsIDI3JSk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogaHNsKDI0MCwgMTAwJSwgMjclKTtcbiAgICAvKiBib3JkZXItc3R5bGU6IGRvdWJsZTsgKi9cbiAgICAvKiBib3JkZXItbGVmdC1zdHlsZTogZGFzaGVkOyAqL1xufVxuXG4jaW50cm9Db250YWluRmlyc3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5oZWFkZXJDb250YWluLCAuc3ViaGVhZGVyQ29udGFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcblxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xuICAgIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbmgyID4gaDUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNmb290ZXIgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogaG90cGluaztcbn1cblxuI2Zvb3RlciBhOmxpbmsge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi8qIE1lbnUgU3R5bGluZyAqLyBcbi5zdWJoZWFkZXJDb250YWluIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5oMyA+IGg1IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaDMgPiBoNCB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uc3ViaGVhZGVyQ29udGFpbiwgLmhlYWRlckNvbnRhaW57XG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xufVxuXG4jY29udGFjdEhlYWQxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jY29udGFjdEhlYWQyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBEQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHlEQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7SUFFbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7O0lBRVosbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhOztJQUViLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLDZCQUE2Qjs7SUFFN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQyx3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCOztJQUV0QixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChsZXlyZS11bnNwbGFzaC5qcGcpIDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChoZWxsb3NpZ24uanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAvKiBidXR0b25zIHNlZW0gdG8gaWdub3JlIGp1c3RpZnktY29udGVudCAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnRhYiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgaG90cGluayAzcHg7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICAgIGJvcmRlcjogc29saWQgbGlnaHRibHVlO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG5wLCBoMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBUYWIxIHN0eWxpbmcgKi9cXG4jdGFiQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxuXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3N1YmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xcbn1cXG5cXG4uaW50cm9Db250YWluICwgLmJldmVyYWdlQ29udGFpbiwgLmZvb2RDb250YWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxuICAgIHJvdy1nYXA6IDUwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG5cXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGhzbCgyNDAsIDEwMCUsIDIyJSk7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBoc2woMjQwLCAxMDAlLCAzMyUpO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOmhzbCgyNDAsIDEwMCUsIDI3JSk7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGhzbCgyNDAsIDEwMCUsIDI3JSk7XFxuICAgIC8qIGJvcmRlci1zdHlsZTogZG91YmxlOyAqL1xcbiAgICAvKiBib3JkZXItbGVmdC1zdHlsZTogZGFzaGVkOyAqL1xcbn1cXG5cXG4jaW50cm9Db250YWluRmlyc3Qge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbiwgLnN1YmhlYWRlckNvbnRhaW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG5cXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItY29sb3I6IGRhcmtibHVlO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuaDIgPiBoNSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2Zvb3RlciBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogaG90cGluaztcXG59XFxuXFxuI2Zvb3RlciBhOmxpbmsge1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4vKiBNZW51IFN0eWxpbmcgKi8gXFxuLnN1YmhlYWRlckNvbnRhaW4ge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG5oMyA+IGg1IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5oMyA+IGg0IHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5zdWJoZWFkZXJDb250YWluLCAuaGVhZGVyQ29udGFpbntcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jY29udGFjdEhlYWQxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2NvbnRhY3RIZWFkMiB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9jdXJyZW50IFRhYiB0cmFja2VyIHZhcmlhYmxlIGFjcm9zcyBhbGwganMgZmlsZXNcbndpbmRvd1snY3VycmVudFRhYiddID0gMDtcblxuLy9SdW4gYXQgc3RhcnQ7IGRlZmF1bHQgcGFnZVxudGFiMUZ1bmN0aW9uKCk7XG5cbmltcG9ydCBidWxsZXRwaWMgZnJvbSAnLi9idWxsZXQucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFiMUZ1bmN0aW9uKCkge1xuICAvL2RlYnVnZ2luZ1xuICAvL2NvbnNvbGUubG9nKFwiSSByYW4gdGFiMUZ1bmN0aW9uXCIpO1xuXG4gIC8vcmVwbGFjZSBjdXJyZW50IHRhYlxuICBpZiAoY3VycmVudFRhYiAhPSAwKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhZm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChhZm9vdCk7XG5cbiAgICBjb25zdCBwYXJlbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpOyBcbiAgICBcbiAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiQ29udGFpbmVyXCIpO1xuICAgIHBhcmVudDIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICBcbiAgfVxuICAvL3NldCBnbG9iYWwgdmFyaWFibGUgdG8gY3VycmVudCB0YWJcbiAgY3VycmVudFRhYiA9IDE7XG5cbiAgLy9zdGFydCBjcmVhdGluZyBwYWdlXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgLy9oZWFkZXJcbiAgY29uc3QgdGFiQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJDb250YWluLmlkID0gJ3RhYkNvbnRhaW5lcic7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuaWQgPSBcInN1YmhlYWRlclwiO1xuICB0YWJDb250YWluLmFwcGVuZCh0aXRsZSk7XG5cbiAgY29uc3QgaGVhZGVyQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWluLmNsYXNzTmFtZSA9IFwiaGVhZGVyQ29udGFpblwiO1xuICB0aXRsZS5hcHBlbmQoaGVhZGVyQ29udGFpbik7XG4gIFxuICBjb25zdCB0aXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlSGVhZGVyLmlubmVyVGV4dCA9ICdMZWFkIGFuZCBCcmVha2Zhc3QgMjA3Nyc7XG4gIGhlYWRlckNvbnRhaW4uYXBwZW5kKHRpdGxlSGVhZGVyKTtcblxuICAvL2ludHJvXG4gIGNvbnN0IGludHJvQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnRyb0NvbnRhaW4uY2xhc3NOYW1lID0gXCJpbnRyb0NvbnRhaW5cIjtcbiAgaW50cm9Db250YWluLmlkID0gXCJpbnRyb0NvbnRhaW5GaXJzdFwiO1xuICB0YWJDb250YWluLmFwcGVuZChpbnRyb0NvbnRhaW4pO1xuXG4gIGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGJ1bGxldC5zcmMgPSBidWxsZXRwaWM7XG4gIGJ1bGxldC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMDBweFwiKTtcbiAgaW50cm9Db250YWluLmFwcGVuZChidWxsZXQpO1xuXG4gIGNvbnN0IGludHJvQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGludHJvQm9keS5pbm5lclRleHQgPSBcIkEgaG90IHN0b3AgaW4gTmlnaHQgQ2l0eS4gVGhpcyBlYXRlcnkgd2FzIGZvdW5kZWQgYnkgc29sb3MsIGZvciBzb2xvcy4gXFxcbiAgV2hldGhlciB5b3UgbmVlZCB0byB3aW5kIGRvd24gZnJvbSBhIGpvYiBvciB3aW5kIHVwIGZvciB0aGUgbmV4dCBqb2IsIHdlJ3ZlIGdvdCB5b3UgY292ZXJlZC4gV2UgYXJlIHRoZSBvbmUtc3RvcC1zaG9wIGZvciBhbGwgYSBzb2xvIGNvdWxkIG5lZWQuXCI7XG4gIGludHJvQ29udGFpbi5hcHBlbmQoaW50cm9Cb2R5KTtcblxuICBjb25zdCBpbnRyb0JvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbGV0IHNvbWV0ZXh0ID0gXCItU29tZSBNZXJjZW5hcnlcIjtcbiAgaW50cm9Cb2R5Mi5pbm5lckhUTUwgPSBcIiZlbXNwO1wiICsgXCImZW1zcDtcIiArIFwiJmVtc3A7XCIgKyBzb21ldGV4dDtcbiAgaW50cm9Cb2R5LmFwcGVuZChpbnRyb0JvZHkyKTtcblxuICAvL2hvdXJzXG4gIGNvbnN0IGludHJvQ29udGFpbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW50cm9Db250YWluMi5jbGFzc05hbWUgPSBcImludHJvQ29udGFpblwiO1xuICB0YWJDb250YWluLmFwcGVuZChpbnRyb0NvbnRhaW4yKTtcblxuICBjb25zdCBidWxsZXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYnVsbGV0Mi5zcmMgPSBidWxsZXRwaWM7XG4gIGJ1bGxldDIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNzVweFwiKTtcbiAgaW50cm9Db250YWluMi5hcHBlbmQoYnVsbGV0Mik7XG4gIFxuICBjb25zdCBob3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBob3Vyc0JvZHkuaW5uZXJIVE1MID0gXCImZW1zcDtcIiArIFwiJmVtc3A7XCIgKyBcIkhvdXJzXCI7XG4gIGludHJvQ29udGFpbjIuYXBwZW5kKGhvdXJzQm9keSk7XG5cbiAgY29uc3QgaG91cnNCb2R5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIGhvdXJzQm9keTIuaW5uZXJIVE1MID0gXCJUdWVzZGF5LVN1bmRheTogNTowMFBNIC0gOTowMEFNXCIgKyBcIjxiciAvPlwiICsgXCJNb25kYXk6IENMT1NFRFwiO1xuICBob3Vyc0JvZHkuYXBwZW5kKGhvdXJzQm9keTIpO1xuXG4gIC8vbG9jYXRpb25cbiAgY29uc3QgaW50cm9Db250YWluMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnRyb0NvbnRhaW4zLmNsYXNzTmFtZSA9IFwiaW50cm9Db250YWluXCI7XG4gIHRhYkNvbnRhaW4uYXBwZW5kKGludHJvQ29udGFpbjMpO1xuXG4gIGNvbnN0IGJ1bGxldDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBidWxsZXQzLnNyYyA9IGJ1bGxldHBpYztcbiAgYnVsbGV0My5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI3NXB4XCIpO1xuICBpbnRyb0NvbnRhaW4zLmFwcGVuZChidWxsZXQzKTtcbiAgXG4gIGNvbnN0IGxvY2F0aW9uQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxvY2F0aW9uQm9keS5pbm5lckhUTUwgPSBcIiZlbXNwO1wiICsgXCImZW1zcDtcIiArIFwiTG9jYXRpb25cIjtcbiAgaW50cm9Db250YWluMy5hcHBlbmQobG9jYXRpb25Cb2R5KTtcblxuICBjb25zdCBsb2NhdGlvbkJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgbG9jYXRpb25Cb2R5Mi5pbm5lclRleHQgPSBcIjEyMyAyN3RoIFN0cmVldCwgTmlnaHQgQ2l0eVwiO1xuICBsb2NhdGlvbkJvZHkuYXBwZW5kKGxvY2F0aW9uQm9keTIpO1xuXG4gIC8vZm9vdGVyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcbiAgY29udGFpbmVyLmFwcGVuZChmb290ZXIpO1xuXG4gIGNvbnN0IGZvb3RlckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3RlckJvZHkuaW5uZXJIVE1MID0gXCJNYWRlIGJ5IFwiICsgXCI8YSBocmVmPWh0dHBzOi8vZ2l0aHViLmNvbS9HZW9yZ2UtR2FiZWNoYXZhPkdlb3JnZS1HYWJlY2hhdmE8L2E+XCIgKyBcIiBmb3IgVGhlIE9kaW4gUHJvamVjdFwiO1xuICBmb290ZXIuYXBwZW5kKGZvb3RlckJvZHkpO1xuXG4gIGNvbnN0IGZvb3RlckJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJCb2R5Mi5pbm5lckhUTUwgPSBcIkdpdGh1YiBcIiArIFwiPGEgaHJlZj1odHRwczovL2dpdGh1Yi5jb20vR2VvcmdlLUdhYmVjaGF2YS9UT1AtcmVzdGF1cmFudFBhZ2U+U291cmNlIENvZGU8L2E+XCI7XG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVyQm9keTIpO1xuICAgIFxuICBjb250ZW50LmFwcGVuZCh0YWJDb250YWluKTtcbn07IiwiaW1wb3J0IGFic3lwaWMgZnJvbSAnLi9hYi1zeW50aC53ZWJwJztcbmltcG9ydCBsYWdlcnBpYyBmcm9tICcuL2Jyby1sYWdlci53ZWJwJztcbmltcG9ydCBjcm9pc3NhbnRwaWMgZnJvbSAnLi9jcm9pc3NhbnQud2VicCc7XG5pbXBvcnQgdGFtYWxlcGljIGZyb20gJy4vdGFtYWxlLndlYnAnO1xuaW1wb3J0IGJ1bGxldHBpYyBmcm9tICcuL2J1bGxldC5wbmcnO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWIyRnVuY3Rpb24oKSB7XG4gICAgLy9kZWJ1Z2dpbmcgY29uc29sZS5sb2dcbiAgICAvLyBjb25zb2xlLmxvZyhcIkkgcmFuIHRhYjJGdW5jdGlvblwiKTtcblxuICAgIC8vZGVsZXRlIGN1cnJlbnQgdGFiIGlmIG5lZWRlZFxuICAgIGlmIChjdXJyZW50VGFiICE9IDApIHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGFmb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIik7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGFmb290KTtcblxuICAgIGNvbnN0IHBhcmVudDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7IFxuXG4gICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYkNvbnRhaW5lclwiKTtcbiAgICBwYXJlbnQyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG5cbiAgICAvL3N0YXJ0IGNyZWF0aW5nIHBhZ2VcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgdGFiQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYkNvbnRhaW4uaWQgPSAndGFiQ29udGFpbmVyJztcblxuICAgIC8vaGVhZGVyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5pZCA9IFwic3ViaGVhZGVyXCI7XG4gICAgdGFiQ29udGFpbi5hcHBlbmQodGl0bGUpO1xuXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckNvbnRhaW4uY2xhc3NOYW1lID0gXCJoZWFkZXJDb250YWluXCI7XG4gICAgdGl0bGUuYXBwZW5kKGhlYWRlckNvbnRhaW4pO1xuXG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlSGVhZGVyLmlubmVySFRNTCA9IFwiJmVtc3A7XCIrXCImZW1zcDtcIiArICdNZW51JyArIFwiJmVtc3A7XCIrXCImZW1zcDtcIjtcbiAgICBoZWFkZXJDb250YWluLmFwcGVuZCh0aXRsZUhlYWRlcik7XG5cbiAgICAvL3N1YmhlYWRlciBiZXZlcmFnZXNcbiAgICBjb25zdCBoZWFkZXJDb250YWluMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckNvbnRhaW4yLmNsYXNzTmFtZSA9IFwic3ViaGVhZGVyQ29udGFpblwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKGhlYWRlckNvbnRhaW4yKTtcblxuICAgIGNvbnN0IHRpdGxlSGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGVIZWFkZXIyLmlubmVyVGV4dCA9IFwiQmV2ZXJhZ2VzXCI7XG4gICAgaGVhZGVyQ29udGFpbjIuYXBwZW5kKHRpdGxlSGVhZGVyMik7XG5cbiAgICAvL2l0ZW1zIGJldmVyYWdlc1xuICAgIGNvbnN0IGJldmVyYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJldmVyYWdlMS5jbGFzc05hbWUgPSBcImJldmVyYWdlQ29udGFpblwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKGJldmVyYWdlMSk7XG5cbiAgICBjb25zdCBiZXZlcmFnZUltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGJldmVyYWdlSW1nMS5zcmMgPSBhYnN5cGljO1xuICAgIGJldmVyYWdlSW1nMS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI3NXB4XCIpO1xuICAgIGJldmVyYWdlMS5hcHBlbmQoYmV2ZXJhZ2VJbWcxKTtcbiAgICBcbiAgICBjb25zdCBiZXZOYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYmV2TmFtZTEuaW5uZXJIVE1MID0gXCJBYi1TeW50aFwiO1xuICAgIGJldmVyYWdlMS5hcHBlbmQoYmV2TmFtZTEpO1xuXG4gICAgY29uc3QgYmV2RGVzYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGJldkRlc2MxLmlubmVyVGV4dCA9IFwiQmUgaW50ZW5zZS4gQmUgQm9oZW1pYW4uXCJcbiAgICBiZXZOYW1lMS5hcHBlbmQoYmV2RGVzYzEpO1xuXG4gICAgY29uc3QgYmV2UHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBiZXZQcmljZTEuaW5uZXJIVE1MID0gXCImZXVybztcIitcIiZkb2xsYXI7XCIrXCIxMVwiO1xuICAgIGJldk5hbWUxLmFwcGVuZChiZXZQcmljZTEpO1xuXG5cbiAgICBjb25zdCBiZXZlcmFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZXZlcmFnZTIuY2xhc3NOYW1lID0gXCJiZXZlcmFnZUNvbnRhaW5cIjtcbiAgICB0YWJDb250YWluLmFwcGVuZChiZXZlcmFnZTIpO1xuXG4gICAgY29uc3QgYmV2ZXJhZ2VJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBiZXZlcmFnZUltZzIuc3JjID0gbGFnZXJwaWM7XG4gICAgYmV2ZXJhZ2VJbWcyLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjc1cHhcIik7XG4gICAgYmV2ZXJhZ2UyLmFwcGVuZChiZXZlcmFnZUltZzIpO1xuICAgIFxuICAgIGNvbnN0IGJldk5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBiZXZOYW1lMi5pbm5lckhUTUwgPSBcIkJyb3NlcGggTGFnZXJcIjtcbiAgICBiZXZlcmFnZTIuYXBwZW5kKGJldk5hbWUyKTtcblxuICAgIGNvbnN0IGJldkRlc2MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBiZXZEZXNjMi5pbm5lclRleHQgPSBcIkxpZ2h0LWNvbG91cmVkICYgaGlnaGx5IGNhcmJvbmF0ZWQgYmV2ZXJhZ2UuXCJcbiAgICBiZXZOYW1lMi5hcHBlbmQoYmV2RGVzYzIpO1xuXG4gICAgY29uc3QgYmV2UHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBiZXZQcmljZTIuaW5uZXJIVE1MID0gXCImZXVybztcIitcIiZkb2xsYXI7XCIrXCI5XCI7XG4gICAgYmV2TmFtZTIuYXBwZW5kKGJldlByaWNlMik7XG5cbiAgICAvL3N1YmhlYWRlciBmb29kXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluMy5jbGFzc05hbWUgPSBcInN1YmhlYWRlckNvbnRhaW5cIjtcbiAgICB0YWJDb250YWluLmFwcGVuZChoZWFkZXJDb250YWluMyk7XG5cbiAgICBjb25zdCB0aXRsZUhlYWRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlSGVhZGVyMy5pbm5lclRleHQgPSBcIkJyZWFrZmFzdHNcIjtcbiAgICBoZWFkZXJDb250YWluMy5hcHBlbmQodGl0bGVIZWFkZXIzKTtcblxuICAgIC8vaXRlbXMgZm9vZFxuICAgIGNvbnN0IGZvb2QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZDEuY2xhc3NOYW1lID0gXCJmb29kQ29udGFpblwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKGZvb2QxKTtcblxuICAgIGNvbnN0IGZvb2RJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb29kSW1nMS5zcmMgPSBjcm9pc3NhbnRwaWM7XG4gICAgZm9vZEltZzEuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNzVweFwiKTtcbiAgICBmb29kMS5hcHBlbmQoZm9vZEltZzEpO1xuICAgIFxuICAgIGNvbnN0IGZvb2ROYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZm9vZE5hbWUxLmlubmVySFRNTCA9IFwiUGllcnJlJ3MgQ3JvaXNzYW50XCI7XG4gICAgZm9vZDEuYXBwZW5kKGZvb2ROYW1lMSk7XG5cbiAgICBjb25zdCBmb29kRGVzYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGZvb2REZXNjMS5pbm5lclRleHQgPSBcIkZsYWt5IHN5bnRoZXRpYyBidXR0ZXJ5IGdvb2RuZXNzIS5cIlxuICAgIGZvb2ROYW1lMS5hcHBlbmQoZm9vZERlc2MxKTtcblxuICAgIGNvbnN0IGZvb2RQcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGZvb2RQcmljZTEuaW5uZXJIVE1MID0gXCImZXVybztcIitcIiZkb2xsYXI7XCIrXCI3XCI7XG4gICAgZm9vZE5hbWUxLmFwcGVuZChmb29kUHJpY2UxKTtcblxuXG4gICAgY29uc3QgZm9vZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kMi5jbGFzc05hbWUgPSBcImZvb2RDb250YWluXCI7XG4gICAgdGFiQ29udGFpbi5hcHBlbmQoZm9vZDIpO1xuXG4gICAgY29uc3QgZm9vZEltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGZvb2RJbWcyLnNyYyA9IHRhbWFsZXBpYztcbiAgICBmb29kSW1nMi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI3NXB4XCIpO1xuICAgIGZvb2QyLmFwcGVuZChmb29kSW1nMik7XG4gICAgXG4gICAgY29uc3QgZm9vZE5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmb29kTmFtZTIuaW5uZXJIVE1MID0gXCJMb2FkZWQgVGFtYWxlc1wiO1xuICAgIGZvb2QyLmFwcGVuZChmb29kTmFtZTIpO1xuXG4gICAgY29uc3QgZm9vZERlc2MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBmb29kRGVzYzIuaW5uZXJUZXh0ID0gXCJXcmFwcGVkIGluIHJlYWwgY29ybiBodXNrcyFcIlxuICAgIGZvb2ROYW1lMi5hcHBlbmQoZm9vZERlc2MyKTtcblxuICAgIGNvbnN0IGZvb2RQcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGZvb2RQcmljZTIuaW5uZXJIVE1MID0gXCImZXVybztcIitcIiZkb2xsYXI7XCIrXCI5XCI7XG4gICAgZm9vZE5hbWUyLmFwcGVuZChmb29kUHJpY2UyKTtcblxuICAgIC8vTGVhZFxuICAgIC8vc3ViaGVhZGVyIGZvb2RcbiAgICBjb25zdCBoZWFkZXJDb250YWluNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckNvbnRhaW40LmNsYXNzTmFtZSA9IFwic3ViaGVhZGVyQ29udGFpblwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKGhlYWRlckNvbnRhaW40KTtcblxuICAgIGNvbnN0IHRpdGxlSGVhZGVyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGVIZWFkZXI0LmlubmVyVGV4dCA9IFwiTGVhZFwiO1xuICAgIGhlYWRlckNvbnRhaW40LmFwcGVuZCh0aXRsZUhlYWRlcjQpO1xuXG4gICAgLy9pdGVtc1xuICAgIGNvbnN0IGludHJvQ29udGFpbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRyb0NvbnRhaW40LmNsYXNzTmFtZSA9IFwiaW50cm9Db250YWluXCI7XG4gICAgdGFiQ29udGFpbi5hcHBlbmQoaW50cm9Db250YWluNCk7XG5cbiAgICBjb25zdCBidWxsZXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBidWxsZXQ0LnNyYyA9IGJ1bGxldHBpYztcbiAgICBidWxsZXQ0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjc1cHhcIik7XG4gICAgaW50cm9Db250YWluNC5hcHBlbmQoYnVsbGV0NCk7XG4gICAgXG4gICAgY29uc3QgbGVhZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGVhZEhlYWRlci5pbm5lckhUTUwgPSBcIlNlZSBWZW5kb3JcIjtcbiAgICBpbnRyb0NvbnRhaW40LmFwcGVuZChsZWFkSGVhZGVyKTtcblxuICAgIGNvbnN0IGxlYWREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBsZWFkRGVzYy5pbm5lclRleHQgPSBcIlBsZWFzZSBzZWUgdGhlIHZlbmRvciBvbiBzdGFmZiBzZWxsaW5nIG1lcmNoYW5kaXNlIGZvciBhbGwgeW91ciBtZXJjZW5hcnkgbmVlZHMuXCI7XG4gICAgbGVhZEhlYWRlci5hcHBlbmQobGVhZERlc2MpO1xuXG4gICAgLy9mb290ZXJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuaWQgPSAnZm9vdGVyJztcbiAgICBjb250YWluZXIuYXBwZW5kKGZvb3Rlcik7XG5cbiAgICBjb25zdCBmb290ZXJCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwiZm9vdGVyYm9keVwiO1xuICAgIGZvb3RlckJvZHkuaW5uZXJIVE1MID0gXCJNYWRlIGJ5IFwiICsgXCI8YSBocmVmPWh0dHBzOi8vZ2l0aHViLmNvbS9HZW9yZ2UtR2FiZWNoYXZhPkdlb3JnZS1HYWJlY2hhdmE8L2E+XCIgKyBcIiBmb3IgVGhlIE9kaW4gUHJvamVjdFwiO1xuICAgIGZvb3Rlci5hcHBlbmQoZm9vdGVyQm9keSk7XG5cbiAgICBjb25zdCBmb290ZXJCb2R5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImZvb3RlcmJvZHlcIjtcbiAgICBmb290ZXJCb2R5Mi5pbm5lckhUTUwgPSBcIkdpdGh1YiBcIiArIFwiPGEgaHJlZj1odHRwczovL2dpdGh1Yi5jb20vR2VvcmdlLUdhYmVjaGF2YS9UT1AtcmVzdGF1cmFudFBhZ2U+U291cmNlIENvZGU8L2E+XCI7XG5cbiAgICAvL2FwcGVuZCB0aGlzIGZpbGUgdG8gd2Vic2l0ZVxuICAgIGZvb3Rlci5hcHBlbmQoZm9vdGVyQm9keTIpO1xuXG4gICAgY29udGVudC5hcHBlbmQodGFiQ29udGFpbik7XG59IiwiaW1wb3J0IHdvbWFucGljIGZyb20gJy4vd29tYW5idWxsZXQuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFiM0Z1bmN0aW9uKCkge1xuICAgIC8vZGVidWdnaW5nIGNvbnNvbGUubG9nXG4gICAgLy8gY29uc29sZS5sb2coXCJJIHJhbiB0YWIzRnVuY3Rpb25cIik7XG5cbiAgICAvL2RlbGV0ZSBjdXJyZW50IHRhYiBpZiBuZWVkZWRcbiAgICBpZiAoY3VycmVudFRhYiAhPSAwKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhZm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChhZm9vdCk7XG5cbiAgICBjb25zdCBwYXJlbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpOyBcblxuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJDb250YWluZXJcIik7XG4gICAgcGFyZW50Mi5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuXG4gICAgLy9zdGFydCBjcmVhdGluZyBwYWdlXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IHRhYkNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJDb250YWluLmlkID0gJ3RhYkNvbnRhaW5lcic7XG5cbiAgICAvL2hlYWRlclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuaWQgPSBcInN1YmhlYWRlclwiO1xuICAgIHRhYkNvbnRhaW4uYXBwZW5kKHRpdGxlKTtcblxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluLmNsYXNzTmFtZSA9IFwiaGVhZGVyQ29udGFpblwiO1xuICAgIGhlYWRlckNvbnRhaW4uaWQgPSBcImNvbnRhY3RIZWFkMVwiO1xuICAgIHRpdGxlLmFwcGVuZChoZWFkZXJDb250YWluKTtcblxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZUhlYWRlci5pbm5lckhUTUwgPSBcIiZlbXNwO1wiK1wiJmVtc3A7XCIgKyAnQ29udGFjdCBVcycgKyBcIiZlbXNwO1wiK1wiJmVtc3A7XCI7XG4gICAgaGVhZGVyQ29udGFpbi5hcHBlbmQodGl0bGVIZWFkZXIpO1xuXG5cbiAgICAvL3N1YmhlYWRlclxuICAgIGNvbnN0IGNvbnRhY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnRhY3RJbWcuc3JjID0gd29tYW5waWM7XG4gICAgY29udGFjdEltZy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI1MDBweFwiKTtcbiAgICB0YWJDb250YWluLmFwcGVuZChjb250YWN0SW1nKTtcblxuXG4gICAgY29uc3QgY29udGFjdENvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGFpbi5jbGFzc05hbWUgPSBcImhlYWRlckNvbnRhaW5cIjtcbiAgICBjb250YWN0Q29udGFpbi5pZCA9IFwiY29udGFjdEhlYWQyXCI7XG4gICAgdGFiQ29udGFpbi5hcHBlbmQoY29udGFjdENvbnRhaW4pO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdEhlYWRlci5pbm5lclRleHQgPSBcIkNvbnRhY3QgSW5mbzpcIjtcbiAgICBjb250YWN0Q29udGFpbi5hcHBlbmQoY29udGFjdEhlYWRlcik7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29udGFjdEluZm8uaW5uZXJIVE1MID0gXCI3NzctNzc3LTIwNzdcIiArIFwiPGJyIC8+XCIgKyBcIkxlYWRBbmRCcmVha2Zhc3RAZmFrZS5jb21cIjtcbiAgICBjb250YWN0SGVhZGVyLmFwcGVuZChjb250YWN0SW5mbyk7XG5cblxuICAgIC8vZm9vdGVyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG4gICAgY29udGFpbmVyLmFwcGVuZChmb290ZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImZvb3RlcmJvZHlcIjtcbiAgICBmb290ZXJCb2R5LmlubmVySFRNTCA9IFwiTWFkZSBieSBcIiArIFwiPGEgaHJlZj1odHRwczovL2dpdGh1Yi5jb20vR2VvcmdlLUdhYmVjaGF2YT5HZW9yZ2UtR2FiZWNoYXZhPC9hPlwiICsgXCIgZm9yIFRoZSBPZGluIFByb2plY3RcIjtcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckJvZHkpO1xuXG4gICAgY29uc3QgZm9vdGVyQm9keTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJmb290ZXJib2R5XCI7XG4gICAgZm9vdGVyQm9keTIuaW5uZXJIVE1MID0gXCJHaXRodWIgXCIgKyBcIjxhIGhyZWY9aHR0cHM6Ly9naXRodWIuY29tL0dlb3JnZS1HYWJlY2hhdmEvVE9QLXJlc3RhdXJhbnRQYWdlPlNvdXJjZSBDb2RlPC9hPlwiO1xuXG4gICAgLy9hcHBlbmQgdGhpcyBmaWxlIHRvIHdlYnNpdGVcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckJvZHkyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKHRhYkNvbnRhaW4pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJjb25zb2xlLmxvZygnSGVsbG8gV29ybGRzIScpO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB0YWIxRnVuY3Rpb24gZnJvbSAnLi90YWIxLmpzJztcbmltcG9ydCB0YWIyRnVuY3Rpb24gZnJvbSAnLi90YWIyLmpzJztcbmltcG9ydCB0YWIzRnVuY3Rpb24gZnJvbSAnLi90YWIzLmpzJztcblxuY29uc3QgYnV0dG9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiMVwiKTtcbmJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWIxRnVuY3Rpb24pO1xuXG5jb25zdCBidXR0b24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWIyXCIpO1xuYnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFiMkZ1bmN0aW9uKTtcblxuY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiM1wiKTtcbmJ1dHRvbjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYjNGdW5jdGlvbik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==