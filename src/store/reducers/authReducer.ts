import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/IAuthState';

const initialState: AuthState = {
  user: {
    accessToken: '',
    email: '',
    auth: {},
    displayName: '',
    emailVerified: false,
    isAnonymous: false,
    metadata: {},
    phoneNumber: '',
    photoURL: '',
    proactiveRefresh: {},
    providerData: [],
    providerId: '',
    reloadListener: '',
    reloadUserInfo: {},
    stsTokenManager: {},
    tenantId: '',
    uid: '',
  },
  error: '',
  isLoading: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
    },
    authFetchingSucces(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    authFetchingError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { authFetching, authFetchingSucces, authFetchingError } =
  authReducer.actions;

export default authReducer.reducer;
