import { e as createAstro, f as createComponent, r as renderTemplate, g as renderHead, h as addAttribute } from '../astro_fc6d9a34.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Astro About</title><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>', "</head> <body> <h1>About</h1> <p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis rem eaque magni delectus iste modi fugiat corrupti tenetur libero laboriosam, temporibus, itaque natus doloremque veniam tempora odit non hic optio.\n</p>  </body> </html>"])), addAttribute(Astro2.generator, "content"), renderHead());
}, "C:/Users/USER/astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/USER/astro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
