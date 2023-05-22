import { Flex, Text, Select } from "@mantine/core";
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
				labels: ["Complted", "In Progress", "Not Started"],
				plotOptions: {
					radialBar: {
						offsetY: 0,
						startAngle: 0,
						endAngle: 270,
						hollow: {
							margin: 5,
							size: "50%",
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

				<div className="block">
					<Text fw={700} size="20px" style={{ marginBottom: "40px" }}>
						Top Courses
					</Text>
					<Text ta="center" c="#2067FA" size="14px">
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
