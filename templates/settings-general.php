/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php
defined('ABSPATH') or die();
?>

<form method="post" action="options.php">

    <?php
    // Prints out all settings sections added to a particular settings page
    do_settings_sections(SimpleHistory::SETTINGS_MENU_SLUG);
    ?>

    <?php
    // Output nonce, action, and option_page fields
    settings_fields('simple_history_settings_group');
    ?>

    <?php submit_button(); ?>

</form>
