const mongoose = require("mongoose");

const url = "mongodb+srv://SocialApp:SocialApp@socialdb.kmkybsp.mongodb.net/QuoraDB?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
