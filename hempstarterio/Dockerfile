FROM node:lts-alpine

WORKDIR /app/

RUN addgroup -g 1001 -S nodejs

RUN adduser -S nextjs -u 1001
RUN apk add --no-cache libc6-compat curl

COPY package.json package-lock.json /app/
COPY .env /app/

RUN source .env || echo "No .env present in ."
RUN apk add build-base python3 # for `gyp` package to build
RUN npm install

COPY . /app/

RUN npm install
RUN npm run build

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
ENV NODE_ENV production
USER nextjs
EXPOSE 3000

ENTRYPOINT ["npm", "start"]