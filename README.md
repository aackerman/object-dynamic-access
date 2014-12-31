## object-get

Lookup object values by path, including array indexes.

```js
get({ a: { b: { c: 'd' } } }, 'a.b.c'); // 'd'

get({ a: { b: { c: 'd' } } }, 'a.b.f'); // undefined

get({ a: { b: { c: [3,2,1,0] } } }, 'a.b.c.[3]'); // 0
```
