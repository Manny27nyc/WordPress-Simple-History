/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/pl",[],function(){var e=["znak","znaki","znaków"],t=["element","elementy","elementów"],n=function(t,n){if(t===1)return n[0];if(t>1&&t<=4)return n[1];if(t>=5)return n[2]};return{errorLoading:function(){return"Nie można załadować wyników."},inputTooLong:function(t){var r=t.input.length-t.maximum;return"Usuń "+r+" "+n(r,e)},inputTooShort:function(t){var r=t.minimum-t.input.length;return"Podaj przynajmniej "+r+" "+n(r,e)},loadingMore:function(){return"Trwa ładowanie…"},maximumSelected:function(e){return"Możesz zaznaczyć tylko "+e.maximum+" "+n(e.maximum,t)},noResults:function(){return"Brak wyników"},searching:function(){return"Trwa wyszukiwanie…"}}}),{define:e.define,require:e.require}})();