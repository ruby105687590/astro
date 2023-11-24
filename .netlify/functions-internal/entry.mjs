import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0d5edc15.mjs';

const _page0  = () => import('./chunks/generic_517c4a70.mjs');
const _page1  = () => import('./chunks/index_c98a5c0a.mjs');
const _page2  = () => import('./chunks/folio-1_d8631712.mjs');
const _page3  = () => import('./chunks/contact_dd47fe57.mjs');
const _page4  = () => import('./chunks/about_25e887f8.mjs');
const _page5  = () => import('./chunks/post-1_09206ba1.mjs');
const _page6  = () => import('./chunks/post-2_c3e8c7c0.mjs');
const _page7  = () => import('./chunks/post-3_92a50efd.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/folio-1.html", _page2],["src/pages/contact.html", _page3],["src/pages/about.astro", _page4],["src/pages/blog/post-1.md", _page5],["src/pages/blog/post-2.html", _page6],["src/pages/blog/post-3.md", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
