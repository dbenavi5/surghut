# Application Folder

## Purpose

The purpose of this folder is to store all the source code and related files for your team's application. Source code MUST NOT be in any of folder. <strong>YOU HAVE BEEN WARNED</strong>

You are free to organize the contents of the folder as you see fit. But remember your team is graded on how you use Git. This does include the structure of your application. Points will be deducted from poorly structured application folders.

## Please use the rest of the README.md to store important information for your team's application.


## server installation

instruction to do when you are login to the server

### step 1 clone the project

    git clone https://github.com/practice.git

### step 2 install docker

    cd csc648-02-fa20-team03/application/

    ./installDocker.sh

### step 3 run docker on server

# Check that a dockers is already running with 'sudo docker ps' before starting a new instance PLEASE. the server will crash because there is not enough RAM

    cd docker

    sudo docker-compose up

if you want to run in background and logout

    sudo docker-compose up -d

### step 4 Test

Go to http:// + serverIPv4 + :80

You will get a page with a house and a link

### step 5 stop docker

    docker ps

    ubuntu@ip-172-31-46-206:~/csc648-02-fa20-team03$ docker ps
    CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS                  PORTS                               NAMES
    99273cc959d6        docker_nextjs               "docker-entrypoint.s…"   33 hours ago        Up 33 hours             3000/tcp                            nextApp
    90636f202be1        docker_nginx                "/docker-entrypoint.…"   39 hours ago        Up 33 hours             0.0.0.0:80->80/tcp                     nginxServer
    6a4787410f57        mysql/mysql-server:8.0.21   "/entrypoint.sh --de…"   39 hours ago        Up 33 hours (healthy)   0.0.0.0:3306->3306/tcp, 33060/tcp   mySQL
    5aea12f2731c        adminer                     "entrypoint.sh docke…"   39 hours ago        Up 33 hours             0.0.0.0:8080->8080/tcp              adminer

    docker stop nextApp nginxServer mySQL adminer

this operation can take 1 minute
