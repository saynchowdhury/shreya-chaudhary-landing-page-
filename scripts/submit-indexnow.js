import fs from "node:fs";

const KEY = "e8f4a39b2c6d41a79853be04f7c19da2";
const HOST = "shreyachaudharymakeup.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  console.log("Submitting URLs to IndexNow...");
  const sitemap = fs.readFileSync("public/sitemap.xml", "utf8");
  const urls = [...sitemap.matchAll(/<loc>(https:\/\/shreyachaudharymakeup\.com[^<]*)<\/loc>/g)].map((m) => m[1]);

  console.log(`Found ${urls.length} URLs to submit to IndexNow.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow response status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log("✅ Successfully submitted all URLs to IndexNow (Bing, Yandex, Seznam, Naver)!");
    } else {
      const err = await res.text();
      console.warn("IndexNow response:", err);
    }
  } catch (err) {
    console.error("IndexNow submission error:", err);
  }
}

submitIndexNow();
