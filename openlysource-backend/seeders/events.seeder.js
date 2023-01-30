const { Seeder } = require("mongoose-data-seed");
const { Event } = require("../models");

const data = [
  {
    eventName: "Google Summer of Code",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Google_Summer_of_Code_sun_logo_2022.svg/1200px-Google_Summer_of_Code_sun_logo_2022.svg.png",
    description:
      "Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors",
    websiteUrl: "https://summerofcode.withgoogle.com/",
    months: "Jan-April",
  },
];

class EventSeeder extends Seeder {
  async shouldRun() {
    return Event.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Event.create(data);
  }
}

module.exports = EventSeeder;
