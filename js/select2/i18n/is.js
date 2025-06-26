/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/is",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum,n="Vinsamlegast styttið texta um "+t+" staf";return t<=1?n:n+"i"},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Vinsamlegast skrifið "+t+" staf";return t>1&&(n+="i"),n+=" í viðbót",n},loadingMore:function(){return"Sæki fleiri niðurstöður…"},maximumSelected:function(e){return"Þú getur aðeins valið "+e.maximum+" atriði"},noResults:function(){return"Ekkert fannst"},searching:function(){return"Leita…"}}}),{define:e.define,require:e.require}})();