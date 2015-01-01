(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  }
})(function (exports) {
  "use strict";

  exports["default"] = get;
  function get(obj, path) {
    if (typeof path == "string") path = path.split(".");
    if (obj === undefined) return;
    if (path.length === 0) return obj;
    if (obj === null) return;
    var next = path[0];
    if (next.match(/\[(.+)\]/)) {
      next = RegExp.$1;
    }
    return get(obj[next], path.slice(1));
  }
});