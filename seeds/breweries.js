/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('breweries').del()
  await knex("breweries").insert([
    {
      id: 1,
      name: "Station 26",
      address: "7045 38th Ave, Denver, CO 80207",
      overview: "Dogs welcome on the patio",
      image:
        "https://images.squarespace-cdn.com/content/v1/525c625ae4b0be2ae63312b1/1533749205526-SSVKLZ22R9V6ON167ZP6/Taproom.jpeg?format=1000w",
    },
    {
      id: 2,
      name: "Watering Bowl",
      address: "5411 Leetsdale Dr, Denver, CO 80246",
      overview: "Dogs welcome inside and on the patio",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f0/ef/1d/photo3jpg.jpg?w=1200&h=1200&s=1",
    },
    {
      id: 3,
      name: "Ratio",
      address: "2920 Larimer St.Denver, CO 80205",
      overview: "Dogs welcome on patio",
      image:
        "https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2019/07/160709-RATIO-BEERWORKS-BREWERY-RINO-FIVE-POINTS-NIGHTLIFE-BARS-KEVINJBEATY-01-1024x683.jpg",
    },
  ]);
};
