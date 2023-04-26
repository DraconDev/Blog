import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import classes from "./Test.module.scss";

interface Props {}

function Test(props: Props) {
	let link =
		"https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
	return (
		<Paper elevation={0}>
			{/* <img className="img" src={link} width="100%" height="5rem" /> */}
			<Box display="flex" justifyContent="center">
				<img
					src={link}
					style={{ width: "100%", height: "10rem", opacity: "50%" }}
				/>
			</Box>
			<Typography variant="h1" color="initial"></Typography>
		</Paper>
	);
}

export default Test;
