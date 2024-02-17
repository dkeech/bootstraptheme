<?php
function add_scripts_styles()
{
    wp_register_style('bootstrap-style', get_template_directory_uri() . '/assets/dist/css/main.css');
    wp_register_script('bootstrap-script', get_template_directory_uri() . '/assets/dist/js/main.js', NULL, '', true);


    wp_enqueue_style('bootstrap-style');
    wp_enqueue_script('bootstrap-script');
}

add_action('wp_enqueue_scripts', 'add_scripts_styles');
