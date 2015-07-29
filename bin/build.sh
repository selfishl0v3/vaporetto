#!/usr/bin/env bash

./node_modules/.bin/jade $(pwd)/*.jade
./node_modules/.bin/riot --template jade $(pwd)/tags $(pwd)/dist/vaporetto.js
./node_modules/.bin/stylus -c --use $(pwd)/node_modules/nib $(pwd)/static/css/style.styl