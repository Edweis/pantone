set -ex

PROJECT=citrouille
USER=lipp
SERVER=lipp.local 

scp index.html nginx.conf   $USER@$SERVER:/home/$USER/projects/pantone/
ssh $USER@$SERVER "sudo nginx -t && sudo nginx -s reload"


# curl -L pantone.kapochamo.com | head 
# Create a symlink on the server: 
#  sudo ln -fs /home/lipp/projects/pantone/nginx.conf /etc/nginx/conf.d/pantone.kapochamo.com.conf
# Restart NGINX
#   sudo nginx -t && sudo nginx -s reload
