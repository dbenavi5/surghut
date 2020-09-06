# How to enter your docker's shell ?

## step 1 get your docker name

    sudo docker ps

    CONTAINER ID        IMAGE                       COMMAND                  CREATED              STATUS                             PORTS                               NAMES
    608eccb045fa        mysql/mysql-server:8.0.21   "/entrypoint.sh --de…"   About a minute ago   Up 29 seconds (health: starting)   0.0.0.0:3306->3306/tcp, 33060/tcp   mySQL

here the name is mySQL

## step 2 enter the docker's shell

    docker exec -it [dockerID or dockerName] /bin/bash

exemple:

    [pantoine@ordi-pierre csc648-02-fa20-team03]$ docker exec -it mySQL /bin/bash
    bash-4.2#

## step 3 run commande in docker

    bash-4.2# mysql -u pierre -p
    Enter password: 
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 44
    Server version: 8.0.21 MySQL Community Server - GPL

    Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.

    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    mysql> 

## step 4 exit the docker's shell

    bash-4.2# exit
    exit
    [pantoine@ordi-pierre csc648-02-fa20-team03]$ 
