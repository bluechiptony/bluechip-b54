export interface User {
  id?: number;
  userCode?: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  accountType: string;
  createdBy?: string;
  updatedBy?: string;
  createdDate?: Date;
  updatedDate?: Date;
}
