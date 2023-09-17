import ErrorRepository from '../app.js';

test('Use function translate with code 400', () => {
    const result = new ErrorRepository();
    const code = 400;
    expect(result.translate(code)).toBe('Bad Request');
});

test('Use function translate with code 401', () => {
  const result = new ErrorRepository();
  const code = 401;
  expect(result.translate(code)).toBe('Unauthorized Error');
});

test('Use function translate with code 404', () => {
  const result = new ErrorRepository();
  const code = 404;
  expect(result.translate(code)).toBe('Not Found');
});

test('Use function translate with bad code', () => {
    const result = new ErrorRepository();
    const code = 405;
    expect(() => result.translate(code)).toThrow('Unknown error');
});
