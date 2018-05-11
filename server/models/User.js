const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,
    birthday: Date,
    city: String,
    image: String,
    /*image: {
      url: String,
      secure_url: String,
    },*/
    isAdmin: {
      type: Boolean,
      default: false
    },
    clothes: {
      type: Array,
      default: []
    },
    favourites: {
      type: Array,
      default: []
    },
    groups: {
      type: Array,
      default: []
    },
    notifications: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
