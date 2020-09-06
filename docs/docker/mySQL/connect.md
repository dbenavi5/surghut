# How to access the mySQL database in the docker ?

## step 1 check that docker is running

    ubuntu@ip-172-31-41-29:~$ docker ps
    CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS                             PORTS                                NAMES
    763f1eea8a6b        mysql/mysql-server:8.0.21   "/entrypoint.sh --de…"   50 minutes ago      Up 12 seconds (health: starting)   0.0.0.0:3306->3306/tcp, 33060/tcp    docker_db_1
    75269c935253        docker_nginx                "/docker-entrypoint.…"   50 minutes ago      Up 11 seconds                      0.0.0.0:80->80/tcp                   docker_nginx_1
    b070fd369ff8        adminer                     "entrypoint.sh docke…"   50 minutes ago      Up 10 seconds                      0.0.0.0:8080->8080/tcp               docker_adminer_1
    59ec419eff71        docker_nextjs               "docker-entrypoint.s…"   50 minutes ago      Up 12 seconds                      3000/tcp                             docker_nextjs_1
    ubuntu@ip-172-31-41-29:~$

## step 2 enter in the docker

    docker exec -it [CONTAINER ID or NAMES] /bin/bash

exemple:

    ubuntu@ip-172-31-41-29:~$ docker exec -it docker_db_1 /bin/bash
    bash-4.2#

## step 3 connect to the database

    bash-4.2# mysql -u pierre -p
    Enter password: 
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 24
    Server version: 8.0.21 MySQL Community Server - GPL
    
    Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.
    
    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.
    
    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
    
    mysql> 
