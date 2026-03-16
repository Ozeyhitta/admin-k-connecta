import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Outlet />
    </div>
  );
};