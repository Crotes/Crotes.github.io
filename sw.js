/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/01/19/STL/index.html","e02335299d85725c5788df92fcbd7def"],["/2021/01/22/acm集训/index.html","65120dabcea825075e0815b20a9b1125"],["/2021/01/22/algorithm/index.html","f597b3e163648459905a3b61cdf848e2"],["/2021/01/22/程序改错与填空/index.html","7b31f5ddd15e6c2c3969b9a581607ddf"],["/2021/01/22/程序设计/index.html","b2cca5ef727118f81f46d746699245c9"],["/2021/01/22/算法/index.html","2a0af39ba85058391afa2db303324e17"],["/2021/01/22/网页自学/index.html","33040ceff67214920af237fe15667f91"],["/2021/01/23/ACM技能树/index.html","e5009fb81862a7bcaa644918e5eb0555"],["/2021/01/30/标签/index.html","f5e63ace3c7b2e1b83a027a7aaae7076"],["/2021/02/06/博弈论/index.html","3934950ec70c3999339d56233ee8853d"],["/2021/02/13/vscode/index.html","adca90c5f308409594ac2408f5c804e7"],["/2021/02/14/前端基础/index.html","524d049feaa8aadf8d0f6d7e4a8599ff"],["/2021/02/17/html/index.html","3b2a058c12ef3b1b75b8c5224ad0e23f"],["/2021/02/17/研发工具/index.html","904d58d7df71a6779e6275e46536fde7"],["/2021/02/20/css/index.html","5111ee2bac893ed9eaaaf526a23e9baf"],["/2021/03/07/javascript/index.html","3fbef8b0c4d3f1e074d3a94a1a9d28fd"],["/archives/2021/01/index.html","1b24700d4e18c562570abfdac836b8c1"],["/archives/2021/02/index.html","59c2b3db3847078ee6f3b6b7c6e0f6aa"],["/archives/2021/03/index.html","7f981f20161ca6e427825873a6b4582d"],["/archives/2021/index.html","ccfea1e6afa63567973150cbf02cbf27"],["/archives/2021/page/2/index.html","db443453b8570b7b9d1e7fe284c38870"],["/archives/index.html","e3e0571c6f987b9fdd66101bfd125cc9"],["/archives/page/2/index.html","6f9cd8cf8b0e6d62891235b493391693"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/ACM/index.html","b6c488ac21772705af9fe6e37374cef5"],["/categories/ACM技能树/index.html","7501b46eda23d75c90d7abde1b224d99"],["/categories/C-C/index.html","ad6db3705cb01d045f98e09206f4e0a0"],["/categories/index.html","1248a23ff416b5b6d7944c3392a3747a"],["/categories/前端学习/index.html","0d75412ead0b91d64a4562050cc95f8f"],["/categories/学校题库/index.html","f3aa2eeca3c46d645293a943bf7f125e"],["/css/index.css","1e57b91b2e8479546c6f5b1e0070bee3"],["/css/my.css","5da8e3024d3a5b065050d6a26be453f5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/siteicon/README.html","19771054a3ed304a2865df98951f5a4c"],["/img/siteicon/android-chrome-144x144.png","35c5109736a8a8341fc31874c879fda3"],["/img/siteicon/android-chrome-192x192.png","e1af7757fe8ef5d76b07a64ad4eab407"],["/img/siteicon/android-chrome-256x256.png","504c0a2708443bea6bef99c0de7dab11"],["/img/siteicon/android-chrome-36x36.png","3cbbad365284e0bad2b6a279e25fb63a"],["/img/siteicon/android-chrome-384x384.png","c5a447bd8c1936341201c0800c6a94fb"],["/img/siteicon/android-chrome-48x48.png","ca67ca04944a44aa32cf5719d9235019"],["/img/siteicon/android-chrome-512x512.png","1a57b1df2f7ab2adaad9cda743413df8"],["/img/siteicon/android-chrome-72x72.png","62052950f630fbca75f026a55cad8de2"],["/img/siteicon/android-chrome-96x96.png","c6bbbdfa6af7d1167e394189052f96f9"],["/img/siteicon/apple-touch-icon.png","eafcbe460496fd5d20fe34a952d3a582"],["/img/siteicon/favicon-16x16.png","b6fa3dc67a51ffed01539e09a892d854"],["/img/siteicon/favicon-32x32.png","9c481e115ead8cbd2a0310ef5606d9ef"],["/img/siteicon/mstile-150x150.png","38140c397222649d6d7024584d26ca10"],["/img/siteicon/safari-pinned-tab.svg","e36fa79f207fe987d601f796a40232e1"],["/index.html","3ec73fef8eeca4e90864a0b99921f1a3"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/my.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","8a5eb82ca15c25d18875d2a358c26f2e"],["/movie/index.html","5a64044e862b253baa475497a4ac4112"],["/music/index.html","4266799824009d2f3559019e866e6968"],["/page/2/index.html","ed2cd791444b01b970afb5736326f366"],["/sw-register.js","b88781ce6f8b5955d754b4ee0241cc6f"],["/tags/ACM/index.html","d0e9282f1a84e9287475da6c9df5e9f7"],["/tags/C-C/index.html","3da08445b36ade6fef661cf72aed72bf"],["/tags/c-头文件/index.html","274d14b328ad86808001a0912bfa1b4d"],["/tags/c语言题库/index.html","6023d0bdc437066041ebcb63b22bee38"],["/tags/html/index.html","86ee3e1b19eccfe47930ef3c62281669"],["/tags/index.html","f5f8241c89f05f002f05eaaad05c7f32"],["/tags/vscode/index.html","fc7b6d740ca2d5085d71f9679c840fca"],["/tags/前端初级/index.html","6a5d0c2e7a6ecd3c78be8c014729d148"],["/tags/博弈论/index.html","8202b1915e377c3f750e50bd935731f5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
