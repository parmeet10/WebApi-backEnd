import bcrypt from 'bcrypt';

class Bcrypt {
    constructor() {
        this.saltRounds = 10;
    };

    async encrypt(password) {
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async compare(password, hash) {
        const result = await bcrypt.compare(password, hash);
        return result;
    }
}
export default Bcrypt;