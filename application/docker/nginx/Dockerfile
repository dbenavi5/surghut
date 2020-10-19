# Base on offical NGINX Alpine image
FROM nginx:1.18.0-alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/

COPY localhost.crt /etc/nginx/
COPY localhost.key /etc/nginx/

# Expose the listening port
EXPOSE 80
EXPOSE 443

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]