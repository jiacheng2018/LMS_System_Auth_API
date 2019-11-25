let request = require('supertest');
let server;
describe('/', () => {
          beforeEach(() => {
                    server = require('../../Routes/Student');
          });
          afterEach(() => {
                    server.close();
          });
          describe('Get /', () => {
                    it('should return all generes', async () => {
                              const res = await request(server).get('/');
                              expect(res.status).toBe(200);
                    });
          });
});
