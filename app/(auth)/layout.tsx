const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="min-h-screen w-full flex justify-center items-center geist-sans">
        {children}
      </div>
    )
  }
  
  export default Layout