require('dotenv').config({ path: '.env' });

const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@apicluster.whsb1.mongodb.net/api?retryWrites=true&w=majority`,
  env: 'development',
};
