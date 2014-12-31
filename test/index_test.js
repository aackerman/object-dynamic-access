import get from '../';

describe('object-get', function(){
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

  it('returns array indexes', function(){
    expect(
      get({ a: { b: { c: [3,2,1,0] } } }, 'a.b.c.[3]')
    ).toEqual(0)
  });
});