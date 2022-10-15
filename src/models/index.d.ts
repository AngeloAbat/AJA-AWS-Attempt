import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ItemModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ItemModel {
  readonly id: string;
  readonly Name: string;
  readonly Image?: string | null;
  readonly Price: number;
  readonly Description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ItemModel, ItemModelMetaData>);
  static copyOf(source: ItemModel, mutator: (draft: MutableModel<ItemModel, ItemModelMetaData>) => MutableModel<ItemModel, ItemModelMetaData> | void): ItemModel;
}