import Layout from "@/components/Layout";
import { search } from "../api"; 

export default function News({ results, query }) {
    return (
        <Layout>
            <h1>Top Stories: {query}</h1> 
            <ul>
                {results.map(result => {
                    return (
                        <li key={result.uri}>
                            <a href={result.url} target="_blank" rel="noopener norefferer"> 
                                {result.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
} 

const TOP_STORIES_API_KEY = process.env.TOP_STORIES_API_KEY;  
export async function getStaticProps() { 
    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${TOP_STORIES_API_KEY}`;
    const response = await fetch(URL); 
    const data = await response.json();
    console.log(data);
    return {
        props: {
            results: data.results
        }
    }
}