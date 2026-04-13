module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("emotes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/emotes/*.md");
  });
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/socials");
  eleventyConfig.addPassthroughCopy("src/info");
  eleventyConfig.addPassthroughCopy("src/styles.css");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};