module.exports = rawRequest => {
  // const pattern = /(?<method>[A-Z]+)\s(?<path>.)/;
  const [, body] = rawRequest.split('\r\n\r\n');
  

  const [method, path] = rawRequest.split('\n')[0].split(' ');
  return {
    method,
    path,
    body
  };
};


