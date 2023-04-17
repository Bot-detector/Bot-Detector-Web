# setup
## docker setup
remove `-example`from `.env-example`, save the file, run `docker-compose up --build`, the website should run on the port defined in the `docker-compose.yml` file (localhost:8000), changing a python file should reload the server automatically.