importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"7779b82c6f98b9278283753e848b6a83","url":"contributors.html"},{"revision":"85f9795dbd68bfd4af8142d97d941a77","url":"feedback.html"},{"revision":"c834e409aa434404e86ca8006e345d73","url":"images/1.png"},{"revision":"f9b2ad9191d36dac5ac99d4ab6b2812a","url":"images/10.png"},{"revision":"a475a89f332a1009dd9ea6af6a36b3e7","url":"images/2.png"},{"revision":"a98f1cb37f60a0a2d2403eaec63ca504","url":"images/3.png"},{"revision":"f2fa25aa700452d0b036c546c02f784e","url":"images/4.png"},{"revision":"18e0d45e4720c4465f1235f025b06cfa","url":"images/5.png"},{"revision":"e00519a4647aa8b47fb3e05a372d0b6f","url":"images/6.png"},{"revision":"ac5795ca3d1dc2f3585f853fb22ead61","url":"images/7.png"},{"revision":"9cf13a3af34214165ab1dbf8736ccf43","url":"images/8.png"},{"revision":"ae8c12a1fa3c000d31c8e5604c394ab6","url":"images/9.png"},{"revision":"0ad946509463d5465362e22fd49eb20e","url":"index.html"},{"revision":"641b2f9ff5918ffc202c7ccc5c825dbe","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"aa9ae068eb565eceac1311b748344c26","url":"posttest.html"},{"revision":"b09a40f253a9b9a5b96da5e915e80395","url":"posttest.json"},{"revision":"07e40ba8e251aa0b92bee3b8a29561b3","url":"pretest.html"},{"revision":"ef44d219b1a65d2d9c366858073a47bd","url":"pretest.json"},{"revision":"045bb9d1932d080faf464a552c552490","url":"procedure.html"},{"revision":"7f0ab93daa2f5866b174e35bafc6a25c","url":"references.html"},{"revision":"bf56cc959c9b21217dde0312a415643d","url":"simulation.html"},{"revision":"799739f3631c416b4de93d1ca000926f","url":"simulation/css/main.css"},{"revision":"27b99b41af3fe320dc0cfbc57eec2403","url":"simulation/images/aluminium.png"},{"revision":"544df5ddd7ab382f0bbf06d25f12b3ba","url":"simulation/images/arrow.png"},{"revision":"f1bb7d51f59ea0d8bd63a110baf1f6e6","url":"simulation/images/background_converted.png"},{"revision":"dd72dc4f77c2ad9b28fd1cd84f5c983e","url":"simulation/images/bacteria.png"},{"revision":"794f9e2b583deca68ca931fe6e4fdf53","url":"simulation/images/bulb_on.png"},{"revision":"48de312fadaefde766ed4bf96d06a986","url":"simulation/images/BULB1.png"},{"revision":"8a41489a5b45fd7dca2984299ca27064","url":"simulation/images/charcoal brush3.png"},{"revision":"ddb711d670059981dbf81a518f34a6da","url":"simulation/images/copper.png"},{"revision":"7a5811ee40af25b9184b52ac1c95eee5","url":"simulation/images/graphite.png"},{"revision":"2c8d45793f5693dfaafae375e9c2fe21","url":"simulation/images/light medium.png"},{"revision":"bd72e60cba1d2672365acedaf7b2e26b","url":"simulation/images/logo.png"},{"revision":"bc2dd794e5ed4df3a5377a8d93a5744c","url":"simulation/images/manganese.png"},{"revision":"61218c199ddb9c4d156fe883cf808132","url":"simulation/images/red_wire.png"},{"revision":"b4890350957c35a451d1bd2b800a4322","url":"simulation/images/stainlesssteel.png"},{"revision":"467973586f40575bd53e4124294212bd","url":"simulation/images/STAND.png"},{"revision":"3541f63c7b3a724446ff306b3b879968","url":"simulation/images/tabletop.png"},{"revision":"7dfffb2b7296d671e3e26e6710c83a5a","url":"simulation/images/voltmter_appe4.png"},{"revision":"38507e7b3a4de67f4fea17922db2d1ac","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"fe00fd2b6bbda2a83957eb7e947dcdab","url":"theory.html"},{"revision":"567ee7f35802bc61c7df3d5440891bab","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );