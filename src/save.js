/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save({ attributes }) {
	const { coverImage, videoURL } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			position: "relative",
			width: "100%",
			maxWidth: "560px",
			aspectRatio: "16 / 9",
		},
		"data-video-url": videoURL || "",
	});

	return (
		<div {...blockProps}>
			{coverImage && (
				<img
					src={coverImage}
					alt="Video Cover"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
						cursor: "pointer",
					}}
				/>
			)}
			<button
				type="button"
				aria-label="Play video"
				style={{
					position: "absolute",
					top: "0",
					left: "0",
					width: "100%",
					height: "100%",
					cursor: "pointer",
					zIndex: 1,
					textAlign: "center",
					background: "rgba(0, 0, 0, 0.25)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					border: "none",
					padding: 0,
					outline: "none",
					transition: "box-shadow 0.2s ease",
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="white"
					width="40px"
					height="40px"
					role="img"
					aria-hidden="true"
				>
					<path d="M8 5v14l11-7z" />
				</svg>
			</button>
		</div>
	);
}
