import { e as createAstro, f as createComponent, r as renderTemplate, g as renderHead } from '../astro_fc6d9a34.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> <h1>Astro</h1> <nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/blog/post-1">post 1</a> <a href="/blog/post-2">post 2</a> <a href="/blog/post-3">post 3</a> </nav> </body></html>`;
}, "C:/Users/USER/astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
