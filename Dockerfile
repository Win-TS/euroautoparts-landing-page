# Stage 1: Build Stage
FROM oven/bun:1.1-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy all the files from the current directory to the working directory in the container
COPY . .

# Set environment variables
ENV NEXT_PUBLIC_API_URL=https://euroautoparts-sheets-api-m53lk6prha-as.a.run.app

# Install dependencies
RUN bun install --frozen-lockfile

# Build the application
RUN bun run build

# Stage 2: Serve Stage
FROM nginx:stable-alpine

# Copy the built Next.js application to the Nginx html directory
COPY --from=build /app/.next /usr/share/nginx/html/.next

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
