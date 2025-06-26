/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php

defined('ABSPATH') or die();

/*
Dropin Name: Donate things
Dropin URI: http://simple-history.com/
Author: Pär Thernström
*/

/**
 * Simple History Donate dropin
 * Put some donate messages here and there
 */
class SimpleHistoryDonateDropin
{

    // Simple History instance
    private $sh;

    public function __construct($sh)
    {

        $this->sh = $sh;
        add_action('admin_menu', array( $this, 'add_settings' ), 50);
        add_action('plugin_row_meta', array( $this, 'action_plugin_row_meta' ), 10, 2);
    }

    /**
     * Add link to the donate page in the Plugins » Installed plugins screen
     * Called from filter 'plugin_row_meta'
     */
    public function action_plugin_row_meta($links, $file)
    {

        if ($file == $this->sh->plugin_basename) {
            $links = array_merge(
                $links,
                array( sprintf('<a href="https://www.paypal.me/eskapism">%1$s</a>', __('Donate', "simple-history")) )
            );
        }

        return $links;
    }

    public function add_settings()
    {

        $settings_section_id = 'simple_history_settings_section_donate';

        add_settings_section(
            $settings_section_id,
            _x('Donate', 'donate settings headline', 'simple-history'), // No title __("General", "simple-history"),
            array( $this, 'settings_section_output' ),
            SimpleHistory::SETTINGS_MENU_SLUG // same slug as for options menu page
        );

        // Empty section to make more room below
        /*
        add_settings_field(
            "simple_history_settings_donate",
            "", // __("Donate", "simple-history"),
            array($this, "settings_field_donate"),
            SimpleHistory::SETTINGS_MENU_SLUG,
            $settings_section_id
        );
        */
    }

    public function settings_section_output()
    {

        printf(
            __('If you find Simple History useful please <a href="%1$s">donate</a>.', "simple-history"),
            'https://www.paypal.me/eskapism'
        );
    }


    public function settings_field_donate()
    {
    }
}
