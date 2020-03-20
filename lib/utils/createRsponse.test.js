// const createResponse = require('./createResponse');

// describe('createResponse', () => {
//   it('creates a valid HTTP response', () => {
//     const response = createResponse({
//       body: '<h1>Be Happy</h1>',
//       status: '200 OK',
//       contentType: 'text/html'
//     });

//     expect(response).toEqual(`HTTP/1.1 200 OK
// Accept-Ranges: bytes
// Content-Length: 17
// Content-Type: text/html
// <h1>Be Happy</h1>`);
//   });
// });
const createResponse = require('./createResponse');

describe('createResponse', () => {
  it('creates a valid HTTP response', () => {
    const response = createResponse({
      body: '<h1>Good Day!</h1>',
      status: '200 OK',
      contentType: 'text/html'
    });

    expect(response).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 18
Content-Type: text/html

<h1>Good Day!</h1>`);
  });
});
