import { Container } from "@mui/system";
import useSWR from "swr";
import { BlogPost } from "../types/data_types";
import { Post } from "./Post";
import axios from "axios";

export const Posts = () => {
    // let articles = JSON.parse(JSON.stringify(data)) as BlogPost;
    // for (let article of Object.values(articles)) {
    // const article = articles[id];
    // console.log(article, "test");

    // async function getPosts(link: string) {
    //     console.log("test 3");
    //     const response = await axios.get(link, {
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     console.log(response.data, "test 2");
    //     return await response.data;
    // }

    async function getPosts(link: string) {
        console.log("test 3");
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers":
                    "Origin, X-Requested-With, Content-Type, Accept",
            },
        };
        const response = await axios.get(link, config);
        console.log(response.data, "test 2");
        return await response.data;
    }

    const { data: articles } = useSWR<BlogPost[]>(
        "https://newblogback.vercel.app/blog/all",
        getPosts
    );
    console.log(articles, "test");
    return (
        <Container>
            {articles &&
                articles.map((article, index) => (
                    <Post
                        key={index}
                        title={article.title}
                        article={article.body}
                        // id={+index}
                    ></Post>
                ))}
        </Container>
    );
};
