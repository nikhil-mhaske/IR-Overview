import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Save(props) {
	const {attributes} = props;
	const {showEarnings, showTopCourses, showCourseReports, showLatestSubmissions} = attributes;
	return (
		
		<>
		{console.log(props)}
			<div {...useBlockProps.save()}>
				<div className="ir-overview-page" data-earnings={showEarnings} data-courses={showTopCourses} data-reports={showCourseReports} data-sub={showLatestSubmissions}>
					
				</div>
			</div>
		</>
	);
}

