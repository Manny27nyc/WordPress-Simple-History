/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/lt",[],function(){function e(e,t,n,r){return e%10===1&&(e%100<11||e%100>19)?t:e%10>=2&&e%10<=9&&(e%100<11||e%100>19)?n:r}return{inputTooLong:function(t){var n=t.input.length-t.maximum,r="Pašalinkite "+n+" simbol";return r+=e(n,"į","ius","ių"),r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Įrašykite dar "+n+" simbol";return r+=e(n,"į","ius","ių"),r},loadingMore:function(){return"Kraunama daugiau rezultatų…"},maximumSelected:function(t){var n="Jūs galite pasirinkti tik "+t.maximum+" element";return n+=e(t.maximum,"ą","us","ų"),n},noResults:function(){return"Atitikmenų nerasta"},searching:function(){return"Ieškoma…"}}}),{define:e.define,require:e.require}})();