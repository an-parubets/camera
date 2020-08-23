import babel from "rollup-plugin-babel";
import scss from "rollup-plugin-scss";

export default {
  input: "src/index.js",
  output: {
    file: "build/bundle.js",
    format: "iife",
    sourcemap: "inline",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    scss({
      output: "build/styles.css",
    }),
  ],
};
