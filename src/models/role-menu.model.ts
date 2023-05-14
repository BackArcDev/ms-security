import {Entity, model, property} from '@loopback/repository';

@model()
export class RoleMenu extends Entity {
  @property({
    type: 'string',
    _id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  canList: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  canSave: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  canEdit: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  canDelete: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  canDownload: boolean;

  @property({
    type: 'string',
  })
  roleId?: string;

  @property({
    type: 'string',
  })
  menuId?: string;

  constructor(data?: Partial<RoleMenu>) {
    super(data);
  }
}

export interface RoleMenuRelations {
  // describe navigational properties here
}

export type RoleMenuWithRelations = RoleMenu & RoleMenuRelations;
