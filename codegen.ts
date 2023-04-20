
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "*.graphql",
  generates: {
    "generated.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
