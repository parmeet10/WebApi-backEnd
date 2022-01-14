import mongoose from 'mongoose';
import config from '../config/config.json';
const env = process.env.NODE_ENV;
console.log(process.env.NODE_ENV);
class Mongo {
    static connection = null;
    constructor() {
        this.url = config.mongo[env].url;
    };

    async connect() {
        await mongoose.connect(this.url);
    }
}
export default Mongo;