import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {SecurityDsDataSource} from '../datasources';
import {User, UserRelations, Login, Role} from '../models';
import {LoginRepository} from './login.repository';
import {RoleRepository} from './role.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype._id,
  UserRelations
> {

  public readonly logins: HasManyRepositoryFactory<Login, typeof User.prototype._id>;

  public readonly associate: BelongsToAccessor<Role, typeof User.prototype._id>;

  constructor(
    @inject('datasources.securityDS') dataSource: SecurityDsDataSource, @repository.getter('LoginRepository') protected loginRepositoryGetter: Getter<LoginRepository>, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>,
  ) {
    super(User, dataSource);
    this.associate = this.createBelongsToAccessorFor('associate', roleRepositoryGetter,);
    this.registerInclusionResolver('associate', this.associate.inclusionResolver);
    this.logins = this.createHasManyRepositoryFactoryFor('logins', loginRepositoryGetter,);
    this.registerInclusionResolver('logins', this.logins.inclusionResolver);
  }
}
