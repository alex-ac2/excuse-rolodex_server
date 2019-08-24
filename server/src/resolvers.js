const resolvers = {
  Query: {
    hello: () => 'hello friend',
    excuses: (parent, args, { models }, info) => models.Excuse.findAll(),
    excuse: (parent, { id }, { models }, info) => models.Excuse.findByPk(id),
  }

};

module.exports = resolvers;