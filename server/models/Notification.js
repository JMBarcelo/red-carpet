const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
  {
    _sender: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    _receiver: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    _group: {
      type: Schema.Types.ObjectId,
      ref: "Group"
    },
    message: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Notification = mongoose.model("Notification", NotificationSchema);
module.exports = Notification;