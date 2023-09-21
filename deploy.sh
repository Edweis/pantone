set -ex

scp index.html nginx.conf   edweis@lipp.igw.world:/var/www/pantone
ssh edweis@lipp.igw.world "sudo nginx -t && sudo nginx -s reload"


curl -L pantone.kapochamo.com | head 
# Create a symlink on the server: 
#   sudo ln -fs /var/www/pantone/nginx.conf /etc/nginx/conf.d/pantone.kapochamo.com.conf
# Restart NGINX
#   sudo nginx -t && sudo nginx -s reload
