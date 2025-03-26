const User = require("../models/user");

module.exports.profile = async function (req, res) {
    try {
        // Check if user_id exists in cookies
        if (req.cookies.user_id) {
            // Find user by ID
            let user = await User.findById(req.cookies.user_id);

            // If user is found, render profile page
            if (user) {
                return res.render('user_profile', {
                    title: 'Home',
                    user: user
                });
            } else {
                // User not found, redirect to sign-in
                return res.redirect('/users/sign-in');
            }
        } else {
            // If user_id not present in cookies, redirect to sign-in
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.error('Error in loading home page:', error);
        return res.redirect('/users/sign-in');
    }
};

module.exports.signUp = async function (req, res) {
    try {
        return res.render('user_sign_up', {
            title: "Codial | Sign Up"
        });
    } catch (err) {
        console.error("Error rendering sign-up page:", err);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports.signIn = async function (req, res) {
    try {
        return res.render('user_sign_in', {
            title: "Codial | Sign In"
        });
    } catch (err) {
        console.error("Error Rendering Sign In Page:", err);
        return res.status(500).send("Internal Server Error");
    }
};

// Create a new user
module.exports.create = async function (req, res) {
    try {
        // Check if passwords match
        if (req.body.password !== req.body.confirm_password) {
            return res.redirect('back');
        }

        // Check if user already exists
        let user = await User.findOne({ email: req.body.email });

        if (!user) {
            // Create a new user
            await User.create(req.body);
            return res.redirect('/users/sign-in');
        } else {
            console.log('User already exists');
            return res.redirect('back');
        }
    } catch (err) {
        console.log('Error in user sign up:', err);
        return res.redirect('back');
    }
};

// Create a session for user login
module.exports.createSession = async function (req, res) {
    try {
        // Find user by email
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            // Handle password mismatch
            if (user.password !== req.body.password) {
                return res.redirect('back');
            }
            // Handle session creation
            res.cookie('user_id', user.id);
            console.log('User logged in successfully!');
            return res.redirect('/users/profile');
        } else {
            // User not found
            console.log('User not found');
            return res.redirect('back');
        }
    } catch (error) {
        console.error('Error in creating session:', error);
        return res.redirect('back');
    }
};
