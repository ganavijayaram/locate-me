import { User } from "./User";
import { Company } from "./Company";

//instead of importing and adding to the add Marker, we are instructung the classes
// that if they wan tit be added ot the addMarker method, then they need to ahve all the properties which
// are listed in the interface

interface Mappable {
  location : {
    lat: number,
    lng: number
  }
}

//creating instance of map
// now if some developer comes, he will have access to index file, so he might call any methods on the map variable
// and this might break the program
// so we will be using a separate class wheere will wrap methods and variables which caan be called on this maps object
// we are pretending theta developers dont have access to this class
export class CustomMap {
  // no one to access the map object outside the class
  private googleMap: google.maps.Map

  constructor(divId: string) {

    const mapElement = document.getElementById(divId);
      if (mapElement) {
        this.googleMap = new google.maps.Map(mapElement, {
          zoom: 1,
          center: {
            lat: 0,
            lng: 0,
          },
        });
      } else {
        // Handle the case where 'mapElement' is null
      }
  }

  //| will let you characters which are common to both
  // since only location is common we will be able to use only location
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}

