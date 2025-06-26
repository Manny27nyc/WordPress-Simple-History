/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// Russian
(function() {
  function numpf(n, f, s, t) {
    // f - 1, 21, 31, ...
    // s - 2-4, 22-24, 32-34 ...
    // t - 5-20, 25-30, ...
    var n10 = n % 10;
    if ( (n10 == 1) && ( (n == 1) || (n > 20) ) ) {
      return f;
    } else if ( (n10 > 1) && (n10 < 5) && ( (n > 20) || (n < 10) ) ) {
      return s;
    } else {
      return t;
    }
  }

  jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: "через",
    suffixAgo: "назад",
    suffixFromNow: null,
    seconds: "меньше минуты",
    minute: "минуту",
    minutes: function(value) { return numpf(value, "%d минута", "%d минуты", "%d минут"); },
    hour: "час",
    hours: function(value) { return numpf(value, "%d час", "%d часа", "%d часов"); },
    day: "день",
    days: function(value) { return numpf(value, "%d день", "%d дня", "%d дней"); },
    month: "месяц",
    months: function(value) { return numpf(value, "%d месяц", "%d месяца", "%d месяцев"); },
    year: "год",
    years: function(value) { return numpf(value, "%d год", "%d года", "%d лет"); }
  };
})();