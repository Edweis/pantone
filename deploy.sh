set -ex

scp index.html nginx.conf   edweis@lipp.igw.world:/var/www/pantone
ssh edweis@lipp.igw.world "sudo nginx -t && sudo nginx -s reload"


curl -L pantone.kapochamo.com
# Create a symlink on the server: 
#   sudo ln -fs /var/html/pantone/nginx.conf /etc/nginx/conf.d/pantone.kapochamo.com
# Restart NGINX
#   sudo nginx -t && sudo nginx -s reload
