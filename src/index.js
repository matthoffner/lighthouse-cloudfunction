const lighthouse = require('lighthouse');
const puppeteer = require('puppeteer');

const init = async () => await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--save-assets'],
    // executablePath: "/Applications/Chromium.app/Contents/MacOS/Chromium",
});

const handle = async (url) => {
    const browser = await init();
    const res = await lighthouse(url, {
        port: new URL(browser.wsEndpoint()).port,
        output: 'html',
        extraHeaders: { 'DNT': '1' }
    });
    browser.close();
    return res.report;
}

exports.lighthouse = async (request, response) => {
    if (request.query.apiKey === process.env.SECRET) {
        const data = await handle(request.query.url);
        response
          .status(200)
          .send(data);
      } else {
        response.status(400).send("API key is not valid");
    }
}
