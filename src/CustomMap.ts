import { User } from "./User";
import { Company } from "./Company";

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    })
  }

}

