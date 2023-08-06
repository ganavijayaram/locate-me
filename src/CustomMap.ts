  //creating instance of map
// now if some developer comes, he will have access to index file, so he might call any methods on the map variable
// and this might break the program
// so we will be using a separate class wheere will wrap methods and variables which caan be called on this maps object
// we are pretending theta developers dont have access to this class
export class CustomMap {
  // no one to access the map object outside the class
  private googleMap: google.maps.Map

  constructor() {

    const mapElement = document.getElementById('map');
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
}