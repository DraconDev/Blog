import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const MainTitle = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                width: "100%",

                borderTopRightRadius: "6px",
                borderTopLeftRadius: "6px",
                // mx: "15px",
                // mt: "20px",
                borderBottom: "100px",
                borderColor: "primary.light",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    p: 1,

                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "secondary.light",
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};
