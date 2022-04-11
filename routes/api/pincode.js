const NodeGeocoder = require("node-geocoder");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let options = {
    provider: "openstreetmap",
  };

  // @ts-ignore
  let geoCoder = NodeGeocoder(options);

  let st = "";
  let city = "";
  let country = "";
  geoCoder
    .geocode(req.body.code)
    .then((abc) => {
      abc.forEach(function (temp) {
        const tempsid = temp.formattedAddress.split(",");
        st = tempsid[2].trim();
        city = tempsid[1].trim();
        country = temp.country.trim();
      });

      res.json({ state: st, city: city, country: country });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
