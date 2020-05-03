#!/bin/bash -eux

if [ "$INIT" -eq "1" ]
then
    npm install
    echo "npm has installed packages!"
fi

if [ "$TEST" -eq "1" ]
then
    echo "running tests..."
    CI=1 npm test
fi

echo "serving..."
tail -f /dev/null
