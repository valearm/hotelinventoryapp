export interface Room {
    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;
}

export interface RoomList{
    roomNumber: number;
    roomType: String;
    amenities: String;
    price: number;
    photos: String;
    checkinTime: Date;
    checkoutTime: Date;
}