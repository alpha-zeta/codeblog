const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");
const arts = [1, 2, 3, 4, 5, 6];
(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/*.jsx",
    "data/**/*.mdx",
    "!pages/_*.jsx",
    "!pages/api",
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages", "")
                  .replace("data", "")
                  .replace(".jsx", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;
                return `
                        <url>
                            <loc>${`https://codeblog-alpha-zeta.vercel.app${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
              ${arts
                .map((art) => {
                  return `
                          <url>
                              <loc>${`https://codeblog-alpha-zeta.vercel.app/articles/${art}`}</loc>
                          </url>
                      `;
                })
                .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", formatted);
})();
