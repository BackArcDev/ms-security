import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SecurityDsDataSource} from '../datasources';
import {Menu, MenuRelations} from '../models';

export class MenuRepository extends DefaultCrudRepository<
  Menu,
  typeof Menu.prototype._id,
  MenuRelations
> {
  constructor(
    @inject('datasources.securityDS') dataSource: SecurityDsDataSource,
  ) {
    super(Menu, dataSource);
  }
}
