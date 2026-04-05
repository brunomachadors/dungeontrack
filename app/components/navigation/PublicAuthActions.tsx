import SignInAction from '../auth/SignInAction';
import SignUpAction from '../auth/SignUpAction';

function PublicAuthActions() {
  return (
    <>
      <SignInAction className="px-5 py-3 text-xs">Entrar</SignInAction>
      <SignUpAction className="px-5 py-3 text-xs">Criar Conta</SignUpAction>
    </>
  );
}

export default PublicAuthActions;
