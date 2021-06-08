const DefaultLayout: React.FC = props => {
  const { children } = props;

  return (
    <main className="h-auto min-h-screen bg-default bg-fixed bg-cover bg-center flex justify-center items-center">
      {children}
    </main>
  );
};

export default DefaultLayout;
