import React from "react";
import PrimaryLayout from "../layout/PrimaryLayout";
import data from "../data/articles.json";
import { BlogPost } from "../types/data_types";

import { Box, Container, Typography } from "@mui/material";
import { MainTitle } from "../components/MainTitle";

export const BlogArticle = ({ id }: { id: string }) => {
	let articles = JSON.parse(JSON.stringify(data)) as BlogPost;

	return (
		<PrimaryLayout>
			{/* <div>BlogArticle</div> */}
			<Typography variant="h3" color="initial">
				<Container maxWidth="lg" sx={{ mt: 4 }}>
					<Typography variant="h4">{articles[id].title}</Typography>
					<Typography variant="body1" sx={{ mt: 4, width: "70%" }}>
						{articles[id] && articles[id].body}
					</Typography>
				</Container>
			</Typography>
		</PrimaryLayout>
	);
};

// export const BlogArticle = (params?: any) => {
// 	console.log(params);
// 	// let articles = JSON.parse(JSON.stringify(data)) as BlogPost;

// 	return (
// 		<PrimaryLayout>
// 			{/* <div>BlogArticle</div> */}
// 			<Typography variant="h3" color="initial"></Typography>
// 		</PrimaryLayout>
// 	);
// };
