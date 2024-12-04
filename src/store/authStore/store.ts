import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {getZustandStorageForMMKV} from '..';
import {MMKV} from 'react-native-mmkv';
import {AuthStore} from './types';

const authPersistStorage = new MMKV({
  id: 'auth_persist_storage',
});

export const useAuthStore = create<AuthStore>()(
  persist(
    set => {
      const setSessionToken = (token: string) => {
        set({
          sessionToken: token,
        });
      };

      const reset = () => {
        set({
          sessionToken: null,
        });
      };

      return {
        sessionToken: null,
        setSessionToken,
        reset,
      };
    },
    {
      name: 'auth_persist_storage',
      storage: createJSONStorage(() =>
        getZustandStorageForMMKV(authPersistStorage),
      ),
    },
  ),
);
