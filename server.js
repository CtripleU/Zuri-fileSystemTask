const fs = require('fs');
    fetch = require('node-fetch');
    dir = './result';

if (!fs.existsSync(dir)){ //This checks if the folder exists and creates it if it doesn't
    console.log("folder not found, creating..")
    fs.mkdirSync(dir);
}

fetch('http://jsonplaceholder.typicode.com/posts') //This fetches the data from the API
    .then(res => res.text())
    .then(data => {
        fs.writeFile('./result/posts.json', data, (err) => { //This writes the data gotten to a file called posts.json
            if (err) {
                throw err;
            } else{
                console.log('task completed');
            }
        });
    });