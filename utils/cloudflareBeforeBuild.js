require('dotenv').config({ path: '.env.local' });

if (process.env.VERCEL_ENV !== 'production') {
  console.log('Skipping Cloudflare cache purge');
  return;
}


async function main() {
  console.log(process.env);
  
}

main();