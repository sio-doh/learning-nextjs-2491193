import Head from "next/head";
import Layout from "@/components/Layout"; 
import { results } from "../api"; 
import List from "@/components/List";

export default function Posts(props) {
    return (
        <Layout>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <List {...props} />
        </Layout>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { path: "top-stories" } }, 
            { params: { path: "popular" } }
        ],
        fallback: false, 
    };
}

const API_KEY = process.env.API_KEY; 
export async function getStaticProps({ params }) { 
    const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
    const MOST_POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

    switch(params.path) {
        case "top-stories":
            return {
                props: {
                    results: await results(TOP_STORIES_URL),
                    title: "Top Stories",
                },
            };
        case "popular":
            return {
                props: {
                    results: await results(MOST_POPULAR_URL),
                    title: "Most Popular Stories",
                },
            };
        default: 
            return {
                props: null,
            };
    }    
}