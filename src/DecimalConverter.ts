/**
 * DecimalConverter module
 * @module DecimalConverter
 */

import { GeoNumber, dms, dmm } from './GeoNumber'

/**
 * class for converting latitude and longitude of decimal number
 *
 * @class DecimalConverter
 */
export class DecimalConverter {
  private _latitude: GeoNumber
  private _longitude: GeoNumber

  /**
   * latitude as a GeoNumber
   *
   * @readonly
   * @type {GeoNumber}
   * @memberof DecimalConverter
   */
  get latitude(): GeoNumber {
    return this._latitude
  }

  /**
   *  longitude as a GeoNumber
   *
   * @readonly
   * @type {GeoNumber}
   * @memberof DecimalConverter
   */
  get longitude(): GeoNumber {
    return this._longitude
  }

  /**
   * @constructor module:GeoConverter.GeoConverter
   * @param latitude
   * @param longitude
   */
  constructor(latitude: number, longitude: number) {
    this._latitude = new GeoNumber(latitude, true)
    this._longitude = new GeoNumber(longitude, false)
  }

  /**
   * return the object(latitude, longitude) to dms
   * degree, minute, second are of number
   * direction is string
   *
   * toString() is a string consisting of all the elements.
   * e.g: 40°12′32″N
   *
   * @returns {dms, dms}
   * @memberof DecimalConverter
   */
  public toDms(): {
    latitude: dms
    longitude: dms
  } {
    return {
      latitude: this.latitude.toDms(),
      longitude: this.longitude.toDms(),
    }
  }

  /**
   * return the object(latitude, longitude) to dmm
   * degree, minute, second are of number
   * direction is string
   *
   * toString() is a string consisting of all the elements.
   * e.g: 40°18′N
   *
   * @returns {dmm, dmm}
   * @memberof DecimalConverter
   */
  public toDmm(): {
    latitude: dmm
    longitude: dmm
  } {
    return {
      latitude: this.latitude.toDmm(),
      longitude: this.longitude.toDmm(),
    }
  }
}
