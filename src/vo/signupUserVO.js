class SignUpUserVO {
    constructor(user, token) {
        this.uuid = user.uuid;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.email = user.email;
        this.token = token
    }
}
export default SignUpUserVO;