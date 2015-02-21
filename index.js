export function get(obj, path) {
  if (typeof path == "string") { path = path.split("."); }
  if (obj === undefined) { return; }
  if (path.length === 0) { return obj; }
  if (obj === null) { return; }
  var next = path[0];
  if (next.match(/\[(.+)\]/)) { next = RegExp.$1; }
  return get(obj[next], path.slice(1));
}

export function set(obj, value, path) {
  path = path.split('.');
  for (var i = 0; i < path.length - 1; i++) {
    if (obj[path[i]] === undefined) { obj[path[i]] = {}; }
    obj = obj[path[i]];
  }
  obj[path[i]] = value;
}
