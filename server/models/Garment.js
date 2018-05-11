const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GarmentSchema = new Schema(
  {
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    photo: String,
    /*photo: {
      url: String,
      secure_url: String,
    },*/
    size: String,
    brand: String,
    kind: String,
    /*color: {
      type: String,
      default: ''
    },*/
    dates: {
      type : Array,
      default: []
    },
    borrower: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Garment = mongoose.model("Garment", GarmentSchema);
module.exports = Garment;
