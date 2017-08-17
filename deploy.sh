#!/bin/bash
cd /var/www/html &&
whoami 1>/var/www/html/logs/deploy 2>&1 &&
git reset --hard HEAD 1>/var/www/html/logs/deploy 2>&1 &&
git pull 1>/var/www/html/logs/deploy 2>&1 &&
chmod 775 deploy.php &&
chmod 775 deploy.sh

