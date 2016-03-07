if (Meteor.isServer) {
  function filtered(letter, str) {
    var count = str.length;
    return letter.repeat(count);
  }

  var filter = '*';

  if (Meteor.settings.badwords && Meteor.settings.badwords.placeHolder) {
    filter = Meteor.settings.badwords.placeHolder;
  } else {
    filter = '*';
  }

  var filteredAnswer = filter.repeat();

  Tinytest.add('Bad word filtered?', function (test) {
    test.equal(BannedFilter.clean("asshole"), filtered(filter, "asshole"));
  });

  Tinytest.add('Only bad word filtered?', function(test) {
    test.equal(BannedFilter.clean("Hey you asshole"), "Hey you " + filtered(filter, "asshole"));
  });

  Tinytest.add("Intentional fail", function(test) {
    test.notEqual(BannedFilter.clean("Hey Mr Awesome"), "Hey Mr " + filtered(filter, "awesome"));
  })
}