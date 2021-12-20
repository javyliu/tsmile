FROM node:16-alpine

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
  apk --update add tzdata bash\
  && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo "Asia/Shanghai" > /etc/timezone \
  && apk del 


WORKDIR /app

COPY package*.json ./

RUN npm install --registry=https://registry.npmmirror.com/

COPY . ./

CMD ["npm", "run", "dev"]