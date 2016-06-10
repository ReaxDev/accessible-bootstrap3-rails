#!/bin/bash

npm install accessible-bootstrap3

rm -rf vendor

mkdir -p vendor/assets/javascripts/accessible-bootstrap3 vendor/assets/javascripts/jquery

cp node_modules/accessible-bootstrap3/index.js vendor/assets/javascripts/accessible-bootstrap3
cp -r node_modules/jquery/dist/ vendor/assets/javascripts/jquery

# copy data from bootstrap3-accessibility-patches package.json and README.md
rm README.md accessible-bootstrap3-package.json && touch README.md accessible-bootstrap3-package.json

cp node_modules/accessible-bootstrap3/package.json accessible-bootstrap3-package.json


cp gem-instructions.md  README.md
cat node_modules/accessible-bootstrap3/README.md >> README.md

rm -rf node_modules

echo 'Done.'
echo 'DO NOT FORGET TO UPDATE VERSION IN GEMSPEC!'
