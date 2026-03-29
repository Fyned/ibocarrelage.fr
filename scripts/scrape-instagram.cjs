const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });

  // Try mobile approach
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    locale: 'fr-FR',
    viewport: { width: 390, height: 844 },
  });

  // Intercept network to capture API responses
  const apiResponses = [];
  context.on('response', async (response) => {
    const url = response.url();
    if (url.includes('graphql') || url.includes('api/v1') || url.includes('feed') || url.includes('timeline')) {
      try {
        const body = await response.text();
        if (body.length > 100 && body.includes('edge_owner_to_timeline_media') ||
            body.includes('shortcode') || body.includes('thumbnail_src')) {
          apiResponses.push({ url, body: body.substring(0, 5000) });
        }
      } catch {}
    }
  });

  const page = await context.newPage();

  console.log('Trying mobile Instagram...');
  await page.goto('https://www.instagram.com/ibocarrelage/', {
    waitUntil: 'domcontentloaded',
    timeout: 20000,
  });

  await page.waitForTimeout(4000);

  // Check if we got past login
  const url = page.url();
  console.log('Current URL:', url);

  await page.screenshot({ path: 'scripts/instagram-mobile.png' });

  // Try to find post thumbnails via img tags
  const imgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
    })).filter(i => i.src && !i.src.includes('data:'));
  });

  console.log('Images found:', JSON.stringify(imgs, null, 2));
  console.log('API responses captured:', apiResponses.length);
  if (apiResponses.length > 0) {
    apiResponses.forEach(r => {
      console.log('API URL:', r.url);
      console.log('API Body preview:', r.body.substring(0, 1000));
    });
  }

  // Try scrolling to load content
  await page.evaluate(() => window.scrollTo(0, 300));
  await page.waitForTimeout(2000);

  const moreImgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
    })).filter(i => i.src && !i.src.includes('data:') && i.src.includes('instagram'));
  });
  console.log('Instagram images after scroll:', JSON.stringify(moreImgs, null, 2));

  await browser.close();
})();
