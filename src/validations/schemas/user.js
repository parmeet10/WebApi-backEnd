export const userSignupSchema = {
    type: "object",
    properties: {
        firstname: {
            type: 'string',
            errorMessage: {
                type: 'firstname must be a string'
            }
        },
        lastname: {
            type: 'string',
            errorMessage: {
                type: 'firstname must be a string'
            }
        },
        email: {
            type: 'string',
            format: 'email',
            errorMessage: {
                type: 'email must be of form dummy@example.com'
            }
        },
        password: {
            type: 'string'
        }
    },
    additionalProperties: false,
    required: ['firstname', 'lastname', 'email', 'password']
}

export const userLoginSchema = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
            errorMessage: {
                type: 'email must be a string'
            }
        },
        password: {
            type: 'string',
            errorMessage: {
                type: 'password must be a string'
            }
        },
        additionalProperties: false,
        required: ['email', 'password']
    }
}