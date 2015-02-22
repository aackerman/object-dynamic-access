## object-dynamic-access

Lookup object values by path, including array indexes.

```js
import {get, set} from 'object-dynamic-access';

get({ a: { b: { c: 'd' } } }, 'a.b.c'); // 'd'

get({ a: { b: { c: 'd' } } }, 'a.b.f'); // undefined

get({ a: { b: { c: [3,2,1,0] } } }, 'a.b.c.[3]'); // 0

var h = { a: 5 };
set(h, 6, 'a');
console.log(h); // { a: 6 }
```
