# 拉取 nginx 镜像
FROM nginx

COPY ./dist/ /usr/share/nginx/cli/

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 81

CMD ["nginx","-g","daemon off;"]


# docker build -f ./Docker/Dockerfile -t warbler-cli . --no-cache
# docker run -d --name warbler-cli-instance -p 81:80 --restart=always warbler-cli