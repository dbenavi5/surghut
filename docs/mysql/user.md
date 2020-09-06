# How to create user ?

    CREATE USER 'username'@'localhost' IDENTIFIED BY 'the_password';
or

    CREATE USER 'username'@'%' IDENTIFIED BY 'the_password';

# How to give root privileges to a user ?

    GRANT ALL PRIVILEGES ON *.* TO 'user_name'@'localhost' WITH GRANT OPTION;
or

    GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;
