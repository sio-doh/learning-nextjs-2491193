import Head from "next/head";
import Layout from "@/components/Layout"; 
import { handler } from "../api";

export default function News({ results, title }) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>{title}</h1> 
                <ul>
                    {results?.map(result => {
                        return (
                            <li key={result.url}>
                                <span>
                                    <a href={result.url} target="_blank" rel="noopener norefferer"> 
                                        {result.title}
                                    </a>
                                </span>
                            </li>
                        ); 
                    })}
                </ul>
            </main>
        </Layout>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { path: "top-stories" } }, 
            { params: { path: "popular" } }
        ],
        fallback: true
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
                    results: await handler(TOP_STORIES_URL),
                    title: "Top Stories"
                }
            }
        case "popular":
            return {
                props: {
                    results: await handler(MOST_POPULAR_URL),
                    title: "Popular"
                }
            }
        default: 
            return {
                props: null
            }
    }    
}