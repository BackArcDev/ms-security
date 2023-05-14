import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {SecurityDsDataSource} from '../datasources';
import {Role, RoleRelations, Menu, RoleMenu, User} from '../models';
import {RoleMenuRepository} from './role-menu.repository';
import {MenuRepository} from './menu.repository';
import {UserRepository} from './user.repository';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype._id,
  RoleRelations
> {

  public readonly manages: HasManyThroughRepositoryFactory<Menu, typeof Menu.prototype._id,
          RoleMenu,
          typeof Role.prototype._id
        >;

  public readonly associate: HasManyRepositoryFactory<User, typeof Role.prototype._id>;

  constructor(
    @inject('datasources.securityDS') dataSource: SecurityDsDataSource, @repository.getter('RoleMenuRepository') protected roleMenuRepositoryGetter: Getter<RoleMenuRepository>, @repository.getter('MenuRepository') protected menuRepositoryGetter: Getter<MenuRepository>, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Role, dataSource);
    this.associate = this.createHasManyRepositoryFactoryFor('associate', userRepositoryGetter,);
    this.registerInclusionResolver('associate', this.associate.inclusionResolver);
    this.manages = this.createHasManyThroughRepositoryFactoryFor('manages', menuRepositoryGetter, roleMenuRepositoryGetter,);
    this.registerInclusionResolver('manages', this.manages.inclusionResolver);
  }
}
