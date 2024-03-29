import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";




export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json(error.message || "Something went wrong");
    }
  };
  
export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser){
        return res.status(404).json('User not found');
      } 
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return res.status(401).json('wrong credentials')
      };
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = validUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, { httpOnly: true, secure: true, expires: expiryDate })
        .status(200)
        .json({userData: rest, msg: "user login successfully"});
    } catch (error) {
      res.status(500).json(error|| "something went wrong");
    }
  };

  export const google = async(req, res)=>{
    try {
      const user = await User.findOne({email: req.body.email});
      if(user){
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest} =user._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1h
        res
        .cookie('access_token', token, {httpOnly: true, secure: true, expires: expiryDate})
        .status(200).json(rest);
      } else{
        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
        const hashedPassword = await bcryptjs.hash(generatedPassword, 10);
        const newUser = new User({
          username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-8),
          email: req.body.email, 
          password: hashedPassword, 
          profilePicture: req.body.photo
        });
        await newUser.save();
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
        const { password: hashedPassword2, ...rest } = newUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); //1h
        res
        .cookie("access_token", token, {
          httpOnly: expiryDate, secure: true, expires: expiryDate,
        }).status(200).json(rest);
      }
    } catch (error) {
      
    }
  }

  
export const signout = (req, res)=>{
    res.clearCookie('access_token').status(200).json({message: "Signout success"})
} 