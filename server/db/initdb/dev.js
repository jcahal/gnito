print('START DEV INIT ##################################################################\n');

db = db.getSiblingDB('dev');
db.createUser(
  {
    user: 'dev',
    pwd: 'dev',
    roles: [{ role: 'readWrite', db: 'dev' }],
  },
);

db.drops.insertMany([
  {password: 'pass1', message: 'Drop #1'},
  {password: 'pass2', message: 'Drop #2'},
  {password: 'pass3', message: 'Drop #3'},
  {password: 'pass4', message: 'Drop #4'},
  {password: 'pass5', message: 'Drop #5'}
]);

print('END INIT ####################################################################\n');