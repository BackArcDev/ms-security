import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SecurityDsDataSource} from '../datasources';
import {RoleMenu, RoleMenuRelations} from '../models';

export class RoleMenuRepository extends DefaultCrudRepository<
  RoleMenu,
  typeof RoleMenu.prototype._id,
  RoleMenuRelations
> {
  constructor(
    @inject('datasources.securityDS') dataSource: SecurityDsDataSource,
  ) {
    super(RoleMenu, dataSource);
  }
}
