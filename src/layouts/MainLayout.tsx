const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col gap-3 md:gap-1 items-center justify-center text-sky-400 sm:text-2xl md:text-5xl">
      <h1>Welcome to the dashboard🎉</h1>
      <a href="/dashboard">
        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none">
          GO TO DASHBOARD
        </button>
      </a>
    </div>
  );
};

export default MainLayout;
