const https = require('https');
const fs = require('fs');
const path = require('path');

const posts = [
  {
    filename: 'ig-01.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/498027272_2242799022839187_7666738654909269098_n.jpg?stp=dst-jpg_e15_p240x240_tt6&_nc_cat=102&ig_cache_key=MzQ0Nzc0NTkzNTM4MTQ2MTQzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=_bi3ZaCzwCkQ7kNvwFlA2eX&_nc_oc=AdonpRpMuFOaQ4eB7DE9t7hCusvjEnQLFON0EHCgJ-1S-iIoQB5ReK9TnEqsnxY-JuQ&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfwziA3Ny8QKCRhLL6cFuvu8XSm5gbGgDtDkekrWnZj9Lg&oe=69CE26C3',
    caption: 'Travaux neufs — carrelage grand format. Contactez-nous pour tous vos projets.',
    tags: ['neuf', 'carrelagegrandformat', 'artisanat'],
  },
  {
    filename: 'ig-02.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/497807391_1361698205034959_5136335125449389731_n.jpg?stp=dst-jpg_e15_p240x240_tt6&_nc_cat=111&ig_cache_key=MzMyNTAzMDQxMTYyMzc1MDk2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=RK8oO5CcUekQ7kNvwGeLHR0&_nc_oc=AdqTD3PVp9Fl25U36y9gPzT0gPqfKs1o4GVfl0exx7VbHX2hlK7krGU0wMRXuD5_gAg&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfxmkcBO5Dtc3n_ZqlVXf7iIa11hPepchx5YGuRKwB2k5g&oe=69CE289B',
    caption: 'Rénovation — finition soignée. Passionné par les beaux projets.',
    tags: ['renovations', 'finition', 'carreleur'],
  },
  {
    filename: 'ig-03.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/502303430_1269269434774240_7761998684679705633_n.jpg?stp=dst-jpg_e15_p240x240_tt6&_nc_cat=105&ig_cache_key=MzQ0ODQ3NDg5NDE1OTEzNjM5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=VETZ2rhb-LoQ7kNvwHwOnta&_nc_oc=Adp3u1dA2a2RXDh_Veoe8pJBliGRtxoMFwl5Sru3Qzv0v3TEKAN1UDkVYjFnFwqL1dA&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_Afwd0WQFkeiOq7TVxcnzioo1GTNihCzWFX8V00STQTrwBg&oe=69CE3C8B',
    caption: 'Pose de carrelage — sols et murs. Artisanat de qualité en Savoie.',
    tags: ['carrelage', 'savoie', 'tiling'],
  },
  {
    filename: 'ig-04.webp',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.82787-15/653832923_18077471492421508_8616465270845039899_n.webp?stp=dst-webp_s150x150&_nc_cat=101&ig_cache_key=MzI1MTk0MjExNjAwNjYyMjQ4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjgxMHg4MTAuc2RyLkMzIn0%3D&_nc_ohc=oshHVNkkFLwQ7kNvwE44Qzm&_nc_oc=AdpwqKcs4UN98Tk6zC5A-Mv1_PMtVE00b8ylVwn4xaxXID1nAdsJP8OF_F3oGHMnlyY&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_Afw-WEKEYFero1lBpphrcOOP9XUWpyt_tmkLBYzAP8b_ow&oe=69CE5476',
    caption: 'Notre priorité est la satisfaction du client. Avant/après rénovation complète — bois, marbre, faïence.',
    tags: ['avantapres', 'renovation', 'marbre', 'bois'],
  },
  {
    filename: 'ig-05.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/503562584_1773761286888501_3053319736296854056_n.jpg?stp=dst-jpg_e15_p240x240_tt6&_nc_cat=100&ig_cache_key=MzEwODE4NjA5NTQ0MjE3OTM0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=2-ApdQhT9YAQ7kNvwEs2Mlh&_nc_oc=AdoBpIJeavuM2UJUy1-EGGIhwYhDWMv8iIwSlkax8lrFgYIPjCvogOz7VjEe8ciEWrU&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_Afwei3R48qEVSktQSg3rXQXGdE6pt7CT4Xdfg2epbAnpeg&oe=69CE453A',
    caption: 'Carrelage salle de bain — Chambéry. Devis gratuit. Expérience · Top prix · Qualité.',
    tags: ['salledebain', 'chambery', 'carreleur73'],
  },
  {
    filename: 'ig-06.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/503882503_1682581543133306_3831642371876244357_n.jpg?stp=dst-jpg_e15_p240x240_tt6&_nc_cat=104&ig_cache_key=MzEwMDk1Mjg4ODk2NzU4Mjg1OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=TY6S76FypagQ7kNvwF7thKx&_nc_oc=Adq2Go90giK1iWOJe1OtItsg0aW_9yQCVFrlRHX-EwgObgBOg3G95MSau5Ea47ooC7A&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_Afzam7J1IStP82Ifl5ZSj2ZKQeO6oHlmoSPEvOPYktvWBg&oe=69CE3D87',
    caption: 'Rénovation sol et mur — Chambéry et alentours. Devis gratuit.',
    tags: ['renovation', 'savoie', 'carrelage'],
  },
  {
    filename: 'ig-07.webp',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.82787-15/655184249_18106409998671724_3375999688409227001_n.webp?stp=dst-webp_s150x150&_nc_cat=105&ig_cache_key=MzA2Mjc3MzI2MjYyODgyNjQ5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=_caOMqewzIQQ7kNvwG2VaD0&_nc_oc=AdqzuvTZvfXG3qbYv80e9Vuu30yTpQCF2ufypyA1GrFyq84YCIa7fLKVSRgTL0kHb7Q&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfxJSGKhMz1yP13ikCxtUJEJtanLslxFzC7GcGqWZenG7g&oe=69CE3AFA',
    caption: 'Pose faïence murale — travaux de qualité. Chambéry, Bassens, Savoie.',
    tags: ['faince', 'bassens', 'salledebain'],
  },
  {
    filename: 'ig-08.jpg',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.71878-15/503455025_1092565692927309_460763689191137425_n.jpg?stp=dst-jpg_e15_p240x240_tt6&_nc_cat=105&ig_cache_key=MzA1NTU2NzQ0MDI3MTQxNjYyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=2p0rZeCA1pMQ7kNvwEtPUeh&_nc_oc=AdoNyBxUAD3ltQKXdJyDrqooregimjgUBoT5r0DC9naYUtYLuNs2JgHy0wNTMX3dodM&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfxZ7AteOmYC5JDVgndhrVHdlPNxemJ8LJH__GexIj3EqA&oe=69CE39B7',
    caption: 'Carrelage grand format — finitions soignées. Artisan carreleur 73.',
    tags: ['carreleur73', 'renovation', 'chambery'],
  },
  {
    filename: 'ig-09.webp',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.82787-15/652775481_18067664978291651_3743969340847694932_n.webp?stp=dst-webp_s150x150&_nc_cat=106&ig_cache_key=MzA1NDEzMzU2ODM4MjcxOTE1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=U5Ak-K39SLkQ7kNvwGs4pux&_nc_oc=Ado4JxItZRGruM2WMRkjY2bghsUoV6FhcQCREvp907phFy6BJcmRLktaO_6oAE5t-_w&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfyzcWCalIL_IgZm6qeJs4ZjSi84-9A2jiDSvnxuRou91A&oe=69CE4004',
    caption: 'Sol et mur — réalisation complète. Top prix, rapidement, qualité garantie.',
    tags: ['carrelage', 'savoie', 'flooring'],
  },
  {
    filename: 'ig-10.webp',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.82787-15/655106070_18102121942907232_2443535501755864589_n.webp?stp=dst-webp_s150x150&_nc_cat=109&ig_cache_key=MzA1MTkxMjM5NjQxODQxMzc2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=KxKT5lPRJVQQ7kNvwGMPgt8&_nc_oc=AdopBd5KjdAOiDmvvVDQS1bsk04TzcXzDCJdrMRZ9Jevo_1Gb3QxmwbEjGUwfk0ZzAI&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_Afz_m5VZw8UbQ4hlt9HxpnMcai4Mlhu-PqkBqHj9RdkCKw&oe=69CE29F6',
    caption: 'Pose carrelage salle de bain — résultat parfait. Chambéry, Savoie.',
    tags: ['salledebain', 'carreleur73', 'savoie'],
  },
  {
    filename: 'ig-11.webp',
    url: 'https://instagram.fkya5-1.fna.fbcdn.net/v/t51.82787-15/629471662_18341822461239654_1375313692089596758_n.webp?stp=dst-webp_p240x240&_nc_cat=103&ig_cache_key=MzA1MDUxMjU4OTg1MzAzNTE5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=W86CY5FMrIMQ7kNvwEWY9vt&_nc_oc=Adouiyl18syTSftvQG1eS-lq60zf0U6357zeGT2BE6NMLhh5QapMDfFr0Yn1-RaEkzg&_nc_zt=23&_nc_ht=instagram.fkya5-1.fna&_nc_gid=PyZZ3zg_MEY4g_BJWMZoXQ&_nc_ss=7a30f&oh=00_AfzleftKsS_2Q8KPj-UZfvz0SFak2PSQX0G9zRVcXCQ1Sw&oe=69CE4C0D',
    caption: 'Dernière réalisation — carrelage moderne. Artisan carreleur Chambéry.',
    tags: ['chambery', 'carrelage', 'renovation'],
  },
];

const outDir = path.join(__dirname, '../public/images/instagram');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

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
      console.log(`✓ ${post.filename} (${(size/1024).toFixed(1)}KB)`);
    } catch (e) {
      console.log(`✗ ${post.filename}: ${e.message}`);
    }
  }

  // Write JSON data file
  const dataOut = posts.map((p, i) => ({
    id: i + 1,
    src: `/images/instagram/${p.filename}`,
    caption: p.caption,
    tags: p.tags,
    instagramUrl: 'https://www.instagram.com/ibocarrelage/',
  }));
  fs.writeFileSync(path.join(__dirname, 'instagram-posts.json'), JSON.stringify(dataOut, null, 2));
  console.log('\n✓ instagram-posts.json written');
})();
