exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruit').del()
    .then(function () {
      // Inserts seed entries
      return knex('fruit').insert([
        { id: 1, name: 'banana', url: 'https://unsplash.com/photos/0v_1TPz1uXw' },
        { id: 2, name: 'apple', url: 'https://unsplash.com/photos/oJGca8Ch828' },
        { id: 3, name: 'feijoa', url: 'https://unsplash.com/photos/XpHY3u3EeVw' },
        { id: 4, name: 'kiwi fruit', url: 'https://unsplash.com/photos/6F0jd4UXySA' }
      ])
    })
}
