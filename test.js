// tests.js
test('passes', () => {
  console.log('passing test')
  expect(true).toBeTruthy();
})

test('fails', () => {
  console.log('failing test')
  expect(true).toBeFalsy();
})
