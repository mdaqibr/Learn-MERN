# Mongo
## Mongo DB Installation
```
  # Follow the below link and run the command to install Mongo DB in Linux:
  https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#import-the-public-key.

  # Once the installation is completed then run:
  mongosh

  # If you faced in any issue while running the mongosh then run:

  "
    Error:
    Current Mongosh Log ID: 67db0a0683ee7657736b140a
    Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
    MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
  "
  sudo systemctl status mongod
  sudo systemctl start mongod

```