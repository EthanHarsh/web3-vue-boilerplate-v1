#!/bin/sh
cd client/
npm install
npm run build
cd ..
cp -r client/dist/ server/
rm -r client/
cd server/
npm install