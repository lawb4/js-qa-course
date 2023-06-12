/**
 * 1. You need to make a GET request (via async/await) to the resource: https://jsonplaceholder.typicode.com/posts
 * using fetch method inside the sendRequest function
 * DOCS:
 *        node-fetch (JSON example): https://github.com/node-fetch/node-fetch#json
 *        async/await: https://javascript.info/async-await
 *        async/await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * 2. Save the payload of the response to "./response.json" file with only items which id less than 20.
 * Use the promisified version of FS module.
 * DOCS:
 *        Promise example: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_promise_example
 *        fsPromises.writeFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fspromises_writefile_file_data_options
 *
 * 3. Check yourself by running "npm run test:nodejs"
 */
const fetch = require('node-fetch');
const fs = require('fs/promises');
const path = require('path');

/**
 * Run fetch method inside the function
 * Use the fs.writeFile method inside the function
 */
const sendRequest = async () => {
    try {
        const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        });
        const parsedPosts = await getPosts.json();

        const filteredPosts = await parsedPosts.filter(x => x.id < 20);
        const filteredPostsToJson = JSON.stringify(filteredPosts, null, '\t');

        await fs.writeFile(path.join(__dirname, 'response1.json'), filteredPostsToJson);
    } catch (e) {
        console.error(e.message);
    }
};


module.exports = {
    sendRequest
};
