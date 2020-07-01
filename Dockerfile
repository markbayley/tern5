FROM node:12 as builder

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run-script build


FROM nginx:1.19-alpine as runner

COPY --from=builder /build/build/ /usr/share/nginx/html/






