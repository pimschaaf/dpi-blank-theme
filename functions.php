<?php
/**
 * Theme setup
 */
add_action('after_setup_theme', 'dpi_theme_setup');
function dpi_theme_setup(){
    // Load translation
    load_theme_textdomain('dpi', get_template_directory().'/languages');

    require_once('_lib/base.php'); //Blank theme base functions
}

/**
 * Main style/script enqueue function
 * Includes just before </head>
 */
if (!function_exists('dpi_enqueue_styles')) {
    function dpi_enqueue_styles() {
        wp_register_style('main', get_template_directory_uri() . '/assets/css/main.min.css');
        wp_enqueue_style('main');

        wp_register_script('main', get_template_directory_uri() . '/assets/js/main.min.js', array('jquery'), '', true);
        wp_enqueue_script('main');
    }
    add_action( 'wp_enqueue_scripts', 'dpi_enqueue_styles' );
}
