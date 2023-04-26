import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PrimaryLayout from "../layout/PrimaryLayout";
import { ABOUT } from "../data/about";

export const About = () => {
	return (
		<PrimaryLayout>
			<Container maxWidth="md" sx={{ display: "flex" }}>
				<Typography variant="h6" sx={{}}>
					{ABOUT}
				</Typography>
			</Container>
		</PrimaryLayout>
	);
};
