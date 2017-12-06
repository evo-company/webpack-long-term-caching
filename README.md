## Steps to achieve reliable long term caching

1. Use `WebpackManifestPlugin` -  `npm i -D webpack-manifest-plugin`.
2. Create vendor chunk with deps that change rarely (node_modules).
4. Add `[chunkhash]` to the resulting `output.filename` and `output.chunkFilename`.
4. Create runtime chunk to store all chunknames.
5. Use `NamedModulesPlugin`.
6. Use `NamedChunksPlugin`.
7. Use `NameAllModulesPlugin` - `npm i -D name-all-modules-plugin`.
