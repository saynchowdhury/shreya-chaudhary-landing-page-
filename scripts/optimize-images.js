import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Disable Sharp cache so Windows releases file handles immediately
sharp.cache(false);

const publicDir = path.resolve('public');

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  let totalSavedBytes = 0;
  let optimizedCount = 0;

  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) continue;
    const isJpeg = /\.(jpe?g)$/i.test(file);
    const isPng = /\.png$/i.test(file);

    if ((isJpeg || isPng) && stat.size > 800 * 1024) {
      try {
        const pipeline = sharp(filePath).resize(1600, 1600, {
          fit: 'inside',
          withoutEnlargement: true,
        });

        let buffer;
        if (isJpeg) {
          buffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
        } else {
          buffer = await pipeline.png({ quality: 85, compressionLevel: 8 }).toBuffer();
        }

        if (buffer.length < stat.size) {
          totalSavedBytes += (stat.size - buffer.length);
          fs.writeFileSync(filePath, buffer);
          console.log(`✓ ${file}: ${(stat.size / 1024 / 1024).toFixed(2)}MB -> ${(buffer.length / 1024).toFixed(1)}KB`);
          optimizedCount++;
        }
      } catch (err) {
        console.warn(`Could not optimize ${file}:`, err.message);
      }
    }
  }

  console.log(`\n🎉 Optimized ${optimizedCount} images. Saved ${(totalSavedBytes / 1024 / 1024).toFixed(1)} MB!`);
}

optimizeImages();
