module.exports = function (eleventyConfig) {

    var md = require("markdown-it")();
    var markdownItAttrs = require("markdown-it-attrs");
    var mdLib = md.use(markdownItAttrs);
    
    eleventyConfig.setLibrary("md", mdLib);

    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/fonts");

    eleventyConfig.addPassthroughCopy("papers");
    eleventyConfig.addPassthroughCopy("theses");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist"
        }
    };
};
