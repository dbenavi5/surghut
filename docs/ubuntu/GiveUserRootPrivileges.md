# How to give root Privileges to a user ?

## Step 1 Login as a root

## Step 2 Grant Root Privileges to the User

    sudo visudo

add the following line

    [USER] ALL=(ALL:ALL)ALL

after

    # User privilege specification
    root    ALL=(ALL:ALL) ALL

## Step 3 Verify User Has Privileges

login as the user

    su - [USER]

run a command as root

    sudo apt-get update
