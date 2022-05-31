const testData = [
  {
    // this should fail due missing cookie popup
    "url_path": "/hosting",
    "snapshot": "hosting.png"
  },
  {
    "url_path": "/google/photos/",
    "snapshot": "google_photos.png"
  },
  {
    "url_path": "/news",
    "snapshot": "news.png"
  }
];

module.exports = { testData };
