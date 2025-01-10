// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("projects", (collection) => {
      // Grab all `.md` in `projects/`
      let coll = collection.getFilteredByGlob("./projects/*.md");
  
      // Sort them by the numeric suffix if your file names are like `project-1.md`, `project-9.md`, etc.
      // We'll parse out the number from the fileSlug or fileName.
      coll.sort((a, b) => {
          // a.fileSlug might be "project-1", so we get the trailing number.
          const numA = parseInt(a.fileSlug.replace(/[^\d]/g, ""), 10) || 0;
          const numB = parseInt(b.fileSlug.replace(/[^\d]/g, ""), 10) || 0;
          return numA - numB;
      });
  
      return coll;
  });

  // Pass through your CSS, assets, etc.
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("assets"); // Add assets folder to passthrough copy
  
  return {
      dir: { input: ".", output: "_site" }
  };
};
