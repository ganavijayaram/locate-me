import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  color: string

  constructor() {
    this.name = faker.person.firstName()
    //this.location.lat = 12 will not work beacuse, when we create an instance
    //the location property which is an object will not be defined, it will be undefined or null
    // so we need to tell its an object and then asign values to it its properties
    this.location = {
      lat: (faker.location.latitude()),
      lng: (faker.location.longitude())
    }
    this.color = 'Yellow'
  }
  markerContent(): string {
      return `User Name: ${this.name}`
  }
}


