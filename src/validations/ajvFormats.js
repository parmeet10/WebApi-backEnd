import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
import Ajv from 'ajv';
const ajv = new Ajv({allErrors: true});
addFormats(ajv);
ajvErrors(ajv, {singleError: true});
export default ajv;