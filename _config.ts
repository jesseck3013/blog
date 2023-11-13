import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import lang_javascript from "npm:highlight.js/lib/languages/javascript";
import lang_bash from "npm:highlight.js/lib/languages/bash";

const site = lume(
  {
    src: "./src",
  },
);

site.copyRemainingFiles();

// plugins
site.use(date());
site.use(
  codeHighlight({
    languages: {
      javascript: lang_javascript,
      bash: lang_bash,
    },
  }),
);

export default site;
