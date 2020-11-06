#!/bin/bash

# Count words in all .md files in my DDM notebook
( find ~/sandbox/notebook-ddm -name '*.md' -print0 | xargs -0 cat ) | wc -w > /Users/jdare/Dropbox/Joel/sandbox/dashboard/data/notebook-ddm-count.txt

# Count words in all .md files in the sms-docs wiki
git -C ~/sandbox/sms-docs.wiki pull
( find ~/sandbox/sms-docs.wiki -name '*.md' -print0 | xargs -0 cat ) | wc -w > /Users/jdare/Dropbox/Joel/sandbox/dashboard/data/sms-docs-wiki-count.txt
