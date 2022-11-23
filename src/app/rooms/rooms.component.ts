import { Component} from '@angular/core';
import { Room, RoomList } from './room';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent{

  hotelName = 'Hilton Hotel';
  numOfRooms = 3;

  hideRooms = false;

  rooms: Room ={
    totalRooms : 20,
    availableRooms : 10,
    bookedRooms: 5,
  };

  roomList: RoomList[]=[{
    roomNumber: 104,
    roomType: 'Deluxe',
    amenities: 'Tv',
    price: 100,
    photos: 'prova_img1',
    checkinTime: new Date('11-Nov-2022'),
    checkoutTime: new Date('12-Nov-2022'),
},
{
  roomNumber: 105,
  roomType: 'Standard',
  amenities: 'Niente',
  price: 50,
  photos: 'prova_img2',
  checkinTime: new Date('11-Nov-2022'),
  checkoutTime: new Date('12-Nov-2022'),
},
];

  toggle(): void{
    this.hideRooms = !this.hideRooms;
  }

}
