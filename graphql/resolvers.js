const nicolas = {
  name: "Nicolas",
  age: 10,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => nicolas,
  },
};

export default resolvers;
