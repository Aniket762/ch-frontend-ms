export function useSessionStorage(key, initialValue) {
    const getValue = () => {
      const stored = sessionStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    };
  
    const setValue = value => {
      sessionStorage.setItem(key, JSON.stringify(value));
    };
  
    return [getValue, setValue];
  }
  