// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lVIsy":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c3997038cf4dac78";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4XdA2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modalClose = require("./modalClose");
var _modalTrailer = require("./modalTrailer");
var _fetchPopularJs = require("./popular/fetchPopular.js");
var _fetchPopularJsDefault = parcelHelpers.interopDefault(_fetchPopularJs);
var _markupModalCardJs = require("./markupModalCard.js");
const galleryList = document.querySelector(".js-gallery-list");
const modalBackdrop = document.querySelector(".js-backdrop");
const modal = document.querySelector(".js-modal");
const trailerBackdrop = document.querySelector(".js-backdrop-trailer");
const trailerIframe = document.querySelector(".js-trailer");
const cardContainer = document.querySelector(".card-container");
const btnwatched = document.querySelector(".modal-btn-watched");
console.log(btnwatched);
const btnqueue = document.querySelector(".modal-btn-queue");
galleryList.addEventListener("click", onCardClick);
modalBackdrop.classList.add("is-hidden");
const populаrFilms = new (0, _fetchPopularJsDefault.default)();
let arrayJSON;
let dataFilms;
let film;
function onCardClick(event) {
    const isCardMovie = event.target.closest(".gallery-items");
    if (!isCardMovie) return;
    let idFilm = isCardMovie.dataset.modal;
    onOpenModal(idFilm);
}
function findGenre(obj) {
    let arrayGenre = obj.genre_ids;
    let g = arrayGenre[0];
    let genreFilms = JSON.parse(localStorage.getItem("genre")).genres;
    let currentGenre = genreFilms.find((item)=>item.id === g);
    if (!currentGenre) return "Other";
    return currentGenre.name;
}
function onOpenModal(id) {
    event.preventDefault();
    document.addEventListener("keydown", (0, _modalClose.modalKeypressEsc));
    modalBackdrop.addEventListener("click", (0, _modalClose.closeOnClick));
    modalBackdrop.classList.remove("is-hidden");
    document.body.classList.add("modal-open");
    let needId = Number(id);
    arrayJSON = localStorage.getItem("array-films");
    dataFilms = JSON.parse(arrayJSON);
    film = dataFilms.find((film1)=>film1.id === needId);
    let genre_ids = findGenre(film);
    modal.insertAdjacentHTML("beforeend", "<div> </div>");
    modal.insertAdjacentHTML("afterbegin", (0, _markupModalCardJs.makeModalCard)(film, genre_ids));
//   populаrFilms.fetch(1)
//     .then(search => {
//       let api = search.results;
//       return api;
//     })
//     .then(api => {
//       console.log(api);
//     })
// .then(movie => {
//     let currentPageLanguage = localStorage.getItem('language');
//     if (currentPageLanguage === 'en-US') {
//       cardContainer.insertAdjacentHTML('beforeend', aboutMovieTemplates(movie));
//     } else if (currentPageLanguage === 'ru-RU') {
//       cardContainer.insertAdjacentHTML('beforeend', aboutMovieTemplatesRU(movie));
//     }
//     const w = localStorageAPI.check(localStorageAPI.KEYS.WATCHED, movie);
//     const q = localStorageAPI.check(localStorageAPI.KEYS.QUEUE, movie);
//     if (w) {
//       document.querySelector('.js-modal-btn-watched').classList.toggle('visually-hidden');
//       document.querySelector('.js-modal-btn-remove-watched').classList.toggle('visually-hidden');
//     }
//     document.querySelector('.js-modal-btn-watched').addEventListener('click', onWatchedAdd);
//     function onWatchedAdd(event) {
//       event.target.classList.toggle('visually-hidden');
//       event.target.nextElementSibling.classList.toggle('visually-hidden');
//       localStorageAPI.set(localStorageAPI.KEYS.WATCHED, movie);
//     }
//     document
//       .querySelector('.js-modal-btn-remove-watched')
//       .addEventListener('click', onWatchedRemove);
//     function onWatchedRemove(event) {
//       event.target.classList.toggle('visually-hidden');
//       event.target.previousElementSibling.classList.toggle('visually-hidden');
//       localStorageAPI.delete(localStorageAPI.KEYS.WATCHED, movie);
//     }
//     if (q) {
//       document.querySelector('.js-modal-btn-queue').classList.toggle('visually-hidden');
//       document.querySelector('.js-modal-btn-remove-queue').classList.toggle('visually-hidden');
//     }
//     document.querySelector('.js-modal-btn-queue').addEventListener('click', onQueueAdd);
//     function onQueueAdd(event) {
//       event.target.classList.toggle('visually-hidden');
//       event.target.nextElementSibling.classList.toggle('visually-hidden');
//       localStorageAPI.set(localStorageAPI.KEYS.QUEUE, movie);
//     }
//     document.querySelector('.js-modal-btn-remove-queue').addEventListener('click', onQueueRemove);
//     function onQueueRemove(event) {
//       event.target.classList.toggle('visually-hidden');
//       event.target.previousElementSibling.classList.toggle('visually-hidden');
//       localStorageAPI.delete(localStorageAPI.KEYS.QUEUE, movie);
//     }
//     document.querySelector('.modal-img-play')
//       .addEventListener('click', watchTrailer);
//   });
}
btnwatched.addEventListener("click", onWatchedClick);
let filmList = [];
function onWatchedClick(evt) {
    evt.preventDefault();
    const filmObj = film;
    filmList.push(filmObj);
    console.log(filmList);
    localStorage.setItem("watched", JSON.stringify(filmList));
}
btnqueue.addEventListener("click", onQueueClick);
let filmQueueList = [];
function onQueueClick(evt) {
    evt.preventDefault();
    const filmQueueObj = film;
    filmQueueList.push(filmQueueObj);
    console.log(filmQueueList);
    localStorage.setItem("queue", JSON.stringify(filmQueueList));
}
let list = new Array();
class localStorageAPI {
    constructor(){}
    static get KEYS() {
        return {
            WATCHED: "watched",
            QUEUE: "queue",
            THEME: "theme"
        };
    }
    static get(key) {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }
    static set(key, Obj) {
        if (!localStorageAPI.get(key)) {
            list.push(Obj);
            localStorage.setItem(key, JSON.stringify(list));
            list = [];
            return;
        }
        list = localStorageAPI.get(key);
        if (list.find((item)=>item.id === Obj.id) !== undefined) return;
        list.push(Obj);
        localStorage.setItem(key, JSON.stringify(list));
    }
    static delete(key, Obj) {
        if (!localStorageAPI.get(key)) return;
        let list1 = localStorageAPI.get(key);
        const searchIndex = list1.findIndex((item)=>item.id === Obj.id);
        if (searchIndex !== -1) {
            list1.splice(searchIndex, 1);
            localStorage.setItem(key, JSON.stringify(list1));
        }
    }
    static check(key, Obj) {
        if (!localStorageAPI.get(key)) return false;
        list = localStorageAPI.get(key);
        if (list.find((item)=>item.id === Obj.id)) return true;
        return false;
    }
    static getDataPerPage(key, page = 1, perPage = 18) {
        const data = localStorageAPI.get(key);
        if (!data || data.length === 0) return;
        let forRender;
        forRender = data.slice(0 + perPage * (page - 1), perPage * page);
        if (page === 1) forRender = data.slice(0, perPage);
        return forRender;
    }
}

},{"./modalClose":"bEZwn","./modalTrailer":"lKZer","./popular/fetchPopular.js":"efOGj","./markupModalCard.js":"5bYf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bYf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// const modal = document.querySelector('.js-modal');
parcelHelpers.export(exports, "makeModalCard", ()=>makeModalCard);
function makeModalCard({ id , title ="" , name ="" , poster_path , overview , vote_average , vote_count , popularity  }, data) {
    let genre_ids = data;
    return `<button type="button" class="modal-close-btn js-close-btn">
      <svg class="modal-close-btn__icon" width="14" height="14">
        <use href='/src/images/sprite.svg#icon-close'></use>
      </svg>
    </button>
    <div class="card-container">
      <div class='modal-wrapper js-modal-wrapper' data-id='${id}'>
        <div class='wrapper-img'>
          <img
            class='js-card-img'
            src='https://image.tmdb.org/t/p/w500${poster_path}'
            alt='moviе poster: ${title}${name}'
          />
          <div class='overlay'>
            <img class='modal-img-play' src="/images/play-orange.png" alt='icon-play'/>
          </div>
        </div>
        <div class='modal-right-part'>
          <h2 class='modal-main-title'>${title}${name}</h2>
          <div class='modal-lists-wrapper'>

            <ul class='modal-list'>
            <li class='modal-list__info--item'><h3 class='modal-list__info--title'>Vote / Votes</h3><p class='modal-list__content--item item-flex'><span class='modal-item-description-rating'>${vote_average}</span> / ${vote_count}</p></li>
            <li class='modal-list__info--item'><h3 class='modal-list__info--title'>Popularity</h3><p class='modal-list__content--item'>${popularity}</p></li>
            <li class='modal-list__info--item'><h3 class='modal-list__info--title'>Original Title</h3><p class='modal-list__content--item modal-list__content--title'>${title}</p></li>
            <li class='modal-list__info--item'><h3 class='modal-list__info--title'>Genre</h3><p class='modal-list__content--item'>${genre_ids}</p></li>
          </ul>

          </div>
          <h3 class='modal-secondary-title'>About</h3>
          <p class='modal-film-description'>${overview}</p>
          <div class='modal-wrapper-btn'>
          <button class='modal-btn modal-btn-watched js-modal-btn-watched' type='button'>add to watched</button>
          <button
            class='visually-hidden modal-btn modal-btn-remove modal-btn-remove-watched js-modal-btn-remove-watched'
            type='button'
          >remove from watched</button>
          <button class='modal-btn modal-btn-queue js-modal-btn-queue' type='button'>add to queue</button>
          <button
            class='visually-hidden modal-btn modal-btn-remove modal-btn-remove-queue js-modal-btn-remove-queue'
            type='button'
          >remove from queue</button>
        </div>
                  </div>
      </div>
    </div>
 `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lVIsy","4XdA2"], "4XdA2", "parcelRequired7c6")

//# sourceMappingURL=index.cf4dac78.js.map
