/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php

/*
Dropin Name: Settings debug
Dropin Description: Adds a tab with debug information
Dropin URI: http://simple-history.com/
Author: Pär Thernström
*/

defined('ABSPATH') or die();

class SimpleHistorySettingsDebugDropin
{

    private $sh;

    public function __construct($sh)
    {

        $this->sh = $sh;

        // How do we register this to the settings array?
        $sh->registerSettingsTab(array(
            'slug' => 'debug',
            'name' => __('Debug', 'simple-history'),
            'function' => array( $this, 'output' ),
        ));

        // add_action( 'simple_history/enqueue_admin_scripts', array( $this, 'on_admin_enqueue_scripts' ) );
    }

    /*
    public function on_admin_enqueue_scripts() {

        $file_url = plugin_dir_url( __FILE__ );

        wp_enqueue_script( "google-ajax-api", "https://www.google.com/jsapi" );
        wp_enqueue_style( "simple_history_SettingsStatsDropin", $file_url . "SimpleHistorySettingsStatsDropin.css", null, SIMPLE_HISTORY_VERSION );

    }
    */

    public function output()
    {

        include SIMPLE_HISTORY_PATH . 'templates/template-settings-tab-debug.php';
    }
}
