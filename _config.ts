import lume from "lume/mod.ts";

const site = lume(
  {
    src: "./src",
  },
);

site.copyRemainingFiles();

export default site;
