import { GeoNumber } from '../src/GeoNumber'

describe('GeoNumber(degree: 0, any)', () => {
  let instance: GeoNumber

  beforeEach(() => {
    instance = new GeoNumber(0, true)
  })

  test('toDms() is { 0, 0, 0, "", Function() }', () => {
    expect(instance.toDms()).toEqual({
      degree: 0,
      minute: 0,
      second: 0,
      direction: '',
      toString: expect.any(Function),
    })
  })

  test('toDms().toString() is 0°0′0″', () => {
    expect(instance.toDms().toString()).toEqual('0°0′0″')
  })

  test('toDmm() is { 0, 0, "", Function() }', () => {
    expect(instance.toDmm()).toEqual({
      degree: 0,
      minute: 0,
      direction: '',
      toString: expect.any(Function),
    })
  })

  test('toDmm().toString() is 0°0′', () => {
    expect(instance.toDmm().toString()).toEqual('0°0′')
  })
})

describe('GeoNumber(0.32, true)', () => {
  let instance: GeoNumber

  beforeEach(() => {
    instance = new GeoNumber(0.32, true)
  })

  test('toDms() is { 0, 19, 12, "N", Function() }', () => {
    expect(instance.toDms()).toEqual({
      degree: 0,
      minute: 19,
      second: 12,
      direction: 'N',
      toString: expect.any(Function),
    })
  })

  test('toDms().toString() is 0°19′12″N', () => {
    expect(instance.toDms().toString()).toEqual('0°19′12″N')
  })

  test('toDmm() is { 0, 19.2, "N", Function() }', () => {
    expect(instance.toDmm()).toEqual({
      degree: 0,
      minute: 19.2,
      direction: 'N',
      toString: expect.any(Function),
    })
  })

  test('toDmm().toString() is 0°19.2′N', () => {
    expect(instance.toDmm().toString()).toEqual('0°19.2′N')
  })
})

describe('GeoNumber(-15.293, true)', () => {
  let instance: GeoNumber

  beforeEach(() => {
    instance = new GeoNumber(-15.293, true)
  })

  test('toDms() is { 15, 17, 34.8, "S", Function() }', () => {
    expect(instance.toDms()).toEqual({
      degree: 15,
      minute: 17,
      second: 34.8,
      direction: 'S',
      toString: expect.any(Function),
    })
  })

  test('toDms().toString() is 15°17′34.8″S', () => {
    expect(instance.toDms().toString()).toEqual('15°17′34.8″S')
  })

  test('toDmm() is { 15, 17.58, "S", Function() }', () => {
    expect(instance.toDmm()).toEqual({
      degree: 15,
      minute: 17.58,
      direction: 'S',
      toString: expect.any(Function),
    })
  })

  test('toDmm().toString() is 15°17.58′S', () => {
    expect(instance.toDmm().toString()).toEqual('15°17.58′S')
  })
})

describe('GeoNumber(35.12, true)', () => {
  let instance: GeoNumber

  beforeEach(() => {
    instance = new GeoNumber(35.12, false)
  })

  test('toDms() is { 35, 7, 12, "E", Function() }', () => {
    expect(instance.toDms()).toEqual({
      degree: 35,
      minute: 7,
      second: 12,
      direction: 'E',
      toString: expect.any(Function),
    })
  })

  test('toDms().toString() is 35°7′12″E', () => {
    expect(instance.toDms().toString()).toEqual('35°7′12″E')
  })

  test('toDmm() is { 35, 7.2 "E", Function() }', () => {
    expect(instance.toDmm()).toEqual({
      degree: 35,
      minute: 7.2,
      direction: 'E',
      toString: expect.any(Function),
    })
  })

  test('toDmm().toString() is 35°7.2′E', () => {
    expect(instance.toDmm().toString()).toEqual('35°7.2′E')
  })
})

describe('GeoNumber(-135.12, false)', () => {
  let instance: GeoNumber

  beforeEach(() => {
    instance = new GeoNumber(-135.12, false)
  })

  test('toDms() is { 135, 7, 12, "W", Function() }', () => {
    expect(instance.toDms()).toEqual({
      degree: 135,
      minute: 7,
      second: 12,
      direction: 'W',
      toString: expect.any(Function),
    })
  })

  test('toDms().toString() is 135°7′12″W', () => {
    expect(instance.toDms().toString()).toEqual('135°7′12″W')
  })

  test('toDmm() is { 135, 7.2 "W", Function() }', () => {
    expect(instance.toDmm()).toEqual({
      degree: 135,
      minute: 7.2,
      direction: 'W',
      toString: expect.any(Function),
    })
  })

  test('toDmm().toString() is 135°7.2′W', () => {
    expect(instance.toDmm().toString()).toEqual('135°7.2′W')
  })
})
