import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_9bd7a2c5.mjs';

const _page0  = () => import('./chunks/generic_517c4a70.mjs');
const _page1  = () => import('./chunks/index_db79dcdd.mjs');
const _page2  = () => import('./chunks/folio-1_d8631712.mjs');
const _page3  = () => import('./chunks/contact_dd47fe57.mjs');
const _page4  = () => import('./chunks/post-1_9fdfb892.mjs');
const _page5  = () => import('./chunks/post-2_c3e8c7c0.mjs');
const _page6  = () => import('./chunks/about_25e887f8.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/folio-1.html", _page2],["src/pages/contact.html", _page3],["src/pages/post-1.md", _page4],["src/pages/post-2.html", _page5],["src/pages/about.astro", _page6]]);
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
