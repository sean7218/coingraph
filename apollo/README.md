# Backend API

create .env file and then copy this into it
```
DB_HOST=coingraph_db
DB_DATABASE=coingraph
DB_USER=postgres
DB_PASSWORD=password123
DB_PORT=5432
```

start the database and app
```bash
$ docker-compose up
```

install the local dep and start the build
```bash
$ docker exec -it coingraph_api /bin/bash
$ npm i
$ npm run build:dev
```

open another terminal and start the apollo server
```
$ docker exec -it coingraph_api /bin/bash
$ npm start
```

## Database
migrate database
```bash
$ flyway migrate -url=jdbc:postgresql://coingraph_db/coingraph \
    -user=postgres -password=password123 \
    -locations=filesystem:/app/src/database/migrations
```


