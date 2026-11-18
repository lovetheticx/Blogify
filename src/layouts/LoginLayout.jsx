import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}

export default LoginLayout;
