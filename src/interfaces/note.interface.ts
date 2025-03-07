export interface INote {
  id: string;
  title: string;
  description?: string;
  isPinned?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IListNote {
  total: number;
  notes: INote[];
}
