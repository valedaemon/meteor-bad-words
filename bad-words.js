if (Meteor.isServer) {
  BadFilter = Npm.require('bad-words');

  var settings;

  if (Meteor.settings && Meteor.settings.badwords && typeof(Meteor.settings.badwords) == "object" && typeof(Meteor.settings.badwords.placeHolder) != "undefined") {
    settings = Meteor.settings.badwords;
    if (typeof(Meteor.settings.badwords.additionalWords) != "undefined") {
      var addwords = Meteor.settings.badwords.additionalWords;
    }
  } else {
    Meteor.settings.badwords = {
      placeHolder: '*'
    }
  }
  BannedFilter = new BadFilter({placeHolder: Meteor.settings.badwords.placeHolder});

  if (addwords) {
    BannedFilter.addWords(addwords);
  }
}