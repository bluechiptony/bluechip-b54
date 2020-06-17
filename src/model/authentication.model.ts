import { User } from './user.model';

export enum AccountType {
  SUPER_ADMINISTRATOR,
  ADMINISTRATOR,
  REVIEWER,
  SALES,
}

export interface AuthenticationProfile {
  id?: number;
  userCode: string;
  emailAddress: string;
  password?: string;
  accountType: string;
  activationToken?: string;
  tokenExpiry?: Date;
  active: boolean;
  createdBy?: string;
  updatedBy?: string;
  createdDate?: Date;
  updatedDate?: Date;
}

export interface LoginRequest {
  emailAddress: string;
  password: string;
}

export interface AuthenticationState {
  user?: User;
  token?: string;
  loggedIn: boolean;
}
