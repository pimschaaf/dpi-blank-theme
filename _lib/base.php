<?php
// Exclude this theme from update checks
add_filter( 'http_request_args', 'dpi_hidden_theme', 5, 2 );
function dpi_hidden_theme( $r, $url ) {
    if ( 0 !== strpos( $url, 'http://api.wordpress.org/themes/update-check' ) ) {
        return $r;
    }

    $themes = unserialize( $r['body']['themes'] );
    unset(
        $themes[ get_option( 'template' ) ],
        $themes[ get_option( 'stylesheet' ) ]
    );
    $r['body']['themes'] = serialize( $themes );

    return $r;
}