#!/usr/bin/env bash

./node_modules/.bin/jade $(pwd)/*.jade
./node_modules/.bin/riot --template jade --compact $(pwd)/tags $(pwd)/dist/vaporetto.js
./node_modules/.bin/stylus -c --use $(pwd)/node_modules/nib --use $(pwd)/node_modules/rupture $(pwd)/static/css/style.styl