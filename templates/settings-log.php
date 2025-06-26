/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php

defined('ABSPATH') or die();

$pager_size = $this->get_pager_size();

/**
 * Filter the pager size setting for the settings page
 *
 * @since 2.0
 *
 * @param int $pager_size
 */
$pager_size = apply_filters('simple_history/settings_page_pager_size', $pager_size);

?>
<div class="SimpleHistoryGui"
     data-pager-size='<?php echo $pager_size ?>'
     ></div>
<?php

global $wpdb;
$table_name = $wpdb->prefix . SimpleHistory::DBTABLE;

