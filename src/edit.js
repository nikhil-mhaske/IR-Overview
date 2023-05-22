import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";
import Overview from "./frontend.js";


export default function Edit(props) {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<Overview />
		</div>
	);
}
