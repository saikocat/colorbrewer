set shell := ["bash", "-cu"]

[default]
default:
  just --list

clean:
  rm -rf types
  rm -f index.js index.es.js
  rm -f *.map

deps:
  npm ci

refresh:
  npm install

build:
  npm run build

rebuild: deps clean
  npm run build

rebuild-local: refresh clean
  npm run build

pack-check:
  npm pack --dry-run

release-check: rebuild pack-check
