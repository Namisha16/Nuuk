const url = 'https://nuuk.in/products/nuuk-halo-3d-air-circulation-fan-with-mood-lamp-v2';

fetch(url)
  .then(res => res.text())
  .then(html => {
    const urlRegex = /(?:https:)?\/\/cdn\.shopify\.com\/s\/files\/[^\s"'\\]+\.(?:jpg|jpeg|png|webp|gif)/g;
    const matches = html.match(urlRegex) || [];
    const urls = new Set(matches.map(u => u.startsWith('//') ? 'https:' + u : u));
    console.log(Array.from(urls).join('\n'));
  })
  .catch(console.error);
