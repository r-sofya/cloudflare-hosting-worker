import { writeFile } from 'fs/promises';
import https from 'https';

const url = 'https://libraries-cmt.pages.dev/hosting-script.mjs';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', async () => {
    await writeFile('./hosting-script.mjs', data);
    console.log('✅ Synced hosting-script.mjs');
  });
});
