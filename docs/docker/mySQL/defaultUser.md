# Why my user are not created with the ENV variable of my docker-compose ?

you have probably run the docker-compose once before changing the ENV

this mean you have to delete the volume use by docker to generate mySQL

execute the commands:

    docker-compose rm -v
    docker volume prune