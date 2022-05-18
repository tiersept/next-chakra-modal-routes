import { SWRConfig } from 'swr';

export const SwrProvider = ({ children, fallback }) => (
  <SWRConfig
    value={{
      fallback,
      revalidateOnFocus: false,
    }}
  >
    {children}
  </SWRConfig>
);
