import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import "./editor.scss";
import Overview from "./frontend.js";

export default function Edit(props) {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const {
		showEarnings,
		showTopCourses,
		showCourseReports,
		showLatestSubmissions,
	} = attributes;

	const ManipulatedOverview = () => {
		return <Overview data={attributes} />;
	};

	return (
		<div {...blockProps}>
			<ManipulatedOverview />
			<InspectorControls>
				<PanelBody title={__("Cards Display Settings")} initialOpen={true}>
					<ToggleControl
						label={__("Earnings")}
						checked={showEarnings}
						onChange={(value) => setAttributes({ showEarnings: value })}
					/>
					<ToggleControl
						label={__("Top Courses")}
						checked={showTopCourses}
						onChange={(value) => setAttributes({ showTopCourses: value })}
					/>
					<ToggleControl
						label={__("Course Reports")}
						checked={showCourseReports}
						onChange={(value) => setAttributes({ showCourseReports: value })}
					/>
					<ToggleControl
						label={__("Latest Submissions")}
						checked={showLatestSubmissions}
						onChange={(value) =>
							setAttributes({ showLatestSubmissions: value })
						}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
