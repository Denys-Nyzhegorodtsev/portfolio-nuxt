import { vi } from 'vitest';

export const useNuxtApp = () => ({
  $toggleTheme: vi.fn(), // або `vi.fn()` якщо використовуєте `vi`
});
