import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Login} from './login.model';
import {Role} from './role.model';

@model()
export class User extends Entity {
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
  firstName: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
  })
  firstSurname?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastSurname: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  pass: string;

  @property({
    type: 'string',
    required: true,
  })
  mail: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'date',
    required: true,
  })
  birthDate: string;

  @hasMany(() => Login)
  logins: Login[];

  @belongsTo(() => Role, {name: 'associate'})
  roleId: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
