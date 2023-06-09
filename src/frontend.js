import { Flex, Text, Select, Image, Grid, Col, Group } from "@mantine/core";
import {
	IconBook,
	IconBrowserCheck,
	IconDeviceIpadHorizontalQuestion,
	IconUsers,
} from "@tabler/icons-react";
import ApexCharts from "apexcharts";
import { useEffect, useRef, useState } from "react";

export default function Overview({ data }) {

	
	const [parentWidth, setParentWidth] = useState();

	useEffect(() => {
		const width = jQuery(".wp-block-create-block-learndash-overview").parent().width();
		setParentWidth(width);
	}, []);
  
	const isBelow767 = parentWidth <= 767;
	const isBelow576 = parentWidth <= 576;
	const rootClassName = `${isBelow767 ? "below-767 " : ""}${isBelow576 ? "below-576" : ""}`;

	const [showEarnings, setShowEarnings] = useState(data.showEarnings);
	const [showTopCourses, setShowTopCourses] = useState(data.showTopCourses);
	const [showCourseReports, setShowCourseReports] = useState(
		data.showCourseReports
	);
	const [showLatestSubmissions, setShowLatestSubmissions] = useState(
		data.showLatestSubmissions
	);

	useEffect(() => {
		if (jQuery(".ir-overview-page").length) {
			const __showEarnings =
				document
					.getElementsByClassName("ir-overview-page")[0]
					.getAttribute("data-earnings") === "true"
					? true
					: false;
			setShowEarnings(__showEarnings);
			const __showTopCourses =
				document
					.getElementsByClassName("ir-overview-page")[0]
					.getAttribute("data-courses") === "true"
					? true
					: false;
			setShowTopCourses(__showTopCourses);
			const __showCourseReports =
				document
					.getElementsByClassName("ir-overview-page")[0]
					.getAttribute("data-reports") === "true"
					? true
					: false;
			setShowCourseReports(__showCourseReports);
			const __showLatestSubmissions =
				document
					.getElementsByClassName("ir-overview-page")[0]
					.getAttribute("data-sub") === "true"
					? true
					: false;
			setShowLatestSubmissions(__showLatestSubmissions);
		}
	}, []);

	const chartRef = useRef(null);
	const circleChartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current) {
			const options = {
				chart: {
					type: "area",
				},
				stroke: {
					curve: "straight",
				},
				series: [
					{
						name: "Earnings",
						data: [0, 25, 51, 35, 50, 60, 75, 95],
					},
				],
				xaxis: {
					categories: [0, 10, 20, 30, 40, 50, 60, 70],
					title: {
						text: "Days",
						style: {
							color: "#ADB5BD",
							fontSize: "14px",
							fontWeight: "600",
						},
					},
				},
				yaxis: {
					labels: {
						formatter: (value) => `$${value}`,
					},
					categories: [25, 50, 75, 100],
				},
			};

			const chart = new ApexCharts(chartRef.current, options);
			chart.render();
		}
	}, [showEarnings]);

	useEffect(() => {
		if (circleChartRef.current) {
			const options = {
				chart: {
					height: 390,
					type: "radialBar",
				},
				series: [76, 67, 61],
				colors: ["#0D2964", "#2067FA", "#79A4FC"],
				labels: ["Completed", "In Progress", "Not Started"],
				plotOptions: {
					radialBar: {
						offsetY: 0,
						startAngle: 0,
						endAngle: 270,
						hollow: {
							margin: 5,
							size: "30%",
							background: "transparent",
							image: undefined,
						},
						dataLabels: {
							name: {
								show: false,
							},
							value: {
								show: false,
							},
						},
					},
				},
				legend: {
					show: true,
					floating: true,
					fontSize: "14px",
					position: "left",
					offsetX: 35,
					offsetY: 20,
					labels: {
						useSeriesColors: true,
					},
					markers: {
						size: 0,
					},
					formatter: function (seriesName, opts) {
						return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
					},
					itemMargin: {
						vertical: 3,
					},
				},
				responsive: [
					{
						breakpoint: 480,
						options: {
							legend: {
								show: false,
							},
						},
					},
				],
			};

			const chart = new ApexCharts(circleChartRef.current, options);
			chart.render();
		}
	}, [showCourseReports]);

	return (
		<div className={rootClassName}>
			<Flex
				justify="space-between"
				align="flex-start"
				direction="row"
				style={{ margin: "16px" }}
			>
				<Text fw={700} size="28px">
					Overview
				</Text>
				<Group className="user-info">
					<div>
						<Text ta="right" size="16px" fw={600} c="#3C3C3E">
							Alexa Domes
						</Text>

						<Text ta="right" fw={400} size="12px" c="#868E96">
							Alexa.domes4356@gmail.com
						</Text>
					</div>
					<Image
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
						radius="56px"
						width="48px"
						height="48px"
					/>
				</Group>
			</Flex>
			{/* Top 4 Blocks */}
			<Flex justify="space-between" align="flex-start" direction="row" wrap="wrap">
				<div className="overview">
					<Flex align="center">
						<IconBook
							size={50}
							strokeWidth={1.9}
							style={{ marginRight: "16px", color: "#2067FA" }}
						/>
						<Flex align="flex-start" direction="column">
							<Text fw={700} size="24px">
								10
							</Text>
							<Text c="dimmed" size="14px" fw={400}>
								Course
							</Text>
						</Flex>
					</Flex>
				</div>

				<div className="overview">
					<Flex align="center">
						<IconUsers
							size={50}
							style={{ marginRight: "16px", color: "#2067FA" }}
						/>
						<Flex align="flex-start" direction="column">
							<Text fw={700} size="24px">
								56
							</Text>
							<Text c="dimmed" size="14px" fw={400}>
								Students
							</Text>
						</Flex>
					</Flex>
				</div>

				<div className="overview">
					<Flex align="center">
						<IconBrowserCheck
							size={50}
							style={{ marginRight: "16px", color: "#2067FA" }}
						/>
						<Flex align="flex-start" direction="column">
							<Text fw={700} size="24px">
								20
							</Text>
							<Text c="dimmed" size="14px" fw={400}>
								Submissions
							</Text>
						</Flex>
					</Flex>
				</div>

				<div className="overview">
					<Flex align="center">
						<IconDeviceIpadHorizontalQuestion
							size={50}
							style={{ marginRight: "16px", color: "#2067FA" }}
						/>
						<Flex align="flex-start" direction="column">
							<Text fw={700} size="24px">
								53
							</Text>
							<Text c="dimmed" size="14px" fw={400}>
								Quiz Attempts
							</Text>
						</Flex>
					</Flex>
				</div>
			</Flex>

			{/* Earnings and Top Courses */}
			<Flex
				justify="space-between"
				align="flex-start"
				direction="row"
				wrap="wrap"
			>
				{showEarnings && (
					<div className="block">
						<Text fw={700} size="20px" style={{ marginBottom: "40px" }}>
							Earnings
						</Text>

						<Flex justify="flex-start" align="center" direction="row">
							<Text
								c="#868E96"
								size="16px"
								fw={400}
								style={{ marginRight: "10px" }}
							>
								Total:
							</Text>
							<Text
								fw={600}
								size="30px"
								c="#2067FA"
								style={{ marginRight: "25px" }}
							>
								$1465
							</Text>

							<Text
								c="#868E96"
								size="16px"
								fw={400}
								style={{ marginRight: "10px" }}
							>
								Unpaid:
							</Text>
							<Text fw={600} size="30px" c="#666666">
								$45
							</Text>
						</Flex>
						<div ref={chartRef} className="area-chart"></div>

						<Text ta="right" c="#2067FA" size="14px">
							See More Details
						</Text>
					</div>
				)}

				{/* Top Course */}
				{showTopCourses && (
					<div className="block">
						<Text fw={700} size="20px" style={{ marginBottom: "40px" }}>
							Top Courses
						</Text>
						<div className="grid-block">
							<Grid style={{ alignItems: "center", gap: "8px"}}>
								<Col span={2}>
									<Image
										width="58px"
										height="58px"
										radius="10px"
										src="https://cdn.mos.cms.futurecdn.net/Ks6KtG9fx9soz6ddidT9iY.jpg"
										alt="Science"
									/>
								</Col>
								<Col span={9}>
									<Grid style={{ height: "100%" }}>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text
													fw={600}
													size="16px"
													c="#212529"
													className="hover-effect"
												>
													Science
												</Text>
												<Text
													fw={600}
													size="12px"
													c="#666666"
													style={{
														padding: "8px 11px",
														backgroundColor: "#6666661A",
														borderRadius: "32px",
													}}
												>
													Free
												</Text>
											</Flex>
										</Col>
										<Col span={12}>
											<Flex justify="flex-start" align="center" direction="row">
												<Text fw={400} size="14px" c="#868E96">
													Total Students:
												</Text>
												<Text fw={600} size="14px" c="#868E96">
													456
												</Text>
											</Flex>
										</Col>
									</Grid>
								</Col>
							</Grid>
						</div>

						<div className="grid-block">
							<Grid style={{ alignItems: "center", gap: "8px"}}>
								<Col span={2}>
									<Image
										width="58px"
										height="58px"
										radius="10px"
										src="https://5.imimg.com/data5/TP/QU/QF/SELLER-32712236/gaming-pc-500x500.jpeg"
										alt="Science"
									/>
								</Col>
								<Col span={9}>
									<Grid style={{ height: "100%" }}>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={600} size="16px" className="hover-effect">
													Evolution of Everything in...
												</Text>
												<Text
													fw={600}
													size="12px"
													c="#666666"
													style={{
														padding: "8px 11px",
														backgroundColor: "#6666661A",
														borderRadius: "32px",
													}}
												>
													Open
												</Text>
											</Flex>
										</Col>
										<Col span={12}>
											<Flex justify="flex-start" align="center" direction="row">
												<Text fw={400} size="14px" c="#868E96">
													Total Students:
												</Text>
												<Text fw={600} size="14px" c="#868E96">
													22
												</Text>
											</Flex>
										</Col>
									</Grid>
								</Col>
							</Grid>
						</div>

						<div className="grid-block">
							<Grid style={{ alignItems: "center", gap: "8px"}}>
								<Col span={2}>
									<Image
										width="58px"
										height="58px"
										radius="10px"
										src="https://5.imimg.com/data5/TP/QU/QF/SELLER-32712236/gaming-pc-500x500.jpeg"
										alt="Science"
									/>
								</Col>
								<Col span={9}>
									<Grid style={{ height: "100%" }}>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={600} size="16px" className="hover-effect">
													Human Computer Interactions (HCI)
												</Text>
												<Text
													fw={600}
													size="12px"
													c="#666666"
													style={{
														padding: "8px 11px",
														backgroundColor: "#6666661A",
														borderRadius: "32px",
													}}
												>
													$128
												</Text>
											</Flex>
										</Col>
										<Col span={12}>
											<Flex justify="flex-start" align="center" direction="row">
												<Text fw={400} size="14px" c="#868E96">
													Total Students:
												</Text>
												<Text fw={600} size="14px" c="#868E96">
													325
												</Text>
											</Flex>
										</Col>
									</Grid>
								</Col>
							</Grid>
						</div>

						<div className="grid-block">
							<Grid style={{ alignItems: "center", gap: "8px"}}>
								<Col span={2}>
									<Image
										width="58px"
										height="58px"
										radius="10px"
										src="https://5.imimg.com/data5/TP/QU/QF/SELLER-32712236/gaming-pc-500x500.jpeg"
										alt="Science"
									/>
								</Col>
								<Col span={9}>
									<Grid style={{ height: "100%" }}>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={600} size="16px" className="hover-effect">
													Computer Science
												</Text>
												<Text
													fw={600}
													size="12px"
													c="#666666"
													style={{
														padding: "8px 11px",
														backgroundColor: "#6666661A",
														borderRadius: "32px",
													}}
												>
													Free
												</Text>
											</Flex>
										</Col>
										<Col span={12}>
											<Flex justify="flex-start" align="center" direction="row">
												<Text fw={400} size="14px" c="#868E96">
													Total Students:
												</Text>
												<Text fw={600} size="14px" c="#868E96">
													456
												</Text>
											</Flex>
										</Col>
									</Grid>
								</Col>
							</Grid>
						</div>

						<Text
							ta="center"
							c="#2067FA"
							size="14px"
							style={{ marginTop: "35px" }}
						>
							View More
						</Text>
					</div>
				)}

				{/* Course Report */}
				{showCourseReports && (
					<div className="block">
						<Flex justify="space-between" align="top" direction="row">
							<Text fw={700} size="20px" style={{ marginBottom: "40px" }}>
								Course Report
							</Text>
							<div>
								<Select
									style={{ fontSize: "14px" }}
									data={[
										{ value: "science", label: "Science" },
										{ value: "ng", label: "Angular" },
										{ value: "svelte", label: "Svelte" },
										{ value: "vue", label: "Vue" },
									]}
									defaultValue="science"
									styles={{
										control: {
											backgroundColor: "white", // Set the background color to white
											// height: "40px", // Set the height to your desired value
										},
									}}
								/>
							</div>
						</Flex>
						<div ref={circleChartRef} className="circle-chart"></div>

						<Text ta="right" c="#2067FA" size="14px">
							See More Details
						</Text>
					</div>
				)}

				{showLatestSubmissions && (
					<div className="block">
						<Text fw={700} size="20px" style={{ marginBottom: "40px" }}>
							Latest Submissions
						</Text>

						<div className="grid-block">
							<Grid style={{ alignItems: "center", gap: "8px"}}>
								<Col span={2}>
									<Image
										width="58px"
										height="58px"
										radius="10px"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2bNyuuj-5jvnxoBpEYs9YFSD6fT8CANrOKznFwZfaYsVmsz3HoJ3dV1ieQZeSWkR7gI&usqp=CAU"
										alt="Science"
									/>
								</Col>
								<Col span={9}>
									<Grid style={{ height: "100%" }}>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={600} size="16px" c="#666666">
													Arnold
												</Text>
												<Text fw={600} size="14px" c="#666666">
													Graded
												</Text>
											</Flex>
										</Col>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={400} size="14px" c="#868E96">
													The Evolution of the Human Race
												</Text>
												<Text fw={400} size="14px" c="#868E96">
													Assignment
												</Text>
											</Flex>
										</Col>
									</Grid>
								</Col>
							</Grid>
						</div>
						<div className="grid-block">
							<Grid style={{ alignItems: "center", gap: "8px"}}>
								<Col span={2}>
									<Image
										width="58px"
										height="58px"
										radius="10px"
										src="https://st2.depositphotos.com/2931363/10135/i/600/depositphotos_101351750-stock-photo-man-in-glasses-with-digital.jpg"
										alt="Science"
									/>
								</Col>
								<Col span={9}>
									<Grid style={{ height: "100%" }}>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={600} size="16px" c="#666666">
													Danny Super
												</Text>
												<Text fw={600} size="14px" c="#666666">
													Not Graded
												</Text>
											</Flex>
										</Col>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={400} size="14px" c="#868E96">
													Human Computer Interactions (HCI)
												</Text>
												<Text fw={400} size="14px" c="#868E96">
													Assignment
												</Text>
											</Flex>
										</Col>
									</Grid>
								</Col>
							</Grid>
						</div>
						<div className="grid-block">
							<Grid style={{ alignItems: "center", gap: "8px"}}>
								<Col span={2}>
									<Image
										width="58px"
										height="58px"
										radius="10px"
										src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
										alt="Science"
									/>
								</Col>
								<Col span={9}>
									<Grid style={{ height: "100%" }}>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={600} size="16px" c="#666666">
													Rakesh Jalandar
												</Text>
												<Text fw={600} size="14px" c="#666666">
													Not Graded
												</Text>
											</Flex>
										</Col>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={400} size="14px" c="#868E96">
													Advanced User Experience Design
												</Text>
												<Text fw={400} size="14px" c="#868E96">
													Assignment
												</Text>
											</Flex>
										</Col>
									</Grid>
								</Col>
							</Grid>
						</div>
						<div className="grid-block">
							<Grid style={{ alignItems: "center", gap: "8px"}}>
								<Col span={2}>
									<Image
										width="58px"
										height="58px"
										radius="10px"
										src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
										alt="Science"
									/>
								</Col>
								<Col span={9}>
									<Grid style={{ height: "100%" }}>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={600} size="16px" c="#666666">
													Ram Charan
												</Text>
												<Text fw={600} size="14px" c="#666666">
													Graded
												</Text>
											</Flex>
										</Col>
										<Col span={12}>
											<Flex
												justify="space-between"
												align="center"
												direction="row"
											>
												<Text fw={400} size="14px" c="#868E96">
													Human Computer Interactions
												</Text>
												<Text fw={400} size="14px" c="#868E96">
													Essay
												</Text>
											</Flex>
										</Col>
									</Grid>
								</Col>
							</Grid>
						</div>
						<Flex justify="space-between" align="center" direction="row">
							<Text c="#2067FA" size="14px">
								View all assignments
							</Text>
							<Text ta="right" c="#2067FA" size="14px">
								View All Essays
							</Text>
						</Flex>
					</div>
				)}
			</Flex>
		</div>
	);
}


document.addEventListener("DOMContentLoaded", function (event) {
	let elem = document.getElementsByClassName("ir-overview-page");
	if (elem.length > 0) {
		const data = {
			showEarnings: true,
			showTopCourses: true,
			showCourseReports: true,
			showLatestSubmissions: true,
		};
		ReactDOM.render(React.createElement(Overview, { data }), elem[0]);
	}
});
