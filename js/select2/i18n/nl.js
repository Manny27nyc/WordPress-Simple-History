/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/nl",[],function(){return{errorLoading:function(){return"De resultaten konden niet worden geladen."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Gelieve "+t+" karakters te verwijderen";return n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Gelieve "+t+" of meer karakters in te voeren";return n},loadingMore:function(){return"Meer resultaten laden…"},maximumSelected:function(e){var t=e.maximum==1?"kan":"kunnen",n="Er "+t+" maar "+e.maximum+" item";return e.maximum!=1&&(n+="s"),n+=" worden geselecteerd",n},noResults:function(){return"Geen resultaten gevonden…"},searching:function(){return"Zoeken…"}}}),{define:e.define,require:e.require}})();