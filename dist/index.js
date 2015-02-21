"use strict";

exports.get = get;
exports.set = set;
function get(_x, _x2) {
  _function: while (true) {
    var obj = _x,
        path = _x2;
    next = undefined;
    if (typeof path == "string") {
      path = path.split(".");
    }
    if (obj === undefined) {
      return;
    }
    if (path.length === 0) {
      return obj;
    }
    if (obj === null) {
      return;
    }
    var next = path[0];
    if (next.match(/\[(.+)\]/)) {
      next = RegExp.$1;
    }
    _x = obj[next];
    _x2 = path.slice(1);
    continue _function;
  }
}

function set(obj, value, path) {
  path = path.split(".");
  for (i = 0; i < path.length - 1; i++) {
    obj = obj[path[i]];
  }
  obj[path[i]] = value;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});