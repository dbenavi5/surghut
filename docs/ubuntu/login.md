# How to login to your ubuntu server with ssh ?

## Login Command

    ssh -i [keyfile.pem] [user]@[ipServer or public DNS]

exemple

    ssh -i "TestTeam3.pem" ubuntu@ec2-18-222-29-4.us-east-2.compute.amazonaws.com

    ssh -i "TestTeam3.pem" ubuntu@18.222.29.4


## Setup you ssh for your account

### step 0 get key.pem

### step 1 create User

### step 2 login

    sudo su - [newuser]

### step 3 setup SSH

    mkdir .ssh

    chmod 700 .ssh

    touch .ssh/authorized_keys

    chmod 600 .ssh/authorized_keys

    nano .ssh/authorized_keys

add in .ssh/authorized_keys the line generate by running this commande in your own terminal

    ssh-keygen -y -f /path_to_key_pair/key-pair-name.pem

exemple:

    ssh-keygen -y -f /path_to_key_pair/key-pair-name.pem
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQClKsfkNkuSevGj3eYhCe53pcjqP3maAhDFcvBS7O6Vhz2ItxCih+PnDSUaw+WNQn/mZphTk/a/gU8jEzoOWbkM4yxyb/wB96xbiFveSFJuOp/d6RJhJOI0iBXrlsLnBItntckiJ7FbtxJMXLvvwJryDUilBMTjYtwB+QhYXUMOzce5Pjz5/i8SeJtjnV3iAoG/cQk+0FzZqaeJAAHco+CY/5WrUBkrHmFJr6HcXkvJdWPkYQS3xqC0+FmUZofz221CBt5IMucxXPkX4rWi+z7wB3RbBQoQzd8v7yeb7OzlPnWOyN0qFU0XA246RA8QFYiCNYwI3f05p6KLxEXAMPLE
