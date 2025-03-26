const User = require("../models/user");
module.exports.profile = function(req, res){
    
    return res.render('user_profile', {
        title: "User Profile"
    });
}

module.exports.signUp = async function(req, res){
   try {
    return res.render('user_sign_up',{
        title: "Codial | Sign Up"
    });
   } catch(err){
        console.error("Error rendering sign-up page:", err);
        return res.status(500).send("Internal Server Error");
   }

};
module.exports.signIn = async function(req, res){
    try {
        return res.render('user_sign_in',{
            title: "Codial | Sign In"
        });
    } catch (err) {
        console.error("Error Rendering Sign In Page:", err);
        return res.status(500).send("Internal Server Error");
    }
}


// get the sign up data



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
            return res.redirect('/users/sign_in');
        } else {
            console.log('User already exists');
            return res.redirect('back');
        }

    } catch (err) {
        console.log('Error in user sign up:', err);
        return res.redirect('back');
    }
};

module.exports.createSession = async function (req, res) {
    //todo
    
}