/// <reference types="@types/google.maps" /> 
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User()
const company = new Company()
const customMap = new CustomMap('map')

//customMap.googleMap -> cannot access hence saving from calling methods which might break the call

console.log(user, company)
customMap.addMarker(user)
customMap.addMarker(company)
