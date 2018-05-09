const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost/red-carpet");

const FavouritesList = require("../models/FavouritesList.model.js");
const User = require("../models/User.model.js");
const Group = require("../models/Group.model.js");
const Garment = require("../models/Garment.model.js");

const users = [
  {
    username: "Pepa",
    password: "password1",
    email: "pepa@ironhack.com",
    firstname: "Pepa",
    secondname: "Pérez",
    birthday: "1999-02-08",
    city: "Madrid",
    image: "http://res.cloudinary.com/jmbarcelo/image/upload/v1524819380/folder-name/1524819379751.png"
  },
  {
    username: "Pere",
    password: "password2",
    email: "pepe@ironhack.com",
    firstname: "Pere",
    secondname: "Pepez",
    birthday: "1989-11-30",
    city: "Barcelona",
    image: "http://res.cloudinary.com/jmbarcelo/image/upload/v1524796434/folder-name/1524796434186.jpg"
  }
];

User.create(users, (err, userDocs) => {
  if (err) {
    throw err;
  }
  const user1 = userDocs[0];
  const user2 = userDocs[1];
  console.log(`User ${user1._id} created`);
  console.log(`User ${user2._id} created`);
  const clothes = [
    {
      _user: user1._id,
      photo:
        "http://res.cloudinary.com/jmbarcphoto/upload/v1525796200/camper-boots.jpg",
      size: "36",
      brand: "Camper",
      kind: "Boots",
      color: "Leather"
    },
    {
      _user: user1._id,
      photo:
        "http://res.cloudinary.com/jmbarcelo/image/upload/v1525796200/camper-boots.jpg",
      size: "36",
      brand: "Camper",
      kind: "Boots",
      color: "Leather"
    },
    {
      _user: user1._id,
      photo:
        "http://res.cloudinary.com/jmbarcelo/image/upload/v1525796200/camper-boots.jpg",
      size: "36",
      brand: "Camper",
      kind: "Boots",
      color: "Leather"
    },
    {
      _user: user2._id,
      photo:
        "http://res.cloudinary.com/jmbarcelo/image/upload/v1525796200/camper-boots.jpg",
      size: "XL",
      brand: "Levi's",
      kind: "Jacket",
      color: "Cloth"
    },
    {
      _user: user2._id,
      photo:
        "http://res.cloudinary.com/jmbarcelo/image/upload/v1525796200/camper-boots.jpg",
      size: "XL",
      brand: "Levi's",
      kind: "Jacket",
      color: "Cloth"
    }
  ];

  const groups = [
    {
      name: 'My IronHackBCN friends',
      _user: user1._id,
      users: user1._id
    },
    {
      name: 'My IronHackMadrid friends',
      _user: user2._id,
      users: user2._id
    }
  ];

  const favouritesLists = [
    {
      title: 'Favourites Boots',
      _user: user1._id
    },
    {
      title: 'Favourites Jackets',
      _user: user2._id
    }
  ];

  Garment.create(clothes, (err, clothesDocs) => {
    if (err) {
      throw err;
    }
    console.log(`Created ${clothesDocs.length} clothes`);
    mongoose.connection.close();
  });

  Group.create(groups, (err, groupsDocs) => {
    if (err) {
      throw err;
    }
    console.log(`Created ${groupsDocs.length} groups`);
    mongoose.connection.close();
  });

  FavouritesList.create(favouritesLists, (err, favouritesListsDocs) => {
    if (err) {
      throw err;
    }
    console.log(`Created ${favouritesListsDocs.length} favouritesLists`);
    mongoose.connection.close();
  });
});
