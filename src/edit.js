/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	MediaUpload,
	InspectorControls,
} from "@wordpress/block-editor";

/**
 * Import WordPress components PanelBody, TextControl, Button from the components library.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody, TextControl, Button } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { coverImage, videoURL } = attributes;

	const blockProps = useBlockProps({
		"data-video-url": videoURL || "",
	});

	return (
		<>
			{/* Inspector Controls */}
			<InspectorControls>
				<PanelBody title={__("Block Settings", "yt-video-block")}>
					<TextControl
						label={__("Video URL", "yt-video-block")}
						value={videoURL || ""} // Ensure a default value
						onChange={(value) => setAttributes({ videoURL: value })}
						placeholder={__("Enter a valid YouTube URL", "yt-video-block")}
					/>
					<MediaUpload
						onSelect={(media) => setAttributes({ coverImage: media.url })}
						allowedTypes={["image"]}
						render={({ open }) => (
							<Button onClick={open} isPrimary>
								{__("Select Cover Image", "yt-video-block")}
							</Button>
						)}
					/>
				</PanelBody>
			</InspectorControls>

			{/* Editor Preview */}
			<div {...blockProps}>
				{coverImage && (
					<img src={coverImage} alt={__("Video Cover", "yt-video-block")} />
				)}
				<button type="button" aria-label={__("Play video", "yt-video-block")}>
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
		</>
	);
}
