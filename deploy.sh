#!/usr/bin/env sh

# abort on error
set -e

rm -rf dist
# build
pnpm run build

# navigate into the build output dir
cd dist

git init
git checkout -b gh-pages
git add -A
git commit -m "deploy"

# force push to gh-pages branch
git push -f https://github.com/anwam/anwam.github.io.git gh-pages

cd -