print('START PROD INIT ##################################################################\n');

db = db.getSiblingDB('prod');
db.createUser(
  {
    user: 'prod',
    pwd: 'prod',
    roles: [{ role: 'readWrite', db: 'prod' }],
  },
);

print('END PROD INIT ####################################################################\n');