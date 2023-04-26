import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Input, TextField } from "@mui/material";
import { MainTitle } from "./MainTitle";
import axios from "axios";
import { useForm } from "react-hook-form";
import CustomButton from "./CustomButton";

export const FeedbackForm = () => {
    const { register, handleSubmit } = useForm();
    interface NewsLetter {
        name: string;
        email: string;
    }

    const [email, setEmail] = useState("Email");
    const [name, setName] = useState("Name");
    const [feedback, setFeedback] = useState("Feedback");

    const onSubmit = (data: any) => console.log(data);

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                my: 2,
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <MainTitle>Feedback</MainTitle>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "right",
                        backgroundColor: "background.default",
                        borderWidth: `2px`,
                        borderStyle: `solid`,
                        borderColor: "primary.dark",
                        p: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            my: 1,
                        }}
                    >
                        <Input
                            {...register("name")}
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            onFocus={() => setName("")}
                            sx={{ px: 1 }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            my: 1,
                        }}
                    >
                        <Input
                            {...register("email")}
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            onFocus={() => setEmail("")}
                            sx={{ px: 1 }}
                        />
                    </Box>
                    <TextField
                        {...register("feedback")}
                        value={feedback}
                        onChange={(event) => setFeedback(event.target.value)}
                        onFocus={() => setFeedback("")}
                        variant="outlined"
                        multiline
                        rows={3}
                        fullWidth
                        sx={{ p: 2 }}
                    ></TextField>
                    <CustomButton text="Send" type="submit"></CustomButton>
                </Box>
            </form>
        </Box>
    );
};
