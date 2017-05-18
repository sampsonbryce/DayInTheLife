#!/bin/bash

cd blog 
yarn run dev &
bid=$! 

echo "Blog running with id = $bid"

cd ..

cd server 
npm run dev &
fid=$!


echo "Server running with id = $fid"

trap 'echo "Killing..." && kill $fid && kill $bid' INT

wait $bid
wait $fid