<?php
/**
 * Plugin Name:       YouTube Video Block
 * Description:       A lightweight, accessible, and customisable YouTube video block.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.2.0
 * Author:            Dan Maby
 * Author URI:        https://danmaby.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       yt-video-block
 *
 * @package CreateBlock
 */

if (!defined("ABSPATH")) {
	exit(); // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_yt_video_block_block_init()
{
	// Register block type and automatically load assets.
	register_block_type(__DIR__ . "/build");
}
add_action("init", "create_block_yt_video_block_block_init");

/**
 * Validates and sanitizes block attributes before saving.
 * Ensures `videoURL` is a valid YouTube or YouTube-nocookie URL.
 */
add_filter("rest_pre_insert_block", function ($prepared_block) {
	if (isset($prepared_block["attributes"]["videoURL"])) {
		$url = esc_url_raw($prepared_block["attributes"]["videoURL"]);
		if (
			!preg_match(
				"/^https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com)/",
				$url
			)
		) {
			$prepared_block["attributes"]["videoURL"] = "";
		}
	}
	return $prepared_block;
});
