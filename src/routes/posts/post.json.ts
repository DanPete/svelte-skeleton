
import type { RequestHandler } from '@sveltejs/kit';
// import db from 'db';

type Locals = {
  data: string
}

export const get: RequestHandler<Locals> = ({ params }) => {
  // db.collection.find()
  // data

  return {
    status: 200,
    body: {
      data: 'test'
    }
  }
}
