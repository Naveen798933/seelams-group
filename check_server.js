const http = require('http');

const checkUrl = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            console.log(`Status Code for ${url}: ${res.statusCode}`);
            resolve(true);
        }).on('error', (e) => {
            console.error(`Error connecting to ${url}: ${e.message}`);
            resolve(false);
        });
    });
};

(async () => {
    console.log('Checking servers...');
    await checkUrl('http://localhost:5173');
    await checkUrl('http://localhost:5173/admin.html');
    await checkUrl('http://localhost:5000');
})();
