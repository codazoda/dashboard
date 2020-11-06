#!/bin/bash

# Check if we're already running on 3270 and start it if we aren't

if ps -ef | grep -v grep | grep "localhost:3274" ; then
        exit 0
else
        cd ~/Dropbox/Joel/sandbox/dashboard
        php -S localhost:3274 1> /tmp/dashboard.log 2> /tmp/dashboard.log
        exit 0
fi
