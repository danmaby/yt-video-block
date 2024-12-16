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
		style: {
			position: "relative",
			width: "100%",
			maxWidth: "560px",
			aspectRatio: "16/9",
		},
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
					<img
						src={coverImage}
						alt={__("Video Cover", "yt-video-block")}
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
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						cursor: "pointer",
						zIndex: 1,
						textAlign: "center",
						background: "rgba(0, 0, 0, 0.5)",
						borderRadius: "50%",
						width: "60px",
						height: "60px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						border: "none",
						padding: 0,
						outline: "none",
					}}
					aria-label={__("Play video", "yt-video-block")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						width="30px"
						height="30px"
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
