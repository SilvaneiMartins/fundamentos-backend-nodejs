import http from 'node:http';


const server = http.createServer((req, res) => {
  return res.end('Hello World');
});

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`🚀 Servidor está rodando na porta${port}`);
});