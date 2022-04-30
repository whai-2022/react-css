exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruit').del()
    .then(function () {
      // Inserts seed entries
      return knex('fruit').insert([
        { id: 1, name: 'banana', url: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80' },
        { id: 2, name: 'apple', url: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80' },
        { id: 3, name: 'feijoa', url: 'https://images.unsplash.com/photo-1541857754-557a44522bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80' },
        { id: 4, name: 'kiwi fruit', url: 'https://images.unsplash.com/photo-1593356261955-a4be882ee52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }
      ])
    })
}
