# How to create new user on ubuntu server ?

## Step 1 

Login as root

## Step 2 create User

    sudo adduser NewUser

Type your own password and other info

## Step 3 check User

    grep '^NewUser' /etc/passwd

You should see:

    NewUser:x:1001:1001:NewUser Gite,,,:/home/NewUser:/bin/bash

# How to delete user ?

    sudo userdel -r [olduser]