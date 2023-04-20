import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://71z1g.sse.codesandbox.io/",
  ignoreNoDocuments: true,
  watch: true,
  generates: {
    "./src/generated/": {
      preset: "client",
      documents: ["app/**/*.{ts,tsx,graphql}"],
      plugins: [],
    },
  },
};

export default config;
