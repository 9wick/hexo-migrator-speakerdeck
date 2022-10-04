import Parser from 'rss-parser';


export const getSpeakerDeckJson = async (username: string) => {

  const items: Parser.Item[] = [];

  for (let page = 1; page < 10000; page++) { // maybe list < 100000
    let parser = new Parser();
    const url = `https://speakerdeck.com/${username}.atom?page=${page}`
    let feed = await parser.parseURL(url);

    if (feed.items.length === 0) {
      break;
    }
    items.push(...feed.items);

  }


  return items;
}