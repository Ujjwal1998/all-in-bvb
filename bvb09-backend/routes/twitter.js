const express = require("express");
const router = express.Router();
const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();
// const client = new TwitterApi({
//   appKey: process.env.API_KEY,
//   appSecret: process.env.API_SECRET,
//   accessToken: process.env.ACCESS_TOKEN,
//   accessSecret: process.env.ACCESS_SECRET,
// });

const bearer = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  // Following access tokens are not required if you are
  // at part 1 of user-auth process (ask for a request token)
  // or if you want a app-only client (see below)
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

router.get("/", async (req, res) => {
  try {
    const jsTweets = await twitterBearer.v2.search("JavaScript", {
      "media.fields": "url",
    });

    // Consume every possible tweet of jsTweets (until rate limit is hit)
    for await (const tweet of jsTweets) {
      console.log(tweet);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
