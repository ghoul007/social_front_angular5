export class User {
    public id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public friends: User[];
    constructor(firstName?, lastName?, email?, password?, id?, friends?) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.id = id;
        this.friends = friends;
    }

    ifFriendOf(user: User) {
        if (!this.friends) {
            return false;
        }

        return Boolean(this.friends.find(res => res.id === user.id))
    }

}