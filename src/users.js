const users = {
    username: String,
    password: String,
    userID: Number,
    email: String,
    phoneNumber: Number,
    get user() {
        return this.username;
    },
    get pass() {
        return this.password;
    },
    get ID() {
        return this.userID;
    },
    get getEmail() {
        return this.email;
    },
    get number() {
        return this.phoneNumber;
    },
    set setUser(username) {
        this.username = username;
    },
    set setPass(password) {
        this.password = password;
    },
    set setID(userID) {
        this.userID = userID;
    },
    set setEmail(email) {
        this.email = email;
    },
    set setNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}