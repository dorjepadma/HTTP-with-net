// module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
//   return `HTTP/1.1 200 OK
// Accept-Ranges: bytes
// Content-Length: 17
// Content-Type: text/html
// <h1>Be Happy</h1>`;
// };
module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `
HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}

${body}
  `.trim();
};

