import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const signin = () => {
    const payload = {
        id: new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com'
    }

    const token = jwt.sign(payload, process.env.JWT_KEY!)
    const session = { jwt: token }
    const sessionJson = JSON.stringify(session)
    const base64 = Buffer.from(sessionJson).toString('base64')
    return [`express:sess=${base64}`]
}

const createTicket = () => {
  return request(app).post('/api/tickets').set('Cookie', signin()).send({
    title: 'asldkf',
    price: 10,
  });
};

it('can fetch a list of tickets', async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.length).toEqual(3);
});