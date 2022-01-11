import ajv from './ajvFormats.js';

class AjvCompile {
    constructor() {};

    validate(schema, data) {
        const validate = ajv.compile(schema);
        const valid = validate(data);
        if (!valid) {
            return ajv.errorsText(validate.errors);
        }
        return null;
    }
}
export default AjvCompile;