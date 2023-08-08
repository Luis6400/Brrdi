const bcrypt = require('bcrypt');
// need to fix this
const db = require('../config/connection.js');
const { User, Chrrp } = require('../models');
const userSeeds = require('./userSeeds.json');
const chrrpSeeds = require('./chrrpSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Chrrp.deleteMany({});
    // Create users with hashed password and grab the returned user with _id
    const createdUsers = await Promise.all(
      userSeeds.map(async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return await User.create(user);
      })
    );
    // Create chrrps and associate each with a user
    for (let chrrp of chrrpSeeds) {
      // find a user to associate with this chrrp
      const user = createdUsers.find((user) => user.userName === chrrp.chrrpAuthor);
      if (user) {
        chrrp.chrrpAuthor = user._id;  // replace userName with _id
        await Chrrp.create(chrrp);
      }
    }
    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

