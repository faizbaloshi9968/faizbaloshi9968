const request = require('supertest');

jest.mock('../src/db', () => ({
  query: jest.fn().mockResolvedValue({ rows: [] })
}));

const { app } = require('../src/index');

describe('Auth routes', () => {
  test('registration requires email and password', async () => {
    const res = await request(app).post('/api/register').send({});
    expect(res.status).toBe(400);
  });
});
