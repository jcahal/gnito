print('START TEST INIT ##################################################################\n');

db = db.getSiblingDB('test');
db.createUser(
  {
    user: 'test',
    pwd: 'test',
    roles: [{ role: 'readWrite', db: 'test' }],
  },
);

print('END TEST INIT ####################################################################\n');