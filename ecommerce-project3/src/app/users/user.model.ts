// this is the user model 
export interface UserModel{
    userID: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    usertype: string;
    // other properties
    // this should correspond to your UserPojo of the back end
}