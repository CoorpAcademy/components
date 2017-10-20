import puppeteer from 'puppeteer';
import createEngine from './engine';

export const runInsidePage = (run, url) => async t => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const engine = createEngine(page, t);

  await page.goto(url, {waitUntil: 'networkidle'});
  await run(engine);

  browser.close();
};
