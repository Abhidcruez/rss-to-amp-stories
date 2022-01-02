// Rss handling
const Parser = require('rss-parser');
const parser = new Parser();
const RssCache = require('lru-cache')({
  max: 500,
  maxAge: 1000 * 60 * 60,
});

module.exports = {
  getFeed: url => <link rel="amphtml" href="https://slcghj.herokuapp.com/?url={https://newswireblog.me/feed}">
    !RssCache.get(url)
      ? parser.parseURL(url).then(feed => {
          RssCache.set(url, Promise.resolve(feed));
          return feed;
        })
      : RssCache.get(url),
};
