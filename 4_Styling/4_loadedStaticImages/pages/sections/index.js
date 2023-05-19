import Head from "next/head";
import Layout from "@/components/Layout"; 
import { handler } from "../api";
import Link from "next/link";

export default function Sections({ results, title }) {
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
                    {results?.map((result, index) => (
                        <li key={index}>
                            -{" "} 
                            <Link href={`sections/${result.section}`}>
                                <span>{result.display_name}</span>
                            </Link> 
                            <br />
                        </li>
                    ))}
                </ul>
            </main>
        </Layout>
    );
}

const API_KEY = process.env.API_KEY; 
export async function getStaticProps({ params }) { 
    return {
        props: {
            results: await handler(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`),
            title: "Sections",
        },
    };    
}