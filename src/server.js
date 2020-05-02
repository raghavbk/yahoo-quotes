import { schedule } from 'node-cron';
import express from 'express';
import { getResults } from './scraper';

const app = express();

/**
 * Running the scraper script for every one minute
 */
schedule('*/1 * * * *', async function() {
    console.log("---------------------");
    const quote = await getResults();
    console.log(quote);
});

const port = 5000;
app.listen(port, () => console.log(`Yahoo scraper started on port ${port}!`))
  