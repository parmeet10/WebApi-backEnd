import bcrypt from 'bcrypt';
import util from 'util';

class Encryption {
    constructor() {
        this.saltRounds = 10;
        util.promisify(bcrypt.genSalt);
        util.promisify(bcrypt.hash);
        util.promisify(bcrypt.compare);
    };

    async encrypt(data) {
        try {
            const salt = await bcrypt.genSalt(this.saltRounds);
            const hash = await bcrypt.hash(data, salt);
            return hash;
        }
        catch (err) {
            throw err;
        }
    }

    async decrypt(data) {
        try {
            const result = await bcrypt.compare(data, hash);
            return result;
        }
        catch (err) {
            throw err;
        }
    }
}

export default Encryption;