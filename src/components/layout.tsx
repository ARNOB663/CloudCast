import type  { PropsWithChildren } from 'react';

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
        
        header
      {children}
    </div>
  )
}

export default Layout
