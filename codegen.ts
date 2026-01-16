import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    "https://dev.marketplace.api.blockwaresolutions.com/api/opengraphql": {
    },
  },

  documents: ["src/**/*.{ts,tsx}"], // scans your query files
  generates: {
    "./src/hooks/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
