import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_8119f959.mjs';
import 'clsx';

const html = "<h1 id=\"hello\">hello</h1>";

				const frontmatter = {"title":"test 2","description":"desc","author":"Zac","pubDate":"20231124"};
				const file = "C:/Users/USER/astro/src/pages/blog/post-2.md";
				const url = "/blog/post-2";
				function rawContent() {
					return "# hello";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hello","text":"hello"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
