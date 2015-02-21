import {get, set} from '../index';

describe('get', function(){
  it('returns deep key values', function(){
    expect(
      get({ a: { b: { c: 'd' } } }, 'a.b.c')
    ).toEqual('d');
  });

  it('returns undefined if a deep key doesnt exist', function(){
    expect(
      get({ a: { b: { c: 'd' } } }, 'a.b.f')
    ).toEqual(undefined);
  });

  it('returns bracket key contents', function(){
    var expected = [3,2,1,0];
    expect(
      get({ a: { b: { c: expected } } }, 'a.b.[c]')
    ).toEqual(expected);
  });

  it('returns array indexes', function(){
    expect(
      get({ a: { b: { c: [3,2,1,0] } } }, 'a.b.c.[3]')
    ).toEqual(0);
  });

  it('returns objects from array indexed objects', function(){
    expect(
      get({ a: { b: { c: [3,2,1,{ d: 'e' }] } } }, 'a.b.c.[3].d')
    ).toEqual('e');
  });
});

describe('set', function(){
  it('can set deep values', function(){
    var h = {};
    set(h, 5, 'a.b.c');
    expect(h.a.b.c).toEqual(5);
  });
});
