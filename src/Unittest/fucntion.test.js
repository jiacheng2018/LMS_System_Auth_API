const functions = require('./function');
test('Add 2+2 to equal 4', () => {
          expect(functions.add(1, 1)).toBe(2);
});
