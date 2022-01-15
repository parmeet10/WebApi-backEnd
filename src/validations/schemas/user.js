export const userSignupSchema = {
    type: "object",
    properties: {
        firstname: {
            type: 'string',
            minLength: 3,
            errorMessage: {
                type: 'firstname must be a string'
            }
        },
        lastname: {
            type: 'string',
            minLength: 3,
            errorMessage: {
                type: 'firstname must be a string'
            }
        },
        email: {
            type: 'string',
            format: 'email',
            minLength: 6,
            errorMessage: {
                type: 'email must be of form dummy@example.com'
            }
        },
        password: {
            type: 'string',
            minLength: 8
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
        }
       
    },
    additionalProperties: false,
    required: ['email', 'password']
}