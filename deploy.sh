#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# push the current dist state to github pages
git init
git add -A
git commit -m 'Deploy'

git push -f https://github.com/FlorianWoelki/flex-vis master:gh-pages

cd -
