import Layout from "@/components/Layout";
import { search } from "../api"; 

export default function News({ results }) {
    return (
        <Layout>
            <ul>
                {results.map((result, index) => {
                    return(
                        <li key={index}> 
                            <span href={result.url} target="_blank" rel="noopener norefferer">{result.title}</span>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
} 

const API_KEY = process.env.API_KEY;  
export async function getServerSideProps({ params }) { 
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
    const results = await search(URL); 

    return {
        props: {
            results
        }
    }
}