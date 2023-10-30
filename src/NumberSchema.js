export default class NumberSchema{
    constructor(validators) {
        const validator = (value) => typeof value === 'number';
        this.validators = [...validators, validator];
    }

    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }
    even() {
        const validator = (value) => value % 2 === 0;
        return new NumberSchema([...this.validators, validator]);
    }
    odd() {
        const validator = (value) => value % 2 !== 0;
        return new NumberSchema([...this.validators, validator]);
    }
}