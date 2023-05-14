import {Entity, belongsTo, model, property} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Login extends Entity {
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
  token: string;

  @property({
    type: 'boolean',
    required: true,
  })
  validToken: boolean;

  @property({
    type: 'string',
    required: true,
  })
  tfa: string;

  @property({
    type: 'boolean',
    required: true,
  })
  TFAValid: boolean;

  @belongsTo(() => User, {name: 'access'})
  userId: string;

  constructor(data?: Partial<Login>) {
    super(data);
  }
}

export interface LoginRelations {
  // describe navigational properties here
}

export type LoginWithRelations = Login & LoginRelations;
