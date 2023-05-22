import { __ } from "@wordpress/i18n";

export default function Save({ attributes }) {
	return (
		<>
			<div>
				<div>
					{attributes.overview.map((item, index) => {
						return (
							<div
								key={index}
								style={{
									marginRight:
										index !== attributes.overview.length - 1 ? "32px" : "0",
								}}
								className="overview"
							>
								<div>
									{item.icon}
									<div>
										<div>{item.count}</div>
										<div>{item.name}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
