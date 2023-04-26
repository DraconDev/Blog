import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import { MainTitle } from "./MainTitle";
import { PopularPosts } from "./PopularPosts";
import { FeedbackForm } from "./FeedbackForm";
import CustomButton from "./CustomButton";

export const SideBar = () => {
    const top_categories = [
        "React",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
        "Material-UI",
    ];

    const category_buttons = top_categories.map((category, index) => {
        return <CustomButton index={index} text={category}></CustomButton>;
    });

    return (
        <Box>
            <MainTitle>Top categories</MainTitle>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    my: 2,
                }}
            >
                {category_buttons}
            </Box>
            <PopularPosts></PopularPosts>

            <FeedbackForm />
        </Box>
    );
};
