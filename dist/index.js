"use strict";

module.exports = get;
function get(_x, _x2) {
  _function: while (true) {
    var obj = _x,
        path = _x2;
    next = undefined;
    if (typeof path == "string") path = path.split(".");
    if (obj === undefined) {
      return;
    }if (path.length === 0) {
      return obj;
    }if (obj === null) {
      return;
    }var next = path[0];
    if (next.match(/\[(.+)\]/)) {
      next = RegExp.$1;
    }
    _x = obj[next];
    _x2 = path.slice(1);
    continue _function;
  }
}