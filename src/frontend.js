import { Flex, Text, Select, Image, Grid, Col } from "@mantine/core";
import { IconCertificate } from "@tabler/icons-react";
import ApexCharts from "apexcharts";
import { useEffect, useRef } from "react";

export default function Overview() {
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
						data: [25, 51, 35, 50, 60, 75, 95],
					},
				],
				xaxis: {
					categories: [10, 20, 30, 40, 50, 60, 70],
					title: {
						text: "Days",
					},
				},
				yaxis: {
					labels: {
						formatter: (value) => `$${value}`,
					},
					categories: [0, 25, 50, 75, 100],
				},
			};

			const chart = new ApexCharts(chartRef.current, options);
			chart.render();
		}
	}, []);

	useEffect(() => {
		if (circleChartRef.current) {
			const options = {
				chart: {
					height: 390,
					type: "radialBar",
				},
				series: [76, 67, 61],
				colors: ["#024368", "#0583D2", "#4FD6F7"],
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
					fontSize: "16px",
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
	}, []);

	return (
		<>
			{/* Top 4 Blocks */}
			<Flex justify="space-between" align="flex-start" direction="row">
				<div
					style={{
						marginRight: "32px",
					}}
					className="overview"
				>
					<Flex align="center">
						<IconCertificate
							size={50}
							style={{ marginRight: "16px", color: "blue" }}
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

				<div
					style={{
						marginRight: "32px",
					}}
					className="overview"
				>
					<Flex align="center">
						<IconCertificate
							size={50}
							style={{ marginRight: "16px", color: "blue" }}
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

				<div
					style={{
						marginRight: "32px",
					}}
					className="overview"
				>
					<Flex align="center">
						<IconCertificate
							size={50}
							style={{ marginRight: "16px", color: "blue" }}
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
						<IconCertificate
							size={50}
							style={{ marginRight: "16px", color: "blue" }}
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
			<Flex justify="space-between" align="flex-start" direction="row">
				<div
					style={{
						marginRight: "32px",
					}}
					className="block"
				>
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
							$ 1465
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
							$ 45
						</Text>
					</Flex>
					<div ref={chartRef} className="area-chart"></div>

					<Text ta="right" c="#2067FA" size="14px">
						See More Details
					</Text>
				</div>

				{/* Top Course */}
				<div className="block">
					<Text fw={700} size="20px" style={{ marginBottom: "40px" }}>
						Top Courses
					</Text>
					<div className="grid-block">
						<Grid  style={{ alignItems: "center" }}>
							<Col span={2}>
								<Image
									width="58px"
									height="58px"
									radius="10px"
									src="https://cdn.mos.cms.futurecdn.net/Ks6KtG9fx9soz6ddidT9iY.jpg"
									alt="Science"
								/>
							</Col>
							<Col span={10}>
								<Grid style={{ height: "100%" }}>
									<Col span={12}>
										<Flex
											justify="space-between"
											align="center"
											direction="row"
										>
											<Text fw={600} size="16px">
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
						<Grid gutter="lg" style={{ alignItems: "center" }}>
							<Col span={2}>
								<Image
									width="58px"
									height="58px"
									radius="10px"
									src="https://5.imimg.com/data5/TP/QU/QF/SELLER-32712236/gaming-pc-500x500.jpeg"
									alt="Science"
								/>
							</Col>
							<Col span={10}>
								<Grid gutter="lg" style={{ height: "100%" }}>
									<Col span={12}>
										<Flex
											justify="space-between"
											align="center"
											direction="row"
										>
											<Text fw={600} size="16px">
												Evolution of Everything in the History
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
						<Grid gutter="lg" style={{ alignItems: "center" }}>
							<Col span={2}>
								<Image
									width="58px"
									height="58px"
									radius="10px"
									src="https://5.imimg.com/data5/TP/QU/QF/SELLER-32712236/gaming-pc-500x500.jpeg"
									alt="Science"
								/>
							</Col>
							<Col span={10}>
								<Grid gutter="lg" style={{ height: "100%" }}>
									<Col span={12}>
										<Flex
											justify="space-between"
											align="center"
											direction="row"
										>
											<Text fw={600} size="16px">
												Human Computer Interactions
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
						<Grid gutter="lg" style={{ alignItems: "center" }}>
							<Col span={2}>
								<Image
									width="58px"
									height="58px"
									radius="10px"
									src="https://5.imimg.com/data5/TP/QU/QF/SELLER-32712236/gaming-pc-500x500.jpeg"
									alt="Science"
								/>
							</Col>
							<Col span={10}>
								<Grid gutter="lg" style={{ height: "100%" }}>
									<Col span={12}>
										<Flex
											justify="space-between"
											align="center"
											direction="row"
										>
											<Text fw={600} size="16px">
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

					<Text ta="center" c="#2067FA" size="14px" style={{marginTop: "19px"}}>
						View More
					</Text>
				</div>
			</Flex>

			{/* Course Report & Submissions */}
			<Flex justify="space-between" align="flex-start" direction="row">
				<div
					style={{
						marginRight: "32px",
					}}
					className="block"
				>
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
										height: "40px", // Set the height to your desired value
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

				<div className="block">
					<Text fw={700} size="20px" style={{ marginBottom: "40px" }}>
						Latest Submissions
					</Text>

					<div className="grid-block">
						<Grid gutter="lg" style={{ alignItems: "center" }}>
							<Col span={2}>
								<Image
									width="58px"
									height="58px"
									radius="10px"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2bNyuuj-5jvnxoBpEYs9YFSD6fT8CANrOKznFwZfaYsVmsz3HoJ3dV1ieQZeSWkR7gI&usqp=CAU"
									alt="Science"
								/>
							</Col>
							<Col span={10}>
								<Grid gutter="lg" style={{ height: "100%" }}>
									<Col span={12}>
										<Flex
											justify="space-between"
											align="center"
											direction="row"
										>
											<Text fw={600} size="16px" c="#666666">
												Arnold
											</Text>
											<Text
												fw={600}
												size="14px"
												c="#666666"
											>
												Graded
											</Text>
										</Flex>
									</Col>
									<Col span={12}>
										<Flex justify="space-between" align="center" direction="row">
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
						<Grid gutter="lg" style={{ alignItems: "center" }}>
							<Col span={2}>
								<Image
									width="58px"
									height="58px"
									radius="10px"
									src="https://st2.depositphotos.com/2931363/10135/i/600/depositphotos_101351750-stock-photo-man-in-glasses-with-digital.jpg"
									alt="Science"
								/>
							</Col>
							<Col span={10}>
								<Grid gutter="lg" style={{ height: "100%" }}>
									<Col span={12}>
										<Flex
											justify="space-between"
											align="center"
											direction="row"
										>
											<Text fw={600} size="16px" c="#666666">
												Danny Super
											</Text>
											<Text
												fw={600}
												size="14px"
												c="#666666"
											>
												Not Graded
											</Text>
										</Flex>
									</Col>
									<Col span={12}>
										<Flex justify="space-between" align="center" direction="row">
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
						<Grid gutter="lg" style={{ alignItems: "center" }}>
							<Col span={2}>
								<Image
									width="58px"
									height="58px"
									radius="10px"
									src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
									alt="Science"
								/>
							</Col>
							<Col span={10}>
								<Grid gutter="lg" style={{ height: "100%" }}>
									<Col span={12}>
										<Flex
											justify="space-between"
											align="center"
											direction="row"
										>
											<Text fw={600} size="16px" c="#666666">
												Rakesh Jalandar
											</Text>
											<Text
												fw={600}
												size="14px"
												c="#666666"
											>
												Not Graded
											</Text>
										</Flex>
									</Col>
									<Col span={12}>
										<Flex justify="space-between" align="center" direction="row">
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
						<Grid gutter="lg" style={{ alignItems: "center" }}>
							<Col span={2}>
								<Image
									width="58px"
									height="58px"
									radius="10px"
									src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
									alt="Science"
								/>
							</Col>
							<Col span={10}>
								<Grid gutter="lg" style={{ height: "100%" }}>
									<Col span={12}>
										<Flex
											justify="space-between"
											align="center"
											direction="row"
										>
											<Text fw={600} size="16px" c="#666666">
												Ram Charan
											</Text>
											<Text
												fw={600}
												size="14px"
												c="#666666"
											>
												Graded
											</Text>
										</Flex>
									</Col>
									<Col span={12}>
										<Flex justify="space-between" align="center" direction="row">
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
			</Flex>
		</>
	);
}

document.addEventListener("DOMContentLoaded", function (event) {
	let elem = document.getElementsByClassName("ir-overview-page");
	if (elem.length > 0) {
		ReactDOM.render(React.createElement(Overview), elem[0]);
	}
});
