import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === "GET" && url === "/users") {
        return res
        .setHeader("Content-Type", "application/json")
        .end(JSON.stringify(users));
    }

    if (method === "POST" && url === "/users") {
        users.push({
            id: 1,
            name: "Jhon Doe",
            email: "jhondoe@exemplo.com",
        });

        return res.writeHead(201).end();
    }

    return res.writeHead(404).end('Página não encontrada!');
});

const port = process.env.PORT || 3333;

server.listen(port, () => {
    console.log(`🚀 Servidor está rodando na porta${port}`);
});
