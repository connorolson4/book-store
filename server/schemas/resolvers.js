const { User } = require('../models');
const { signToken } = require('../utils/auth')
const resolvers = {
    Query: {
       me: async (parent, args, context) => {
               return User.findOne( { _id: context.user._id}) ;
       },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
          const token = signToken(user);
          return { token, user };
        },
        loginUser: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new Error('No user found with this email address');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new Error('Incorrect credentials');
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
        saveBook: async (parent, { input },context) => {
          console.log(input, context.user)
            if (context.user) {
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: { savedBooks: input}},
                    {new: true}
                )
            }
        },
        removeBook: async (parent, { bookId, token}, context) => {
                return User.findOneAndUpdate(
                  {_id: context.user._id},
                    {$pull: {savedBooks: {_id: bookId}}},
                    {new: true}
                )
        },
}}

module.exports = resolvers;