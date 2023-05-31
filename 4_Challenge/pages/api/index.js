import gif from "../../public/not-found.gif";

export async function results(url) {
  const response = await fetch(url);
  const data = await response.json(); 
  const results = data.results || [];
  return results.map(result => {
    let img = null;
    if (!!result.multimedia && result.multimedia.length > 0) {
      img = result.multimedia[0].url;
    } else if (!!result.media && result.media.length > 0 && result.media[0]["media-metadata"].length > 0) {
      img = result.media[0]?.["media-metadata"][0]?.url;
    } 
    else {
      img = gif; 
    }
    return {
      uri: result.uri, 
      url: result.url,
      title: result.title,
      img,
    };
  });
}

export async function handler(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export async function search(url) {
  const response = await fetch(url);
  const data = await response.json();
  const docs = data.response.docs ?? [];
  const results = docs.map(doc => {
    return {
      title: doc?.headline?.main, 
      url: doc.web_url,
      uri: doc.uri,
      img: doc.multimedia && doc.multimedia.length > 0 ? "https://static01.nyt.com/" + doc.multimedia[0].url : gif
    }
  })
  return results;
}
