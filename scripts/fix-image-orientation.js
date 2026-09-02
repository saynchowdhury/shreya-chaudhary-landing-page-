import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import sharp from 'sharp';

sharp.cache(false);

const publicDir = path.resolve('public');

const rotatedFiles = [
  'IMG_5031.JPG.jpeg',
  'IMG_5032.JPG.jpeg',
  'IMG_5033.JPG.jpeg',
  'IMG_6639.JPG.jpeg',
  'IMG_7690.JPG.jpeg',
  'IMG_8969.JPG.jpeg',
  'IMG_9054.JPEG',
  'IMG_9056.JPEG',
  'IMG_9057.JPEG',
  'IMG_9093.JPEG',
];

async function fixOrientations() {
  console.log('🔄 Restoring and auto-orienting vertical images from original git tree (commit 59b4437)...');

  for (const file of rotatedFiles) {
    const targetPath = path.join(publicDir, file);
    try {
      // Get the original buffer with its intact EXIF orientation metadata
      const origBuf = execSync(`git show 59b4437:public/${file}`, {
        maxBuffer: 40 * 1024 * 1024,
      });

      const origMeta = await sharp(origBuf).metadata();
      console.log(`\nProcessing ${file}: original ${origMeta.width}x${origMeta.height}, EXIF orientation: ${origMeta.orientation}`);

      // Apply .rotate() to physically rotate pixels based on EXIF, then resize to max 1600px
      const processedBuf = await sharp(origBuf)
        .rotate()
        .resize(1600, 1600, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: 82, mozjpeg: true })
        .toBuffer();

      const newMeta = await sharp(processedBuf).metadata();
      fs.writeFileSync(targetPath, processedBuf);

      console.log(`✅ Fixed ${file}: now vertical ${newMeta.width}x${newMeta.height} (${(processedBuf.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`❌ Failed to fix ${file}:`, err.message);
    }
  }

  console.log('\n🎉 All 10 images are now perfectly vertical (portrait)!');
}

fixOrientations();
