const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavouritesListSchema = new Schema(
  {
    title: String,
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    clothes: {
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

const FavouritesList = mongoose.model("FavouritesList", FavouritesListSchema);
module.exports = FavouritesList;