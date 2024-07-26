// const { parse } = require("csv-parse");
// const fs = require("fs");

// const results = [];
// const hab = [];

// // Create a readable stream from the CSV file
// function ishab(planet) {
//   return (
//     planet["koi_disposition"] === "CONFIRMED" &&
//     planet["koi_insol"] > 0.36 &&
//     planet["koi_insol"] < 1.11 &&
//     planet["koi_prad"] < 1.6
//   );
// }
// fs.createReadStream("kepler_data.csv")
//   .pipe(
//     parse({
//       comment: "#", // Ignore lines starting with '#'
//       columns: true, // Convert rows into objects using the header row as keys
//     })
//   )
//   .on("data", (data) => {
//     if (ishab(data)) {
//       hab.push(data);
//     }
//   })
//   .on("error", (err) => {
//     console.error(err);
//   })
//   .on("end", () => {
//     console.log(hab.length);
//     console.log("Done");
//   });

// // parse

// express
const express = require("express");
const app = express();

const friends = [
  {
    id: 0,
    name: " alberf",
  },
  {
    id: 1,
    name: "faser",
  },
];
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Misssing",
    });
  }
  const newF = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newF);
  res.json(newF);
});

app.get("/friends", function (req, res) {
  res.json(friends);
});

app.get("/friends/:friendID", (req, res) => {
  const friendID = Number(req.params.friendID);
  const friend = friends[friendID];

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friends Doesn, exisn",
    });
  }
});

app.listen(3000);
