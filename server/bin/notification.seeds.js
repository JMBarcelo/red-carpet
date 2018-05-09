const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost/red-carpet");

const Notification = require("../models/Notification.model.js");

const notifications = [
  {
    _sender: '5af2d1141df9da5591fe4542',
    _receiver: '5af2d1141df9da5591fe4541',
    _group: '5af2d1141df9da5591fe4549',
    
  },
];

Notification.create(notifications, (err, notificationsDocs) => {
  if (err) {
    throw err;
  }
  console.log(`${notifications[0]._receiver} invites you to ${notifications[0]._group} Group.`)
  console.log(`Created ${notificationsDocs.length} notifications`);
  mongoose.connection.close();
});