#!/bin/bash

npm install bootstrap3-accessibility-patches

rm -rf vendor

mkdir -p vendor/assets/javascripts/accessible-bootstrap3 vendor/assets/javascripts/jquery

cp node_modules/bootstrap3-accessibility-patches/index.js vendor/assets/javascripts/accessible-bootstrap3
cp -r node_modules/jquery/dist/ vendor/assets/javascripts/jquery

# copy data from bootstrap3-accessibility-patches package.
rm README.md bootstrap3-accessibility-patches-package.json && touch README.md bootstrap3-accessibility-patches-package.json

cp node_modules/bootstrap3-accessibility-patches/package.json bootstrap3-accessibility-patches-package.json


cat gem-instructions.md >> README.md
cat node_modules/bootstrap3-accessibility-patches/README.md >> README.md

rm -rf node_modules

echo 'Done.'
echo 'DO NOT FORGET TO UPDATE VERSION IN GEMSPEC!'
