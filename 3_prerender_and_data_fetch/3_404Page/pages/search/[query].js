import Layout from "@/components/Layout";
import { search } from "../api"; 

export default function News({ results, query }) {
    return (
        <Layout>
            <h1>Popular: {query}</h1> 
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

const API_KEY = process.env.API_KEY;  
export async function getStaticProps() { 
    const URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
    const response = await fetch(URL); 
    const data = await response.json();
    console.log(data);
    return {
        props: {
            results: data.results, 
            title: "Most Popular"
        }
    }
}