import { Box, Button, Container, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import CustomButton from "./CustomButton";

interface props {
    article: string;
    title: string;
    id: string;
}

export const Post = ({ article, title, id }: props) => {
    return (
        <Box
            key={id}
            sx={{
                bgcolor: "primary.dark",
                borderRadius: "6px",
                // boxShadow: "2px 2px 2px black",
                // border: "1px solid black",
                p: 1,
                m: 2,
                height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyItems: "space-between",
                alignItems: "space-between",
            }}
    >
            <Typography variant="h5" sx={{ p: 1, fontWeight: "bold" }}>
                {title}
            </Typography>
            <Typography
                variant="body1"
                sx={{ px: 2, display: "flex", flexGrow: 1 }}
            >
                {article}
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                }}
            >
                <CustomButton
                    text={"Read more"}
                    href={`/blog/${id}`}
                ></CustomButton>
            </Box>
        </Box>
    );
};
