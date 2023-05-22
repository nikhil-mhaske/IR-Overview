import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
export default function Save(props) {
	return (
		<>
			<div {...useBlockProps.save()}>
				<div className="ir-overview-page">
					
				</div>
			</div>
		</>
	);
}
