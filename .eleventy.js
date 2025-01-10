module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("projects", (collection) => {
      let coll = collection.getFilteredByGlob("./projects/*.md");
      coll.sort((a, b) => {
          const numA = parseInt(a.fileSlug.replace(/[^\d]/g, ""), 10) || 0;
          const numB = parseInt(b.fileSlug.replace(/[^\d]/g, ""), 10) || 0;
          return numA - numB;
      });
      return coll;
  });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
      dir: {
          input: ".",
          output: "_site" 
      }
  };
};
