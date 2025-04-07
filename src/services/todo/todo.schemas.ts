export const TodoCreateSchema = {
  body: {
    type: 'object',
    required: ['blob', 'isDone'],
    properties: {
      blob: { type: 'string' },
      isDone: { type: 'boolean' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        // token: { type: 'string' },
      },
    },
  },
}
