import { __ } from "@wordpress/i18n";
import { IconCertificate, IconSchool, Icon123 } from "@tabler/icons-react";

import { Flex, Text } from "@mantine/core";
import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

// Map the icon names to their respective components
const iconComponents = {
    IconCertificate,
    IconSchool,Icon123
};

export default function Edit(props) {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<Flex justify="space-between" align="flex-start" direction="row">
				{props.attributes.overview.map((item, index) => {
					const IconComponent = iconComponents[item.icon];

					return (
						<div
							key={index}
							style={{
								marginRight:
									index !== props.attributes.overview.length - 1 ? "32px" : "0",
							}}
							className="overview"
						>
							<Flex align="center">
								<IconComponent size={50} style={{ marginRight: "16px", color: "blue" }} />
								<Flex align="flex-start" direction="column">
									<Text fw={700} size="24px">
										{item.count}
									</Text>
									<Text c="dimmed" size="14px" weight={400}>
										{item.name}
									</Text>
								</Flex>
							</Flex>
						</div>
					);
				})}
			</Flex>
		</div>
	);
}
