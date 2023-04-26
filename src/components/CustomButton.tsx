import { Button } from "@mui/material";
import React from "react";

type Props = {
    index?: string | number;
    text: string;
    type?: string;
    href?: string;
};

const CustomButton = ({
    text,
    index = "",
    type = "button",
    href = "#",
}: Props) => {
    return (
        <Button
            type={type}
            href={href}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                color: "text.primary",
                backgroundColor: "primary.light",
                m: 0.5,
                "&:hover": {
                    color: "background.default",
                    backgroundColor: "text.primary",
                },
            }}
            key={index}
        >
            <h3>{text}</h3>
        </Button>
    );
};

export default CustomButton;
