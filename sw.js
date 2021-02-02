const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"505c3a860e9c98a8faa4070e8d98207a","url":"./2021/01/19/STL/index.html"},{"revision":"f61b1c778aac5a03061dc04d6ef1fa10","url":"./2021/01/22/程序改错与填空/index.html"},{"revision":"6e5a1f65bdf5c73c00655edf9f78746b","url":"./2021/01/22/程序设计/index.html"},{"revision":"0906c2911d220ddf476fa9ef790b4faa","url":"./2021/01/22/算法/index.html"},{"revision":"0f36f51a0e7e75175b5f33295b5d6b25","url":"./2021/01/22/网页自学/index.html"},{"revision":"2a7feb1932c6591be6ae26f4f2e51fe7","url":"./2021/01/22/acm集训/index.html"},{"revision":"ee3937d40e9e19465b72a9570ceef149","url":"./2021/01/22/algorithm/index.html"},{"revision":"d755ce82c41cf987bb8a8448f2c6033f","url":"./2021/01/23/ACM技能树/index.html"},{"revision":"9d408a858abcd9e18008c7fca765dca5","url":"./2021/01/30/标签/index.html"},{"revision":"49c78528ad3920a622681df35a2e96a4","url":"./archives/2021/01/index.html"},{"revision":"430a6af7f9376889363d5ad6f0906e78","url":"./archives/2021/index.html"},{"revision":"10469501c8a3eb272067b5a1a503536b","url":"./archives/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"36a52f766f56826cc17e916b8414e136","url":"./categories/网页自学/index.html"},{"revision":"c6f4345b44de0743eba2c5adbe78d176","url":"./categories/学校题库/index.html"},{"revision":"1825aae5824d1b3a7f33062d2ba262f5","url":"./categories/ACM/index.html"},{"revision":"478b0c6736edc83360355408ea3a3b2f","url":"./categories/ACM技能树/index.html"},{"revision":"d23d577d1c25b2f717b54eb92c36c709","url":"./categories/C-C/index.html"},{"revision":"dda16a17b7dfdd52f0fece54ed3502ea","url":"./categories/index.html"},{"revision":"cd40e72714dfa9f3b8da18c6e90babc7","url":"./css/index.css"},{"revision":"287f5f8f2ef54907ee16f5d40dfa2417","url":"./css/my.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b8bbccd12ba9fa3d4e3b26260d7d5d6","url":"./img/siteicon/browserconfig.xml"},{"revision":"63741efd10618ed64e7b48ecdf9ee07e","url":"./img/siteicon/README.html"},{"revision":"e42ae8ee0b717fe02d6a9b7abfe18b9b","url":"./index.html"},{"revision":"f7efbacdf5c8e57ad57deace1198b010","url":"./js/main.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./js/my.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"59f4ae234515ad4c59b03ac22ac963e2","url":"./link/index.html"},{"revision":"8c228ee3d84b4de456bead4a06bdf69e","url":"./manifest.json"},{"revision":"1052f29eedf78c04cc630e7404e3ccab","url":"./movie/index.html"},{"revision":"217bbd95e1ced86d2f71d7db1004f32f","url":"./music/index.html"},{"revision":"4de60f2d8888d624b6b2d049c847eacc","url":"./sw-register.js"},{"revision":"e707a89385c07b366fd84a7f3f9354ee","url":"./tags/ACM/index.html"},{"revision":"3b14bbd5f6273ca173e8b35e0f647a45","url":"./tags/c-头文件/index.html"},{"revision":"a788deba4507cb421e4094a57ba0f5f4","url":"./tags/C-C/index.html"},{"revision":"8cfa63f77d05647ec1ce556d85e51da6","url":"./tags/c语言题库/index.html"},{"revision":"48f233593856e1efdea100f3e4be0992","url":"./tags/html/index.html"},{"revision":"d60d6b081775a55b398bdf0fe8970c34","url":"./tags/index.html"}],{
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