import {StateStorage} from 'zustand/middleware';
import {MMKV} from 'react-native-mmkv';

export const getZustandStorageForMMKV = (storage: MMKV): StateStorage => ({
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
});