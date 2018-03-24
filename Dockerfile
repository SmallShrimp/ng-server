FROM node:slim

COPY ./dist /home/node/app
COPY ./package.d.json /home/node/app
COPY ./package-lock.json /home/node/app
COPY ./.env.example /home/node/app
WORKDIR /home/node/app
RUN mv package.d.json package.json
RUN mv .env.example .env
RUN npm i nrm -g && nrm use taobao
ENV NODE_ENV production

RUN npm install 
#RUN npm run start
EXPOSE 4200
CMD ["/bin/bash"]