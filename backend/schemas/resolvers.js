const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { Chrrp } = require('../models');
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (parent, { userName }) => {
            return await User.findOne({ userName }).populate('chrrps');
        },
        chrrps: async (parent, { userName }) => {
            try {
                const params = userName ? { userName } : {};
                return await Chrrp.find({ ...params, deleted: false })
                    .sort({ createdAt: -1 })
                    .populate('chrrpAuthor');
            } catch (error) {

                console.error("Error fetching chrrps:", error);
                throw new Error("Failed to fetch chrrps");
            }
        },

        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id }).populate('chrrps');
                return user;

            }
            console.log('No user in context');
            throw new AuthenticationError('You need to be logged in!');
        },
        chrrp: async (parent, { chrrpId }) => {
            try {
                return await Chrrp.findById(chrrpId).populate('chrrpAuthor');
            } catch (error) {
                console.error("Error fetching chrrp:", error);
                throw new Error("Failed to fetch chrrp");
            }
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, { userName, email, password, bio }) => {
            const user = await User.create({ userName, email, password, bio });
            const token = signToken(user);
            return { token, user };
        },
        addChrrp: async (parent, { chrrpText, parentChrrpId }, context) => {
            if (context.user) {
                const chrrp = await Chrrp.create({
                    chrrpText,
                    chrrpAuthor: context.user._id,
                    parentChrrp: parentChrrpId || null,
                });

                await User.findByIdAndUpdate(
                    context.user._id,
                    { $push: { chrrps: chrrp._id } },
                    { new: true, useFindAndModify: false }
                );

                return chrrp;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        deleteChrrp: async (parent, { chrrpId }, context) => {
            if (context.user) {

                const chrrp = await Chrrp.findByIdAndUpdate(chrrpId, { deleted: true }, { new: true });
                if (!chrrp) {
                    throw new Error('No chrrp found with this id');
                }

                return chrrp;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addchrrpLikes: async (parent, { chrrpId }, context) => {
            if (context.user) {
                const chrrp = await Chrrp.findOneAndUpdate(
                    { _id: chrrpId },
                    { $inc: { chrrpLikes: 1 } },
                    { new: true }
                );
                return chrrp;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        followUser: async (parent, { userIdToFollow }, context) => {
            if (context.user) {
                const currentUser = await User.findById(context.user._id);
                const userToFollow = await User.findById(userIdToFollow);

                if (!currentUser.following.includes(userIdToFollow)) {
                    currentUser.following.push(userIdToFollow);
                    userToFollow.followers.push(context.user._id);

                    await currentUser.save();
                    await userToFollow.save();
                }

                return currentUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        async updateUser(parent, { userId, userName, password, bio }, context) {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }

            const updatedFields = {};
            if (userName) updatedFields.userName = userName;
            if (password) {
                const saltRounds = 10;
                updatedFields.password = await bcrypt.hash(password, saltRounds);
            }
            if (bio) updatedFields.bio = bio;

            return await User.findByIdAndUpdate(userId, updatedFields, { new: true });
        },



    },
};

module.exports = resolvers;
