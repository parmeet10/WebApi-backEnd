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