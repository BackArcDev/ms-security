import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SecurityDsDataSource} from '../datasources';
import {Role, RoleRelations} from '../models';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype._id,
  RoleRelations
> {
  constructor(
    @inject('datasources.securityDS') dataSource: SecurityDsDataSource,
  ) {
    super(Role, dataSource);
  }
}
