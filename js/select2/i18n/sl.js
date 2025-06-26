/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/sl",[],function(){return{errorLoading:function(){return"Zadetkov iskanja ni bilo mogoče naložiti."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Prosim zbrišite "+t+" znak";return t==2?n+="a":t!=1&&(n+="e"),n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Prosim vpišite še "+t+" znak";return t==2?n+="a":t!=1&&(n+="e"),n},loadingMore:function(){return"Nalagam več zadetkov…"},maximumSelected:function(e){var t="Označite lahko največ "+e.maximum+" predmet";return e.maximum==2?t+="a":e.maximum!=1&&(t+="e"),t},noResults:function(){return"Ni zadetkov."},searching:function(){return"Iščem…"}}}),{define:e.define,require:e.require}})();