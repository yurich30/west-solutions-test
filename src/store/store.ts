import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import { newsApi } from './reducers/newsApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(newsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
