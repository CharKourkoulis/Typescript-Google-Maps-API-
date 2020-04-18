import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');

const user1 = new User();
const company1 = new Company();
const user2 = new User();
const company2 = new Company();
const user3 = new User();
const company3 = new Company();


customMap.addMarker(user1);
customMap.addMarker(company1);
customMap.addMarker(user2);
customMap.addMarker(company2);
customMap.addMarker(user3);
customMap.addMarker(company3);





