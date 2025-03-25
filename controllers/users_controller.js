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
    //todo
    
}
module.exports.createSession = async function (req, res) {
    //todo
    
}