#!/usr/bin/env sh

# abort on error
set -e

# build
pnpm run build

# navigate into the build output dir
cd dist

git init
git check -b main
git add -A
git commit -m "deploy"

git push -f git@github.com:anwam/anwam.github.io.git gh-pages

cd -