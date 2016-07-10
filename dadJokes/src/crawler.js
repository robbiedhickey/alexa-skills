var request = require('request');

request('https://www.reddit.com/r/dadjokes/top.json?limit=100', function(err, resp, body){
    var postListing = JSON.parse(body);
    var jokes = postListing.data.children.map(function(post){
        return {
            setup: post.data.title,
            punchline: post.data.selftext
        };
    });
    console.log(jokes);
});