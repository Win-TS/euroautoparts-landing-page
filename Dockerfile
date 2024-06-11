FROM oven/bun:1.1-alpine as build
WORKDIR /app
COPY . .

ENV NEXT_PUBLIC_API_URL=https://euroautoparts-sheets-api-m53lk6prha-as.a.run.app

RUN bun install --frozen-lockfile
RUN bun run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]