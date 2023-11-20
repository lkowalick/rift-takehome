export interface FieldData {
  value: Item;
  valid?: boolean;
}

export interface FieldMap {
  riftField: FieldData;
  topCrmField: FieldData;
  bottomCrmField: FieldData;
}

export interface Item {
  id: string;
  label: string;
}

export const NullItem: Item = { id: '', label: '' }

export const NullField: FieldData = { value: NullItem, valid: true }

