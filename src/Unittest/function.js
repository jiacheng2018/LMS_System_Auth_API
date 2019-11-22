const functions = {
          isNull: () => null,
          add: (num1, num2) => num1 + num2,
          createUser: () => {
                    const user = { firstName: 'Brad' };
                    user['lastname'] = 'Travesy';
                    return user;
          }
};
module.exports = functions;
