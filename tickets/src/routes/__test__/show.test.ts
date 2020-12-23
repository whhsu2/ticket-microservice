import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../app';
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

it('returns a 404 if the ticket is not found', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/tickets/${id}`).send().expect(404);
});

it('returns the ticket if the ticket is found', async () => {
  const title = 'concert';
  const price = 20;

  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', signin())
    .send({
      title,
      price,
    })
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});