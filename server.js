import { createServer } from "http";

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {};

const server = createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Servidor funcionando na porta http://${host}:${port}`)
});