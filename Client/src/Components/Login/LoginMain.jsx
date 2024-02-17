import { useState } from "react";
import { LoginFrom } from "./LoginFrom";
import { RegisterFrom } from "../Register/RegisterFrom";

export const LoginMain = () => {
  const [isLogin, setIsLogin] = useState(true);
  const text = isLogin ? "¡Únete a nuestra comunidad!" : "Inicia sesión";
  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };
  const section = isLogin ? <LoginFrom /> : <RegisterFrom />;
  return (
    <section className="landing-window bg-white dark:bg-primary-strong flex flex-none flex-col w-[1000px] pb-24 rounded">
      <article className="landing-main relative w-full p-[60px]">{section}</article>
      <article className="landing-main w-full p-[60px]">
        <div className="flex justify-center">
          <button className="text-lg text-primary-green" onClick={toggleIsLogin} type="button">
            {text}
          </button>
        </div>
      </article>
      <article className="help"></article>
    </section>
  );
};
