# dpi-blank-theme
A clean slate for WordPress development in this DPI WordPress Boilerplate.

Minimalistic base theme for custom theme development.

## wp-config.php additions on install
We recommend adding the following to the default wp-config.php file:

    // Enable Debug logging to the /wp-content/debug.log file
    define('WP_DEBUG_LOG', true);
    
    // Disable display of errors and warnings 
    define('WP_DEBUG_DISPLAY', false);
    @ini_set('display_errors',0);
    
    /**
     * Disable theme/plugin updates from backend
     */
    define( 'DISALLOW_FILE_MODS', true ); //will also make current_user_can('edit_plugins') return false

## Translation
Simple EN to NL string translation is supported in the `dpi` text domain through the /languages/nl_NL.po file. E.g.:

   _e('Example string', 'dpi');

Translated strings in your custom theme can be imported through Poedit for translation. Save the .po file in Poedit to automatically generate the .mo file that your WordPress custom theme needs.
