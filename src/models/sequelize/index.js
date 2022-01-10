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
const db = {};

let sequelize = new Sequelize(_config.database, _config.username, _config.password, _config);
const filenames = fs.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0 && (file !== basename) && file.slice(-3) === '.js');
});
console.log(filenames);
async function setupDatabase() {
    for (let filename of filenames) {
        const {default: file} = await import(path.resolve(__dirname, filename));
        const model = file(sequelize, Sequelize.DataTypes);
        db[model] = model;
        console.log(db);
    }
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    return db;
}

export default setupDatabase;


// .forEach(async filename => {
//     // return { default: modelfunction }
//     const {default: file} = await import(path.resolve(__dirname, filename));
//     const model = file(sequelize, Sequelize.DataTypes);
//     db[model] = model;
//     console.log(db);
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// export default db;