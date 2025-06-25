import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import bg from "@/assets/bg-1.jpg";
import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { useUserStore } from "@/stores/user-store";

export default function AuthLayout() {
  const { isLoggedIn } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [navigate, isLoggedIn]);
  return (
    <div className="h-screen w-full flex">
      <div className="flex-1 p-5 hidden lg:block">
        <img
          src={bg}
          alt="background-image"
          className="h-full w-full rounded-md object-cover shadow-xl"
        />
      </div>

      <div className="flex-1 grid grid-cols-5 grid-rows-5 px-8">
        <div className="row-start-1 col-start-5 justify-self-end mt-5">
          <ThemeToggle />
        </div>
        <div className="col-start-2 col-end-5 row-start-2 justify-self-center self-start">
          <Logo className="w-52" />
        </div>

        <div className="col-start-2 col-end-5 row-start-3 row-end-5 justify-self-center self-start max-w-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
