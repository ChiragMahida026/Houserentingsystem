const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    // @ts-ignore
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log('MongoDb Connected.....');
  } catch (error) {
    console.error('MOngoDb NotConnected....');
    //Exit process with failure
  }
};
module.exports = connectDB;
