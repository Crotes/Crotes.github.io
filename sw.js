/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/01/19/STL/index.html","67d12a77f54461beed21714d59e80978"],["/2021/01/22/algorithm/index.html","cbce24d0b3be708113e22a152071d77c"],["/2021/01/22/算法/index.html","1cdd32b0db51ff516923a50ddebd09ef"],["/2021/01/22/网页自学/index.html","d0213c4a7291f0efce1867fe8a45f8c3"],["/2021/01/30/标签/index.html","14d0b1e746d45478e05b54f5256fbba4"],["/2021/02/06/博弈论/index.html","18019548f4c5d367ee5ce1d9e44f73ab"],["/2021/02/13/vscode/index.html","4550b252247b6ee87d79b2a009aa6903"],["/2021/02/14/前端基础/index.html","acf725bacfbfc5406eb57cad071558f5"],["/2021/02/17/html/index.html","b0ada5cefb2fb2b03fe33d37f3109e4f"],["/2021/02/17/研发工具/index.html","dd68bc24b7ff5fa0110a5c9ea315dfc4"],["/2021/02/20/css/index.html","3f52998e7bff68ef2f23179b1fe61a78"],["/2021/03/07/javascript/index.html","8779219f8354cca5f7bc2e9548fcfb6b"],["/2021/04/11/图/index.html","aba2d49f9bb288186efc425bddec4937"],["/2021/04/15/树/index.html","12edfa1f971c60f60aa4b85eab85d5a1"],["/2021/05/07/acm/index.html","30d1233d978589b50ef87ed552df287d"],["/2021/05/07/前端/index.html","27a3a849b0192520b043a0b7e9cb4e7d"],["/2021/05/07/影评书评/index.html","02d91d4aa21feeaeca10709a2456b15a"],["/Gallery/index.html","fba5574823cedb8fb43d1b2c706562c7"],["/Gallery/mygril/index.html","fc82d84099180c03f473fe496904962e"],["/archives/2021/01/index.html","30c983e6c7ea33da4e5bb59a48b015c7"],["/archives/2021/02/index.html","43ab4ce327691fcdcd86fd83190c5d19"],["/archives/2021/03/index.html","5ba6dc90f0dec161a4e87911318b6136"],["/archives/2021/04/index.html","53b9a776ecf4568d98c870e5c54d66f5"],["/archives/2021/05/index.html","9bdad5cf2cd2916a2dad0ddfc8d59988"],["/archives/2021/index.html","77313712ffd5f5ff974de156a712436b"],["/archives/2021/page/2/index.html","eca252ddd1e26b9d0643d916fd596207"],["/archives/index.html","d11ef5f0b7b4c50037bff0576715f250"],["/archives/page/2/index.html","b51b943ee7d9349a4076663cb0f17af0"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/ACM/index.html","d5e44ec00d344b78e39478dbe357cfdd"],["/categories/C-C/index.html","37e788879eff0aca72b67c5ad9a252d5"],["/categories/index.html","fb480467c0fd098e19c96a0699ee6dde"],["/categories/前端学习/index.html","cb03befbbd9a85247e628e5da61ee5c8"],["/css/index.css","2238fbd3665b7155b214624598459f57"],["/css/my.css","42257d5f0368f082f2b5ba4465e9b613"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/siteicon/README.html","aefde8b00f776965e29bc601e691cb9a"],["/img/siteicon/android-chrome-144x144.png","35c5109736a8a8341fc31874c879fda3"],["/img/siteicon/android-chrome-192x192.png","e1af7757fe8ef5d76b07a64ad4eab407"],["/img/siteicon/android-chrome-256x256.png","504c0a2708443bea6bef99c0de7dab11"],["/img/siteicon/android-chrome-36x36.png","3cbbad365284e0bad2b6a279e25fb63a"],["/img/siteicon/android-chrome-384x384.png","c5a447bd8c1936341201c0800c6a94fb"],["/img/siteicon/android-chrome-48x48.png","ca67ca04944a44aa32cf5719d9235019"],["/img/siteicon/android-chrome-512x512.png","1a57b1df2f7ab2adaad9cda743413df8"],["/img/siteicon/android-chrome-72x72.png","62052950f630fbca75f026a55cad8de2"],["/img/siteicon/android-chrome-96x96.png","c6bbbdfa6af7d1167e394189052f96f9"],["/img/siteicon/apple-touch-icon.png","eafcbe460496fd5d20fe34a952d3a582"],["/img/siteicon/favicon-16x16.png","b6fa3dc67a51ffed01539e09a892d854"],["/img/siteicon/favicon-32x32.png","9c481e115ead8cbd2a0310ef5606d9ef"],["/img/siteicon/mstile-150x150.png","38140c397222649d6d7024584d26ca10"],["/img/siteicon/safari-pinned-tab.svg","e36fa79f207fe987d601f796a40232e1"],["/index.html","c1e5fe96cf2d5e9fa78c95e52278b1c8"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/my.js","08ac73a973855be130adaf469df1de8c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","638c2b9cfd4486c9c2d1267c81d03213"],["/movie/index.html","19d973b19c1015cb6e95fcab549bf1a8"],["/music/index.html","7b1f76da2956b01a0a6050c37e1c05b4"],["/page/2/index.html","829265b5aea08ae95a2300c1b83aa452"],["/sw-register.js","dab5b251bffd8837bfc8899f475f927d"],["/tags/ACM/index.html","7da2d3aca432635d2fd2c689b9f124e1"],["/tags/C-C/index.html","87cb262e854e79886efa27bc9120d2b5"],["/tags/c-头文件/index.html","9320c68965f79e8c611aa0fb344fb5e1"],["/tags/html/index.html","85e77c9fe8879d24f2c069d2d11ff0d2"],["/tags/index.html","46f4488de869f870b832dec27ed07f54"],["/tags/vscode/index.html","ccbd80d0796d0bff9f1056c566901770"],["/tags/前端初级/index.html","cf9bf07596dcadf7b2150dddf6ed98bd"],["/tags/博弈论/index.html","46a01f987bfee83c45d08a6ced6f640c"],["/备用/霸王别姬.html","29eb8403c230078d612e4a30fbfe86a4"]];
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
