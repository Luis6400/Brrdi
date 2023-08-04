const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { Chrrp } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (parent, { userName }) => {
            return await User.findOne({ userName }).populate('chrrps');
        },
        chrrps: async (parent, { userName }) => {
            const params = userName ? { userName } : {};
            return await Chrrp.find(params).sort({ createdAt: -1 });
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return await User.findOne({ _id: context.user._id }).populate('chrrps');
            }
            throw new AuthenticationError('You need to be logged in!');
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
        addUser: async (parent, { userName, email, password }) => {
            const user = await User.create({ userName, email, password });
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
                const chrrp = await Chrrp.findByIdAndRemove(chrrpId);
                if (!chrrp) {
                    throw new Error('No chrrp found with this id');
                }
                
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { chrrps: chrrp._id } },
                    { new: true }
                );
                
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
        
    },
};

module.exports = resolvers;
