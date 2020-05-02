const faker = require('faker');

const db = require('./db.js');

const homes = [];

for (let i = 0; i < 100; i += 1) {
  let dateSold;
  let tags;
  let openStart;
  let openEnd;
  const beds = faker.random.number({ min: 2, max: 8, precision: 1 });

  if (Math.random() < 0.1) {
    tags = ['SOLD'];
    dateSold = faker.date.past();
  } else {
    tags = ['FOR SALE'];
    if (Math.random() < 0.1) {
      openStart = faker.date.future();
      openStart.setHours(faker.random.number({ min: 10, max: 6, precision: 1 }));
      openStart.setMinutes(Math.random() > 0.5 ? 0 : 30);
      openEnd = new Date(openStart);
      const hr = openEnd.getHours() + faker.random.number({ min: 2, max: 4, precision: 1 });
      openEnd.setHours(hr);
      openEnd.setMinutes(Math.random() > 0.5 ? 0 : 30);
      tags.push('OPEN');
    }
  }

  homes.push({
    address: faker.address.streetAddress(),
    beds,
    baths: beds - faker.random.number({ min: 0, max: beds - 2, precision: 1 }),
    price: 1000 * faker.commerce.price(100, 1000, 0) * 10 ** (beds > 6),
    tags,
    dateSold,
    openStart,
    openEnd,
    images: Array(faker.random.number({ min: 1, max: 100, precision: 1 })).fill('houses'),
  });
}

db.homes.model.create(homes, (err) => {
  if (err) throw err;
});
