import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6fd201c7.mjs';

const _page0  = () => import('./chunks/generic_4ce5cfaf.mjs');
const _page1  = () => import('./chunks/index_7532bf4b.mjs');
const _page2  = () => import('./chunks/folio-1_d8631712.mjs');
const _page3  = () => import('./chunks/contact_dd47fe57.mjs');
const _page4  = () => import('./chunks/about_062000ab.mjs');
const _page5  = () => import('./chunks/post-1_a904800c.mjs');
const _page6  = () => import('./chunks/post-2_93260419.mjs');
const _page7  = () => import('./chunks/post-3_41467983.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/folio-1.html", _page2],["src/pages/contact.html", _page3],["src/pages/about.astro", _page4],["src/pages/blog/post-1.md", _page5],["src/pages/blog/post-2.md", _page6],["src/pages/blog/post-3.md", _page7]]);
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
