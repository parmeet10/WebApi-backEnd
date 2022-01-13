class User {
    constructor(id, uuid, firstname, lastname, email, password) {
        this.id = id;
        this.uuid = uuid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    };

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getUUID() {
        return this.uuid;
    }

    setUUID(uuid) {
        this.uuid = uuid;
    }

    getFirstname() {
        return this.firstname;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
    }

    getLastname() {
        return this.lastname;
    }

    setLastname(lastname) {
        thie.lastname = lastname;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    toJSON() {
        return JSON.parse(this);
    }
}
export default User;