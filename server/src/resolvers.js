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
    async updateExcuse (root, { id, category, caption, userId }, { models }) {
      console.log('ID: ', id);
      const newResult = await models.Excuse.findOne({where: 
        { id: id }
      })
      .then(res => {
        

        if (res === null) {
          console.log('RES: ', res);
          return {id: id, caption: `${id} does not exist`};
        } else {
          const excuseObj = {};
          console.log('RES: ', res.dataValues);
          const originalObject = res.dataValues;
          excuseObj.id = id;

          if (caption !== undefined) {
            excuseObj.caption = caption; 
          } else {
            excuseObj.caption = originalObject.caption;
          }
          if (category !== undefined) {
            excuseObj.category = category; 
          } else {
            excuseObj.category = originalObject.category; 
          }
          if (userId !== undefined) {
            excuseObj.userId = userId;
          } else {
            excuseObj.userId = originalObject.userId;
          }

          models.Excuse.update( excuseObj, {
            where: { id: id }    
          })
          
          return excuseObj;
        }      

      
        
      })
      .catch(err => console.log('Err: ', err));
      
      return newResult;

    },
    async createUser (root, { userName, email, password }, { models }) {
      return models.User.create({ userName, email, password })
    }
  }
};

module.exports = resolvers;