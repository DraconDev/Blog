import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React from "react";
import data from "../data/articles.json";
import { Post } from "./Post";
import Button from "@mui/material/Button";
import { Box, Link } from "@mui/material";
import { ArticleSharp } from "@mui/icons-material";
import { BlogPost } from "../types/data_types";

export const Posts = () => {
    let articles = JSON.parse(JSON.stringify(data)) as BlogPost;

    let posts: React.ReactNode[] = [];
    for (let article of Object.values(articles)) {
        // const article = articles[id];
        console.log(article, "test");
        posts.push(
            <Post
                key={article.id}
                title={article.title}
                article={article.body}
                id={article.id}
            ></Post>
        );
    }
    return <Container>{posts}</Container>;
};
