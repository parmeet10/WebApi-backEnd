export const blogCreateSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            minLength: 10,
            errorMessage: {
                type: 'title must be a string'
            }
        },
        description: {
            type: 'string',
            minLength: 30,
            errorMessage: {
                type: 'description must be a string'
            }
        },
        categoryId: {
            type: 'integer',
            format: 'positiveNumber',
            errorMessage: {
                format: 'categoryId must be positive integer'
            }
        },
        authorId: {
            type: 'integer',
            format: 'positiveNumber',
            errorMessage: {
                format: 'authroId must be positive integer'
            }
        },
    },
    required: ['title', 'description', 'categoryId', 'authorId'],
    additionalProperties: false
}