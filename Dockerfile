FROM oven/bun:1.1-alpine
WORKDIR /app
COPY . .

ENV NEXT_PUBLIC_API_URL=https://euroautoparts-sheets-api-m53lk6prha-as.a.run.app

RUN bun install --frozen-lockfile
RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "start"]
