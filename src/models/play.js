const User = require('./User');

User.create({
    username: 'zeze',
    email: 'zeze@gmail.com',
    password: 'rtrth6df0'
}).then(() => {
    console.log('User created');
});
