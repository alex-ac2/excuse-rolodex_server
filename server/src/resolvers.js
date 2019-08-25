const resolvers = {
  Query: {
    hello: () => 'hello friend',
    excuses: (parent, args, { models }, info) => models.Excuse.findAll(),
    excuse: (parent, { id }, { models }, info) => models.Excuse.findByPk(id),
  },

  Mutation: {
    async createExcuse (root, { category, caption, userId }, { models }) {
      return models.Excuse.create({ category, caption, userId })
    },
    async createUser (root, { userName, email, password }, { models }) {
      return models.User.create({ userName, email, password })
    }
  }
};

module.exports = resolvers;