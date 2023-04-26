import React from "react";
import classes from "./Courses.module.scss";
import coursesRaw from "../data/courses.json";
import { Box, Container, Typography } from "@mui/material";
import PrimaryLayout from "../layout/PrimaryLayout";
import { BlogPost } from "../types/data_types";

interface Props {}

function Courses(props: Props) {
	interface Courses {
		[courses: string]: [
			{
				name: string;
				instructor: string;
				duration: string;
				price: string;
				description: string;
			}
		];
	}
	let courses = JSON.parse(JSON.stringify(coursesRaw)) as Courses;

	let coursesPost = courses["courses"];
	console.log(coursesPost);

	let coursesToShow = [];
	for (let course of coursesPost) {
		coursesToShow.push(
			<Box sx={{ p: 4 }}>
				<Typography variant="h2">{course.name}</Typography>
				<Typography variant="body1" sx={{ m: 2 }}>
					{course.description}
				</Typography>
			</Box>
		);
	}

	return (
		<PrimaryLayout>
			<Container maxWidth="md" sx={{ display: "flex" }}></Container>
			{coursesToShow}
		</PrimaryLayout>
	);
}

export default Courses;
