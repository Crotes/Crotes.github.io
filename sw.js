const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Crotes"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"db50bf2f92572fff07ea8ace782c0d5e","url":"./2021/01/19/STL/index.html"},{"revision":"49e2ca7fcc810ba40fc12bc6cce79713","url":"./2021/01/22/程序改错与填空/index.html"},{"revision":"440746fc5767796310d19dd507ff7ca4","url":"./2021/01/22/程序设计/index.html"},{"revision":"894188977a55d2b1bfb2b95f41b54be0","url":"./2021/01/22/算法/index.html"},{"revision":"f298a377b46bea41573ab1ec8e68c7e0","url":"./2021/01/22/网页自学/index.html"},{"revision":"e61a45b066d6a323e5f1031c0e5b1049","url":"./2021/01/22/acm集训/index.html"},{"revision":"ee7062ccaffa4a9609be2f71eab55e3e","url":"./2021/01/22/algorithm/index.html"},{"revision":"e97800a494c2282ca5eac818ecb2a4ea","url":"./2021/01/23/ACM技能树/index.html"},{"revision":"c38fa7b65be6f7130fafbdec6bdf1819","url":"./2021/01/30/标签/index.html"},{"revision":"b212b1ac59134523faa1ffccbab8b295","url":"./archives/2021/01/index.html"},{"revision":"f717e4b8e66d244458e5b306be1cb31e","url":"./archives/2021/index.html"},{"revision":"2e292383f7fdd609c83b0d89685ab71f","url":"./archives/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"b96cfe66b5d056dcbc5e0229028421d5","url":"./categories/网页自学/index.html"},{"revision":"7bdad748119e49052f38c3f539bd8284","url":"./categories/学校题库/index.html"},{"revision":"2623bfba2eda6994a77a0f99fee104fc","url":"./categories/ACM/index.html"},{"revision":"d7ef3bf52382dc60ad324697951119ca","url":"./categories/ACM技能树/index.html"},{"revision":"675b7f81ff6c5ad3419b634886a83cf4","url":"./categories/C-C/index.html"},{"revision":"2eef8a85137ce461d258504a2b02e667","url":"./categories/index.html"},{"revision":"cd40e72714dfa9f3b8da18c6e90babc7","url":"./css/index.css"},{"revision":"91fa7cf406c41eb03b25aa3a83488e45","url":"./css/my.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b8bbccd12ba9fa3d4e3b26260d7d5d6","url":"./img/siteicon/browserconfig.xml"},{"revision":"2185e75c34576dc0c2d04b5bffbc69da","url":"./img/siteicon/README.html"},{"revision":"4be0bb33c86a8c4b6a34c2823b2be275","url":"./index.html"},{"revision":"f7efbacdf5c8e57ad57deace1198b010","url":"./js/main.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./js/my.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"09eca179e8646927f5615e19839bc847","url":"./link/index.html"},{"revision":"8c228ee3d84b4de456bead4a06bdf69e","url":"./manifest.json"},{"revision":"ecb818fe670accb59744d6c0d869ddee","url":"./movie/index.html"},{"revision":"356447a18d892bc59e39849f99d47c8a","url":"./music/index.html"},{"revision":"09559190fba0fdfd7b1113d456f1ece1","url":"./sw-register.js"},{"revision":"92bdf61bd64b7b13f52048a065b41a5b","url":"./tags/ACM/index.html"},{"revision":"9c58fa60a96404e1a890a20f6cccd7c6","url":"./tags/c-头文件/index.html"},{"revision":"b6bb0bf57f62398ec3ed85c75382500c","url":"./tags/C-C/index.html"},{"revision":"46849f3d78227dfbda71a429738cf03b","url":"./tags/c语言题库/index.html"},{"revision":"b6612e067f61e79393abc94a33edd206","url":"./tags/html/index.html"},{"revision":"678f7525963b51d584a93a49352c9be4","url":"./tags/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 字体文件
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr的CDN资源
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();