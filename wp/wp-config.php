<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wireling_wp121' );

/** Database username */
define( 'DB_USER', 'wireling_wp121' );

/** Database password */
define( 'DB_PASSWORD', 'S[j]0D9p33' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'bickigyyntpbgqhxtldhfqtj5stahbdo0tk1oczok36uq750bnnf5lk5tfvdwwzp' );
define( 'SECURE_AUTH_KEY',  'i92elcbehjgl0icgpalhm2r0nbuyzdugczkr67i9rys3k4azmak9b3u1sj3gfgk2' );
define( 'LOGGED_IN_KEY',    'xguo89sbzqqq9vlbeq1efgwzumaaifc7qgvausptmmp9bdnw9qrzimzdnbkiim65' );
define( 'NONCE_KEY',        'nhx3ku4tzj8igqsmjzeco5n6mylm5pnzwbh3utfqeos8ahi04tes191bxxqkz470' );
define( 'AUTH_SALT',        'senpqae6one2ue0njibctjlfofdgsqchu6gzovbb8wa7a0oium48v2tzhhik0n7k' );
define( 'SECURE_AUTH_SALT', 'i3zqybeiqwuolwn0bhilj99n6yb0donsemb4husnpnyjnpv9adxxn0y1hxg24pw5' );
define( 'LOGGED_IN_SALT',   'd5oyf6qzhtgmhm0pzqcroo7sx0bofhbkn5d7tvx7gmkuweezo6rykf9thiop6key' );
define( 'NONCE_SALT',       'xpgfce0vz4ybhszerjbkrfw6fezfi7a6hs9sqhniryahxrj6ld4quwkp1qiagqni' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wplj_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
