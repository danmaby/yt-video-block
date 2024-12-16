/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log("Hello World! (from create-block-yt-video-block block)");
/* eslint-enable no-console */

document.addEventListener("click", (event) => {
	// Check if the clicked element is the play button inside the video block
	const button = event.target.closest(
		".wp-block-create-block-yt-video-block button"
	);
	if (!button) return;

	// Get the parent container and the video URL from the data attribute
	const container = button.closest(".wp-block-create-block-yt-video-block");
	const videoURL = container.dataset.videoUrl;

	if (videoURL) {
		const autoplayURL = videoURL.includes("?")
			? `${videoURL}&autoplay=1`
			: `${videoURL}?autoplay=1`;

		// Replace the container's content with the iframe
		container.innerHTML = `
            <iframe
                width="100%"
                height="100%"
                src="${autoplayURL}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            ></iframe>
        `;
	}
});
