# RSS To AMP-Stories (prototype)


I was at [#AMPConf Amsterdam](https://www.ampproject.org/amp-conf/) this week and discovered the new AMP Story feature.

During the ["Telling Stories with AMP" talk](https://www.youtube.com/watch?v=aael0hECWFw&index=4&list=PLXTOW_XMsIDSl5iyPxgtEI0ts5HfBTH8c) I made this quick & dirty prototype to check how it would work with an Rss feed.
Note that it should be used to display a single story and not many stories like I did here.




## What does it do

It converts an RSS feed to the AMP Story format, one story page per article.

## How to use it

First you'll need to sign up for the origin trial to publish pages with amp-story, please visit [bit.ly/amp-story-signup](bit.ly/amp-story-signup).

Then, you need to add an amp canonical link to :

```html
<link rel="amphtml" href="https://rss-to-amp-stories.cleverapps.io?url={your-rss-feed-url}">
```

## Acknowledgement

- Thanks to [Ouest-France](https://www.ouest-france.fr) digital tech head to let me go to the [AMP Conf](https://www.ampproject.org/amp-conf/)
- Demo version is proudly hosted on [CleverCloud](https://clever-cloud.com)
