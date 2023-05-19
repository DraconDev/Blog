import { Box, Link, SvgIcon } from "@mui/material";
import React from "react";
import { MainTitle } from "./MainTitle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { techBlogPosts } from "../data/popularPosts";

export const PopularPosts = () => {
    let popularContent = techBlogPosts.map((post, index) => (
        <Box
            key={index}
            sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                transition: "background-position 0.5s",
                borderRadius: "4px",
                background: "linear-gradient(to left, #111 50%, #f7f 100%)",
                backgroundSize: "300% 100%",
                backgroundPosition: "right center",
                "&:hover": {
                    backgroundPosition: "left center",
                },

                p: 1,
            }}
        >
            {/* <SvgIcon
                component={DoubleArrowIcon}
                sx={{
                    height: "100%",
                    alignSelf: "center",
                    mr: 2,
                    color: "text.primary",
                }}
            ></SvgIcon> */}

            <Link
                variant="h6"
                key={post.id}
                underline="none"
                href={`/blog/${post.id}`}
                color="text.primary"
                sx={{
                    m: 1,
                }}
            >
                {post.title}
            </Link>
        </Box>
    ));
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <MainTitle>Popular content</MainTitle>
            {popularContent}
        </Box>
    );
};
