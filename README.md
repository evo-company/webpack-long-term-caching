## Steps to achieve reliable long term caching

1. Create vendor chunk with deps that change rarely (node_modules).
2. Add `[chunkhash]` to the resulting `output.filename` and `output.chunkFilename`.
3. Create bootstrap chunk to store all chunknames.