import {Entity, hasMany, model, property} from '@loopback/repository';
import {Menu} from './menu.model';
import {RoleMenu} from './role-menu.model';
import {User} from './user.model';

@model()
export class Role extends Entity {
  @property({
    type: 'string',
    _id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
  })
  description?: string;

  @hasMany(() => Menu, {through: {model: () => RoleMenu}})
  manages: Menu[];

  @hasMany(() => User)
  associate: User[];

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
