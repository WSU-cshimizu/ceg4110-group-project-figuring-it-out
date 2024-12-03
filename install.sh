#!/bin/sh
echo "Installing backend dependencies..."
cd RCEM/backendrecm || exit
npm install

cd ../..

echo "Installing frontend dependencies..."
cd RCEM/rcem_nextjs || exit
npm install