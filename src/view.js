document.addEventListener("click", (event) => {
	const button = event.target.closest(
		".wp-block-create-block-yt-video-block button"
	);
	if (!button) return;

	const container = button.closest(".wp-block-create-block-yt-video-block");
	const videoURL = container.dataset.videoUrl;

	if (videoURL) {
		const autoplayURL = videoURL.includes("?")
			? `${videoURL}&autoplay=1`
			: `${videoURL}?autoplay=1`;

		container.innerHTML = "";
		const iframe = document.createElement("iframe");
		iframe.width = "100%";
		iframe.height = "100%";
		iframe.src = autoplayURL;
		iframe.frameBorder = "0";
		iframe.allow =
			"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
		iframe.allowFullscreen = true;
		iframe.style.position = "absolute";
		iframe.style.top = "0";
		iframe.style.left = "0";
		container.appendChild(iframe);
	}
});
