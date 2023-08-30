const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc, {
        components: "src/_components/**/*.webc"
    });

    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy({"node_modules/bootstrap-icons/font/bootstrap-icons.css":"assets/css/bootstrap-icons.css"});
    eleventyConfig.addPassthroughCopy({"node_modules/bootstrap-icons/font/fonts":"assets/css/fonts"});

    return {
        dir: {
            input: "src",
            layouts: "_layouts",
            output: "_site",
        },
    };
}