import sharp from "sharp";

const source = "src/assets/images/avatar.jpg";

await sharp(source)
  .resize(700)
  .webp({ quality: 82 })
  .toFile("public/avatar.webp");

await sharp(source)
  .resize(700)
  .jpeg({ quality: 82 })
  .toFile("public/avatar.jpg");
