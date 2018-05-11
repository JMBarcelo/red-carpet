const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema(
  {
    name: String,
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    users: {
      type: Array,
      default: [
        {
          'type': Schema.Types.ObjectId,
          'ref': "User"
        }
      ]
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

const Group = mongoose.model("Group", GroupSchema);
module.exports = Group;
