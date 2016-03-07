# Meteor-Bad-Words

This is a Meteor implementation of webmech's [bad-words](https://www.npmjs.com/package/bad-words) complete with unit tests.

## Implementation
Issue the command
``` meteor add valedaemon:bad-words```
to include it in your project.

If you are using Meteor.settings and wish to add your own words or custom define the replacement character (currently set to '*'), then add the following:

```
"badwords": {
	"placeHolder": "x",
	"additionalWords": ["ohnoes", "ohthehumanity", "getoffmylawn"]
}
```

If the defaults are fine with you, then there's no need to do anything. The package will handle the default settings itself.
