import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';
import config from '../../config/config.json'; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const _config = config[env];

class Database {
    static db = {};
    static async setDB() {
        try {
            if (Object.keys(this.db).length === 0) {
                let sequelize = new Sequelize(_config.database, _config.username, _config.password, _config);
                const filenames = fs.readdirSync(__dirname)
                .filter(file => {
                    return (file.indexOf('.') !== 0 && (file !== basename) && file.slice(-3) === '.js');
                });
                for (let filename of filenames) {
                    const {default: modelFunc} = await import(path.resolve(__dirname, filename));
                    const model = modelFunc(sequelize, Sequelize);      
                    this.db[model.name] = model;
                }
                this.db.sequelize = sequelize;
                this.db.Sequelize = Sequelize;
            }
            return this.db;
        }
        catch (err) {
            console.error(err);
            throw new Error('Failed to connect to SQL.');
        }
    }

    static getDB() {
        return this.db;
    }
}

export default Database;