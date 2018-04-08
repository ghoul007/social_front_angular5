export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public id: any;
    public friends: any;
    constructor(firstName?, lastName?, email?, password?, id?, friends?) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.id = id;
        this.friends = friends;
    }
}