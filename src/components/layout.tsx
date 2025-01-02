import type  { PropsWithChildren } from 'react';

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div>
        <header></header>
      {children}
    </div>
  )
}

export default Layout
