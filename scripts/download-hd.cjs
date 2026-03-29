const https = require('https');
const fs = require('fs');
const path = require('path');

// High-res versions — removing stp size constraint, using e35 (full quality)
const posts = [
  {
    filename: 'ig-01.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/498027272_2242799022839187_7666738654909269098_n.jpg?stp=dst-jpg_e35&_nc_cat=102&ig_cache_key=MzQ0Nzc0NTkzNTM4MTQ2MTQzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=_bi3ZaCzwCkQ7kNvwFlA2eX&_nc_oc=AdonpRpMuFOaQ4eB7DE9t7hCusvjEnQLFON0EHCgJ-1S-iIoQB5ReK9TnEqsnxY-JuQ&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfwziA3Ny8QKCRhLL6cFuvu8XSm5gbGgDtDkekrWnZj9Lg&oe=69CE26C3',
  },
  {
    filename: 'ig-02.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/497807391_1361698205034959_5136335125449389731_n.jpg?stp=dst-jpg_e35&_nc_cat=111&ig_cache_key=MzMyNTAzMDQxMTYyMzc1MDk2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=RK8oO5CcUekQ7kNvwGeLHR0&_nc_oc=AdqTD3PVp9Fl25U36y9gPzT0gPqfKs1o4GVfl0exx7VbHX2hlK7krGU0wMRXuD5_gAg&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfxmkcBO5Dtc3n_ZqlVXf7iIa11hPepchx5YGuRKwB2k5g&oe=69CE289B',
  },
  {
    filename: 'ig-03.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/502303430_1269269434774240_7761998684679705633_n.jpg?stp=dst-jpg_e35&_nc_cat=105&ig_cache_key=MzQ0ODQ3NDg5NDE1OTEzNjM5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=VETZ2rhb-LoQ7kNvwHwOnta&_nc_oc=Adp3u1dA2a2RXDh_Veoe8pJBliGRtxoMFwl5Sru3Qzv0v3TEKAN1UDkVYjFnFwqL1dA&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_Afwd0WQFkeiOq7TVxcnzioo1GTNihCzWFX8V00STQTrwBg&oe=69CE3C8B',
  },
  {
    filename: 'ig-05.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/503562584_1773761286888501_3053319736296854056_n.jpg?stp=dst-jpg_e35&_nc_cat=100&ig_cache_key=MzEwODE4NjA5NTQ0MjE3OTM0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=2-ApdQhT9YAQ7kNvwEs2Mlh&_nc_oc=AdoBpIJeavuM2UJUy1-EGGIhwYhDWMv8iIwSlkax8lrFgYIPjCvogOz7VjEe8ciEWrU&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_Afwei3R48qEVSktQSg3rXQXGdE6pt7CT4Xdfg2epbAnpeg&oe=69CE453A',
  },
  {
    filename: 'ig-06.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/503882503_1682581543133306_3831642371876244357_n.jpg?stp=dst-jpg_e35&_nc_cat=104&ig_cache_key=MzEwMDk1Mjg4ODk2NzU4Mjg1OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=TY6S76FypagQ7kNvwF7thKx&_nc_oc=Adq2Go90giK1iWOJe1OtItsg0aW_9yQCVFrlRHX-EwgObgBOg3G95MSau5Ea47ooC7A&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_Afzam7J1IStP82Ifl5ZSj2ZKQeO6oHlmoSPEvOPYktvWBg&oe=69CE3D87',
  },
  {
    filename: 'ig-08.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/503455025_1092565692927309_460763689191137425_n.jpg?stp=dst-jpg_e35&_nc_cat=105&ig_cache_key=MzA1NTU2NzQ0MDI3MTQxNjYyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=2p0rZeCA1pMQ7kNvwEtPUeh&_nc_oc=AdoNyBxUAD3ltQKXdJyDrqooregimjgUBoT5r0DC9naYUtYLuNs2JgHy0wNTMX3dodM&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfxZ7AteOmYC5JDVgndhrVHdlPNxemJ8LJH__GexIj3EqA&oe=69CE39B7',
  },
];

const outDir = path.join(__dirname, '../public/images/instagram');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15' } }, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        file.close();
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

(async () => {
  for (const post of posts) {
    const dest = path.join(outDir, post.filename);
    try {
      await download(post.url, dest);
      const size = fs.statSync(dest).size;
      console.log(`✓ ${post.filename} — ${(size/1024).toFixed(1)}KB`);
    } catch (e) {
      console.log(`✗ ${post.filename}: ${e.message}`);
    }
  }
})();
