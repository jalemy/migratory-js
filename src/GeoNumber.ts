/**
 * GeoNumber module
 * @module GeoNumber
 */

const DIRECTION = {
  EAST: 'E',
  SOUTH: 'S',
  WEST: 'W',
  NORTH: 'N',
} as const

/**
 * interface for dms
 *
 * @interface dms
 */
interface dms {
  degree: number
  minute: number
  second: number
  direction: string
  toString: () => string
}

/**
 * interface for dmm
 *
 * @interface dmm
 */
interface dmm {
  degree: number
  minute: number
  direction: string
  toString: () => string
}

/**
 * class to represent a single decimal latitude or longitude
 *
 * @export
 * @class GeoNumber
 */
export class GeoNumber {
  private _degree: number
  private _isLat: boolean

  /**
   * latitude or longitude as a decimal value
   *
   * @readonly
   * @type {number}
   * @memberof GeoNumber
   */
  get degree(): number {
    return this._degree
  }

  /**
   * boolean value for either latitude or longitude
   *
   * @readonly
   * @type {boolean}
   * @memberof GeoNumber
   */
  get isLat(): boolean {
    return this._isLat
  }

  /**
   * directional information, calculated from degree and isLat
   *
   * @readonly
   * @type {string}
   * @memberof GeoNumber
   */
  get direction(): string {
    if (this.degree === 0) {
      return ''
    }

    if (this.isLat) {
      return this.degree > 0 ? DIRECTION['NORTH'] : DIRECTION['SOUTH']
    } else {
      return this.degree > 0 ? DIRECTION['EAST'] : DIRECTION['WEST']
    }
  }

  /**
   * @constructor module:GeoNumber.GeoNumber
   * @param degree
   * @param isLat
   */
  constructor(degree: number, isLat: boolean) {
    this._degree = degree
    this._isLat = isLat
  }

  /**
   * return the number of digits after the decimal point
   *
   * @param value
   * @returns {number}
   */
  private getDecimalPointLength(value: number): number {
    const string = String(value).split('.')

    return string[1] ? string[1].length : 0
  }

  /**
   * return the rounded number multiplied by a coefficient
   *
   * @param value
   * @param coefficient
   * @returns {number}
   */
  private getNormalizeNumber(value: number, coefficient: number) {
    return Math.round(value * coefficient)
  }

  /**
   * return the object parse to dms
   * degree, minute, second are of number
   * direction is string
   *
   * toString() is a string consisting of all the elements.
   * e.g: 40°12′32″N
   *
   * @returns {dms}
   * @memberof GeoNumber
   */
  public toDms(): dms {
    const absDegree = Math.abs(this.degree)
    const coefficient = 10 ** this.getDecimalPointLength(absDegree)

    const degree = Math.floor(absDegree)
    const minute = Math.floor(
      ((this.getNormalizeNumber(absDegree, coefficient) -
        this.getNormalizeNumber(degree, coefficient)) *
        60) /
        coefficient
    )
    const second =
      (((this.getNormalizeNumber(absDegree, coefficient) -
        this.getNormalizeNumber(degree, coefficient)) *
        60 -
        this.getNormalizeNumber(minute, coefficient)) /
        coefficient) *
      60

    return {
      degree,
      minute,
      second,
      direction: this.direction,
      toString: () =>
        degree + '°' + minute + '′' + second + '″' + this.direction,
    }
  }

  /**
   * return the object parse to dmm
   * degree, minute are of number
   * direction is string
   *
   * toString() is a string consisting of all the elements.
   * e.g: 40°18′N
   *
   * @returns {dmm}
   * @memberof GeoNumber
   */
  public toDmm(): dmm {
    const absDegree = Math.abs(this.degree)
    const coefficient = 10 ** this.getDecimalPointLength(absDegree)

    const degree = Math.floor(absDegree)
    const minute =
      ((this.getNormalizeNumber(absDegree, coefficient) -
        this.getNormalizeNumber(degree, coefficient)) *
        60) /
      coefficient

    return {
      degree,
      minute,
      direction: this.direction,
      toString: () => degree + '°' + minute + '′' + this.direction,
    }
  }
}
