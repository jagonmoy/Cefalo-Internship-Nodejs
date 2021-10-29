const mongoUser = require("../../models/userModel");
const {AuthDao} = require ("../auth/authDao");
const {UserDto} = require("../../dto/userDto");


class MongoAuthDao extends AuthDao {
    async signupUser(req) {
        const {email,username} = req.body;
        let newUser = await mongoUser.findOne({email});
        if (newUser) return "Email is not Unique";
        newUser = await mongoUser.findOne({username});
        if (newUser) return "Username is not Unique";
        newUser = await mongoUser.create(req.body);
        return new UserDto(newUser);
    }
    async signinUser(req) {
        const {email,password} = req.body;
        const user = await mongoUser.findOne({email}).select('password');
        if (!user) return null ;
        if (!await user.matchPasswords(password,user.password)) return null ;
        return new UserDto(user);
    }
}

module.exports = {MongoAuthDao};