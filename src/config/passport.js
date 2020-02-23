const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models/User');

passport.use(
    new LocalStrategy(async (username, password, done) => {
        const user = await User.findOne({
            where: { username }
        });

        if (!user) {
            console.log('error');
            return done(null, false, {
                error: 'That username is not registered.'
            });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                return done(null, user);
            }
            return done(null, false, {
                error: 'Incorrect password.'
            });
        });
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } }).then(user => {
        done(null, user);
    });
});

module.exports = passport;
