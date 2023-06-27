export interface UserProfile {
    "profilePictureFileString": "string";
    "emailId": "string";
    "firstName": "string";
    "lastName": "string";
    "phoneNumber": "string";
    "designation": "number";
    "modeOfWork": "number";
    "city": "number";
    "floor": "number";
    "column": "number";
    "seat": "number";
    "days": "number";
    "data": "[]";
}

//For User Profile Response
export class UserProfileResponse {
    public response: string;
    public error: string;

    constructor(
        response: string,
        error: string,
    ) {
        this.response = response;
        this.error = error;
    }
}

//For User Profile Request
export class UserProfileRequest {
    public profilePictureFileString: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public designation: number;
    public modeOfWork: number;
    public city: number;
    public floor: number;
    public column: number;
    public seat: number;
    public workingDays: number;

    constructor(
        profilePictureFileString: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        designation: number,
        modeOfWork: number,
        city: number,
        floor: number,
        column: number,
        seat: number,
        workingDays: number
    ) {
        this.profilePictureFileString = profilePictureFileString;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.designation = designation;
        this.modeOfWork = modeOfWork;
        this.city = city;
        this.floor = floor;
        this.column = column;
        this.seat = seat;
        this.workingDays = workingDays;
    }
}

//For CityId, FloorId, Mode-of-works, Designation, Cities
export class data {
    public id: number;
    public name: string;
    public error: string;

    constructor(
        id: number,
        name: string,
        error: string,
    ) {
        this.id = id;
        this.name = name;
        this.error = error;
    }
}

//For Working Days
export class workingdays {
    public id: number;
    public day: string;
    public error: string;

    constructor(
        id: number,
        day: string,
        error: string,
    ) {
        this.id = id;
        this.day = day;
        this.error = error;
    }
}

//For ColumnId
export class columnId {
    public id: number;
    public seatnumber: string;
    public booked: boolean;
    public error: string;

    constructor(
        id: number,
        seatnumber: string,
        booked: boolean,
        error: string,
    ) {
        this.id = id;
        this.seatnumber = seatnumber;
        this.booked = booked;
        this.error = error;
    }
}

//For Profile picture 
export class isUpdated {
    public updated: Boolean;
    public profilePictureFileString: string;

    constructor(
        updated: Boolean,
        profilePictureFileString: string,
    ) {
        this.updated = updated;
        this.profilePictureFileString = profilePictureFileString;
    }
}
