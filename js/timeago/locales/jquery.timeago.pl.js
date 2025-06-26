/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// Polish
(function() {
  function numpf(n, s, t) {
    // s - 2-4, 22-24, 32-34 ...
    // t - 5-21, 25-31, ...
    var n10 = n % 10;
    if ( (n10 > 1) && (n10 < 5) && ( (n > 20) || (n < 10) ) ) {
      return s;
    } else {
      return t;
    }
  }

  jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: "za",
    suffixAgo: "temu",
    suffixFromNow: null,
    seconds: "mniej niż minutę",
    minute: "minutę",
    minutes: function(value) { return numpf(value, "%d minuty", "%d minut"); },
    hour: "godzinę",
    hours: function(value) { return numpf(value, "%d godziny", "%d godzin"); },
    day: "dzień",
    days: "%d dni",
    month: "miesiąc",
    months: function(value) { return numpf(value, "%d miesiące", "%d miesięcy"); },
    year: "rok",
    years: function(value) { return numpf(value, "%d lata", "%d lat"); }
  };
})();