import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_8119f959.mjs';
import 'clsx';

const html = "<h1 id=\"post-3\">post 3</h1>\n<p>hello</p>";

				const frontmatter = {"title":"test 3"};
				const file = "C:/Users/USER/astro/src/pages/blog/post-3.md";
				const url = "/blog/post-3";
				function rawContent() {
					return "# post 3\r\nhello";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"post-3","text":"post 3"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
