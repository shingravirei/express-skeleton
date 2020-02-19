const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models/User');

passport.use(
    new LocalStrategy((username, password, done) => {
        // Match user
        User.findOne({
            where: { username }
        }).then(user => {
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

            // return done(null, false);
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
