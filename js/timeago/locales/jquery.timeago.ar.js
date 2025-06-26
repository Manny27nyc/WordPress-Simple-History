/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
(function() {
  function numpf(n, a) {
    return a[plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5];
  }

jQuery.timeago.settings.strings = {
    prefixAgo: "منذ",
    prefixFromNow: "بعد",
    suffixAgo: null,
    suffixFromNow: null, // null OR "من الآن"
    second: function(value) { return numpf(value, [
      'أقل من ثانية',
       'ثانية واحدة',
       'ثانيتين',
       '%d ثوانٍ',
       '%d ثانية',
       '%d ثانية']); },
    seconds: function(value) { return numpf(value, [
      'أقل من ثانية',
       'ثانية واحدة',
       'ثانيتين',
       '%d ثوانٍ',
       '%d ثانية',
       '%d ثانية']); },
    minute: function(value) { return numpf(value, [
      'أقل من دقيقة',
       'دقيقة واحدة',
       'دقيقتين',
       '%d دقائق',
       '%d دقيقة',
       'دقيقة']); },
    minutes: function(value) { return numpf(value, [
      'أقل من دقيقة',
       'دقيقة واحدة',
       'دقيقتين',
       '%d دقائق',
       '%d دقيقة',
       'دقيقة']); },
    hour:  function(value) { return numpf(value, [
      'أقل من ساعة',
       'ساعة واحدة',
       'ساعتين',
       '%d ساعات',
       '%d ساعة',
       '%d ساعة']); },
    hours: function(value) { return numpf(value, [
      'أقل من ساعة',
       'ساعة واحدة',
       'ساعتين',
       '%d ساعات',
       '%d ساعة',
       '%d ساعة']); },
    day:  function(value) { return numpf(value, [
      'أقل من يوم',
       'يوم واحد',
       'يومين',
       '%d أيام',
       '%d يومًا',
       '%d يوم']); },
    days: function(value) { return numpf(value, [
      'أقل من يوم',
       'يوم واحد',
       'يومين',
       '%d أيام',
       '%d يومًا',
       '%d يوم']); },
    month:  function(value) { return numpf(value, [
      'أقل من شهر',
       'شهر واحد',
       'شهرين',
       '%d أشهر',
       '%d شهرًا',
       '%d شهر']); },
    months: function(value) { return numpf(value, [
      'أقل من شهر',
       'شهر واحد',
       'شهرين',
       '%d أشهر',
       '%d شهرًا',
       '%d شهر']); },
    year:  function(value) { return numpf(value,  [
      'أقل من عام',
       'عام واحد',
       '%d عامين',
       '%d أعوام',
       '%d عامًا']);
     },
    years: function(value) { return numpf(value,  [
      'أقل من عام',
       'عام واحد',
       'عامين',
       '%d أعوام',
       '%d عامًا',
       '%d عام']);}
  };
})();
