# 2025-01-24-boosting-api-performance-with-docker-compose-replicas

Example repository for this blog post: https://herold.solutions/blog/2025-01-24-boosting-api-performance-with-docker-compose-replicas

## Local Test

Start the pre-replica docker compose with  
`docker compose -f docker-compose.pre-replica.yml up`

Start the post-replica docker compose with  
`docker compose -f docker-compose.post-replica.yml up`

Test the performance with autocannon cli command.  
`npx autocannon -c 500 -d 5 http://localhost:3000/`  
This will run 500 connections in 5 seconds.
