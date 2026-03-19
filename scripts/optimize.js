const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..', 'public', 'images');

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  let totalSaved = 0;
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      totalSaved += await optimizeImages(fullPath);
    } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
      // Only process files larger than 300KB
      if (stat.size > 300 * 1024) {
        console.log(`Optimizing: ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
        const tempPath = fullPath + '.tmp';
        
        try {
          if (file.toLowerCase().endsWith('.png')) {
            await sharp(fullPath).png({ quality: 65, compressionLevel: 9 }).toFile(tempPath);
          } else {
            await sharp(fullPath).jpeg({ quality: 65, mozjpeg: true }).toFile(tempPath);
          }
          
          // Replace original with optimized version
          fs.unlinkSync(fullPath);
          fs.renameSync(tempPath, fullPath);
          
          const newStat = fs.statSync(fullPath);
          const saved = stat.size - newStat.size;
          totalSaved += saved;
          console.log(`   -> New size: ${(newStat.size / 1024 / 1024).toFixed(2)} MB (Saved ${(saved / 1024 / 1024).toFixed(2)} MB)`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }
  }
  return totalSaved;
}

console.log('Starting image optimization...');
optimizeImages(directoryPath).then((total) => {
  console.log(`\n🎉 Optimization complete!`);
  console.log(`Total space saved: ${(total / 1024 / 1024).toFixed(2)} MB`);
});
