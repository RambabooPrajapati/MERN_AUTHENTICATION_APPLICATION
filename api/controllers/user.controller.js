import User from "../models/user.model.js";

export const test = (req, res) => {
    res.json({
        message: 'API is working !'
    })
}

// update user

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return res.status(401).json("You can update only your account !");
    }
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hash(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture,
                }
            },
            {
                new: true
            }
        );
        const {password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);

    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return res.status(401).json("You can delete only your account !");
    }
    try {
       await User.findById(req.params.id);
       res.status(200).json("User has been deleted....!")
    } catch (error) {
        res.status(500).json(error.message)
    }
}
