import { load } from 'cheerio';
import axios from 'axios';

const SITE_URL = 'https://au.finance.yahoo.com/quote/AUDUSD=X?p=AUDUSD=X';

const SELECTOR = {
    quote: '[data-test=quote-header] div:nth-child(3) span'
}

/**
 * Load the site with give URL
 */
const fetchData = async () => {
    const result = await axios.get(SITE_URL);
    return load(result.data);
};

/**
 * Returns quotes by scraping the document
 */
export const getResults = async () => {
    const $reponse = await fetchData();
  
    const quote = $reponse(SELECTOR.quote).text();
  
    return {
        quote
    };
};