export default class ArraySchema{
    constructor(validators) {
        const validator = (value) => Array.isArray(value);
        this.validators = [...validators, validator];
      }

    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }

    length(len) {
        const validator = (value) => value.length === len;
        return new ArraySchema([...this.validators, validator]);
    }
}
