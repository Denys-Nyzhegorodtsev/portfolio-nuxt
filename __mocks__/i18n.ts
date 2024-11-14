// __mocks__/#i18n.ts
export function useLocalePath() {
  return (url: string) => `/test${url}`;
}
