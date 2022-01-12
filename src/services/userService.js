import UserRepository from "../dao/userRepository.js";
class UserService {
    
    async signupUser(
        firstname,
        lastname,
        email,
        password
    ) {
        try {
            const userRepository = new UserRepository();
            const user = await userRepository.save(firstname, lastname, email, password);
            return user;
        }
        catch (err) {
            throw err;
        }
    }
}
export default UserService;