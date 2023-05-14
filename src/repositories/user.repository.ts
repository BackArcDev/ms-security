import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SecurityDsDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype._id,
  UserRelations
> {
  constructor(
    @inject('datasources.securityDS') dataSource: SecurityDsDataSource,
  ) {
    super(User, dataSource);
  }
}
