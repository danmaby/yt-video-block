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
		"data-video-url": videoURL || "",
	});

	return (
		<div {...blockProps}>
			{coverImage && <img src={coverImage} alt="Video Cover" />}
			<button type="button" aria-label="Play video">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					role="img"
					aria-hidden="true"
				>
					<path d="M8 5v14l11-7z" />
				</svg>
			</button>
		</div>
	);
}
