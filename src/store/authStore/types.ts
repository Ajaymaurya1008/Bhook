export interface AuthStore {
  sessionToken: string | null;
  setSessionToken: (token: string) => void;
  reset: () => void;
}
