const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const UserService = {
    Login: async (req, res) => {
        const {username, password} = req.body;
        try{
            await User.findOne({username: username, password: password}).exec().then(data => {
                if (!data || data.password != password) {
                    return res.json({success: false, message: "Wrong details please check at once"});
                  }
                  let token;
                  try {
                    token = jwt.sign(
                      { userId: data.id, username: data.username },
                      "secretkeyappearshere",
                      { expiresIn: "1h" }
                    );
                  } catch (err) {
                    console.log(err);
                    const error = new Error("Error! Something went wrong.");
                    throw error;
                  }
                  return res.status(200).json({success: true, data:{userId: data.id, username: data.username, token}});
                  
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
        
        
    },
    SignUp: async (req,res) => {
        const { username, password } = req.body;
        console.log(username, password)
  const newUser = User({
    username,
    password,
  });
 
  try {
    await newUser.save();
  } catch {
    const error = new Error("Error! Something went wrong.");
    throw error;
  }
  let token;
  try {
    token = jwt.sign(
      { userId: newUser.id, username: newUser.username },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Error! Something went wrong.");
    throw error;
  }
  res
    .status(201)
    .json({
      success: true,
      data: { userId: newUser.id,
          username: newUser.username, token: token },
    });
    }
}

module.exports = UserService;