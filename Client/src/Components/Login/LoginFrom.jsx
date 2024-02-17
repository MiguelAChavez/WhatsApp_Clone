import { ButtonSubmit } from "../Buttons/ButtonSubmit";
import { LoginInput } from "../Inputs/LoginInput";

export const LoginFrom = () => {
  return (
    <div className="flex flex-col items-center text-balance">
      <article className="landing-title mb-4 text-primary- dark:text-primary-strong-dark">
        <h2>Ingresa el número de teléfono</h2>
      </article>
      <article className="mb-8 text-secondary-dark">
        Selecciona un país e ingresa tu número de teléfono.
      </article>
      <article className="flex flex-col gap-8 items-center">
        <form method="post">
          <LoginInput name={"phone"} type={"tel"} ariaLabel={"Escribe tu número de teléfono."}>
            <div className="absolute"></div>
          </LoginInput>
        </form>
        <ButtonSubmit text={"Siguiente"}></ButtonSubmit>
      </article>
    </div>
  );
};
