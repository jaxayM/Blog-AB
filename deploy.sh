#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
cd dist
cp index.html 404.html
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:jaxayM/jaxayM.github.io.git main
cd -
