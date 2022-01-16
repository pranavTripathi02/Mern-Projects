const UserModel = require("../models/user");
const userOperations = {
  async register(userObject) {
    const result = await UserModel.create(userObject);
    console.log("Result is ", result);
    return result._id;
  },
  async login({ userid, password }) {
    const result = await UserModel.findOne({
      userid: userid,
      password: password,
    });
    console.log("Login Result is ", result);
    return result;
  },
  // login({userid, password}){
  //     if(userid == password){
  //         return "Welcome "+userid;
  //     }
  //     else{
  //         return "Invalid userid or password";
  //     }
  // }
};
// userOperations.register({ userid: "admin", password: "admin", name: "admin" });
module.exports = userOperations;
