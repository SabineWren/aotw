#!/bin/bash
cd /var/www/html &&
git reset --hard HEAD &&
git pull &&
chmod 775 deploy.php &&
chmod 775 deploy.sh

