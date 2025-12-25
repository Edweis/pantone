set -ex

ssh-add ~/.ssh/cumin.pem

rsync -arvzh ./index.html ./nginx.conf app@ssh-cumin.kapochamo.com:/home/app/pantone/

# Reload nginx after deployment
ssh app@ssh-cumin.kapochamo.com "sudo nginx -t && sudo nginx -s reload"



# curl -L pantone.kapochamo.com | head
# To enable this nginx config, create a symlink on the server (one-time setup):
#  ssh app@ssh-cumin.kapochamo.com "sudo ln -fs /home/app/pantone/nginx.conf /etc/nginx/conf.d/pantone.kapochamo.com.conf"
# Note: NGINX is automatically reloaded after each deployment (see line 9 above)
