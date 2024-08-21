export interface IUser {
  name: string;
  email: string;
  password: string;
  jobs?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export enum FormFieldType {
  INPUT = "input",
}
