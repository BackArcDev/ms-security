import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {Keys} from '../env/keys';

const config = {
  name: 'securityDS',
  connector: 'mongodb',
  url: `mongodb+srv://${Keys.USER}:${Keys.PASS}@cluster.su6m6ry.mongodb.net/${Keys.DB}`, // ?retryWrites=true&w=majority //
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: Keys.DB,
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SecurityDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'securityDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.securityDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
