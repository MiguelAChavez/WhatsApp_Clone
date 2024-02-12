import { WhatsApp } from "../../assets/Icons/svg/IconWhatsapp";

export const LoginHeader = () => {
  return (
    <>
      <section className="bg-login-wrapper absolute top-0 z-[-1] w-full h-[222px]"></section>
      <header className="my-[25px] mb-16 landing-header w-[1000px] flex flex-none items-center justify-start min-h-9">
        <WhatsApp className={"w-11 h-11"} />
        <h3 className="ml-[12px] inline-block text-sm uppercase text-white font-semibold align-middle">
          WhatsApp Web
        </h3>
      </header>
    </>
  );
};
