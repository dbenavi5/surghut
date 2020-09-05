# How to change user password ?

## If it is your own password

    passwd

## If it is another user password

    sudo passwd [USER]

## My account don't have password and I can't change my password because passwd ask my actual password

### Step 1 Login as root

### Step 2 enter root shell

    sudo -i

### Step 3 change user password

    sudo passwd [userNameHere]
