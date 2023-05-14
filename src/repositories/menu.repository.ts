import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {SecurityDsDataSource} from '../datasources';
import {Menu, MenuRelations, Role, RoleMenu} from '../models';
import {RoleMenuRepository} from './role-menu.repository';
import {RoleRepository} from './role.repository';

export class MenuRepository extends DefaultCrudRepository<
  Menu,
  typeof Menu.prototype._id,
  MenuRelations
> {

  public readonly manages: HasManyThroughRepositoryFactory<Role, typeof Role.prototype._id,
          RoleMenu,
          typeof Menu.prototype._id
        >;

  constructor(
    @inject('datasources.securityDS') dataSource: SecurityDsDataSource, @repository.getter('RoleMenuRepository') protected roleMenuRepositoryGetter: Getter<RoleMenuRepository>, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>,
  ) {
    super(Menu, dataSource);
    this.manages = this.createHasManyThroughRepositoryFactoryFor('manages', roleRepositoryGetter, roleMenuRepositoryGetter,);
    this.registerInclusionResolver('manages', this.manages.inclusionResolver);
  }
}
