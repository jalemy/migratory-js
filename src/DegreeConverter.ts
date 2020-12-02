import { GeoNumber } from './GeoNumber'

export class DegreeConverter {
  private _latitude: GeoNumber
  private _longitude: GeoNumber

  get latitude(): GeoNumber {
    return this._latitude
  }

  get longitude(): GeoNumber {
    return this._longitude
  }

  constructor(latitude: number, longitude: number) {
    this._latitude = new GeoNumber(latitude, true)
    this._longitude = new GeoNumber(longitude, false)
  }

  public toDms(): {
    latitude: {
      degree: number
      minute: number
      second: number
      direction: string
    }
    longitude: {
      degree: number
      minute: number
      second: number
      direction: string
    }
  } {
    return {
      latitude: this.latitude.toDms(),
      longitude: this.longitude.toDms(),
    }
  }

  public toDmm(): {
    latitude: { degree: number; minute: number; direction: string }
    longitude: { degree: number; minute: number; direction: string }
  } {
    return {
      latitude: this.latitude.toDmm(),
      longitude: this.longitude.toDmm(),
    }
  }
}
