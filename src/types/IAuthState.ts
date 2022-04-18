export interface AuthState {
  user: IUser;
  error: string;
  isLoading: boolean;
}

export interface IUser {
  accessToken: string;
  email: string;
  auth: {};
  displayName?: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {};
  phoneNumber?: string;
  photoURL?: string;
  proactiveRefresh: {};
  providerData: [];
  providerId: string;
  reloadListener?: string;
  reloadUserInfo: {};
  stsTokenManager: {};
  tenantId?: string;
  uid: string;
}
