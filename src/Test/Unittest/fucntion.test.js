const functions = require('./function');
test('Add 2+2 to equal 4', () => {
          expect(functions.add(1, 1)).toBe(2);
});
test('User', () => {
          expect(functions.createUser()).toEqual({
                    firstName: 'Brad',
                    lastname: 'Travesy'
          });
});
test('Admin', () => {
          var usernames = ['john', 'kernan', 'admin'];
          expect(usernames).toContain('admin');
});
test('float point', () => {
          const value = 0.1 + 0.2;
          expect(value).toBeCloseTo(0.3);
});
