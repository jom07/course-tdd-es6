import { MongoClient } from 'mongodb';

class DB {
  constructor(host = 'localhost', port = 27017) {
    this.dbName = process.env.NODE_ENV === 'test'
      ? 'TEST_DB'
      : 'PROD_DB';
    this.host = host;
    this.port = port;
  }

  async getUserByUsername(username) {
    const client = await MongoClient.connect(
      `mongodb://${this.host}:${this.port}/${this.dbName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    const db = client.db(this.dbName);

    const result = await db.collection('users').findOne({ username });

    client.close();

    return result;
  }
}

// Just to export an instanciated DB for testing purposes.
export default new DB();
