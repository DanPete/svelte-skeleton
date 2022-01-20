const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-420c904b.js","js":["start-420c904b.js","chunks/vendor-57a2be19.js","chunks/preload-helper-ec9aa979.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/posts\/?$/,
				params: null,
				path: "/posts",
				a: [0,4,5],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/posts\/post\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/posts/post.json.ts.js'))
			},
			{
				type: 'page',
				pattern: /^\/posts\/about\/?$/,
				params: null,
				path: "/posts/about",
				a: [0,4,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				a: [0,4,7],
				b: [1]
			}
		]
	}
});
