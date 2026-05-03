module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("emotes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/emotes/*.md");
  });

  eleventyConfig.addFilter("shuffle", function (array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
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