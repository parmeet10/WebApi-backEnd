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
        thumbnail: {
            type: 'string',
            minLength: 10,
            errorMessage: {
                format: 'thumbnail must be a string'
            }
        },
    },
    required: ['title', 'description', 'categoryId', 'authorId','thumbnail'],
    additionalProperties: false
}