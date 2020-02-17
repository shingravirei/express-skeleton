const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.db'
});

const User = sequelize.define(
    'user',
    {
        // attributes
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        // options
    }
);

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connected to db...');
//         // Note: using `force: true` will drop the table if it already exists
//         User.sync({ force: true })
//             .then(() => {
//                 console.log('Table created');
//             })
//             .then(() => {
//                 console.log('Closing db.');
//                 sequelize.close();
//             });
//     })
//     .catch(err => {
//         console.log('Unable to connect to db.', err);
//     });

module.exports = { User, sequelize };
