export default class ErrorRepository {
    constructor() {
        const errors = [
            [400, 'Bad Request'],
            [401, 'Unauthorized Error'],
            [404, 'Not Found'],
        ];
        this.errors = new Map(errors);
    }

    translate(code) {
        if (!this.errors.has(code)) {
            throw new Error('Unknown error');
        } else return this.errors.get(code);
    }
}
