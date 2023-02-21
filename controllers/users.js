const User = require('../schema/user')

const userController = {
    getUser: async (req, res) => {
        const users = await User.find({});
        res.status(200).json({ message: 'succes', data: users });
    },
    createUser: async (req, res) => {
        const newUser = req.body;
        const user = await User.find({ email: newUser.email });


        if(user.length) {
            return res.status(400).json({ message: 'User already exists', data: user[0] });
        }

        const created = new User(newUser);
        const data = await created.save();

        res.status(200).json({ message: 'user created' });


    },
    updateUser: async (req, res) => {
        const id = req.params.id;
        const updatedUser = req.body;

        const result = await User.findByIdAndUpdate(id, updatedUser, { new: true });

        res.json({ message: 'updated', data: result });


    },
    deleteUser: async (req, res) => {
        const id = req.params.id;

        const result = await User.findByIdAndDelete(id);

        res.status(200).json({ message: 'Deleted', data: result });

    }
}

module.exports = userController;