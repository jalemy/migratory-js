import { DegreeConverter } from '../src/DegreeConverter'

describe('GeoConverter(-15.293, 135.12)', () => {
  let instance: DegreeConverter

  beforeEach(() => {
    instance = new DegreeConverter(-15.293, 135.12)
  })

  test('toDms() is ...', () => {
    expect(instance.toDms()).toEqual({
      latitude: {
        degree: 15,
        minute: 17,
        second: 34.8,
        direction: 'S',
        toString: expect.any(Function),
      },
      longitude: {
        degree: 135,
        minute: 7,
        second: 12,
        direction: 'E',
        toString: expect.any(Function),
      },
    })
  })

  test('toDmm() is ...', () => {
    expect(instance.toDmm()).toEqual({
      latitude: {
        degree: 15,
        minute: 17.58,
        direction: 'S',
        toString: expect.any(Function),
      },
      longitude: {
        degree: 135,
        minute: 7.2,
        direction: 'E',
        toString: expect.any(Function),
      },
    })
  })
})
