import Swal from "sweetalert2";
import { createDiscente, createUsuario } from "../../controller/CtrlUsuario";
import DiscenteBuilder from "../../model/DiscenteBuilder";
import Director from "../../model/Director";

const sweetAlert = (type, title, text, showConfirmButton) => {
  return Swal.fire({
    type,
    title,
    text,
    showConfirmButton
  });
};

export const handleClick = self => {
  self.setState({ redirect: true, to: "Cadastro" });
};

export const handleChange = (self, e, mask) => {
  if (typeof mask === "function")
    self.setState({ [e.target.name]: mask(e.target.value) });
  else self.setState({ [e.target.name]: e.target.value });
};

export const handleSignUp = async (self, e) => {
  e.preventDefault();

  const {
    nome,
    email,
    ra,
    curso,
    turno,
    campus,
    serie,
    situacaoAcademica,
    username,
    password
  } = self.state;

  if (
    !(
      nome &&
      email &&
      ra &&
      curso &&
      turno &&
      campus &&
      serie &&
      situacaoAcademica &&
      username &&
      password
    )
  ) {
    return sweetAlert(
      "error",
      "Todos os campos são requeridos! Há campos não preenchidos",
      "Tente novamente"
    );
  }
  if (self.state.password !== self.state.confirmPassword) {
    self.setState({ confirmPassword: "" });
    return sweetAlert(
      "error",
      "Senha confirmada incorretamente",
      "Tente novamente"
    );
  } else if (self.state.password.length < 4) {
    self.setState({ confirmPassword: "" });
    return sweetAlert(
      "error",
      "Senha deve ter pelo menos 4 caracteres",
      "Tente novamente"
    );
  } else if (self.state.nome.length < 2) {
    self.setState({ nome: "" });
    return sweetAlert(
      "error",
      "Seu nome deve ter mais que 1 caractere",
      "Tente novamente"
    );
  } else if (isNaN(self.state.serie)) {
    self.setState({ serie: "" });
    return sweetAlert("error", "Série deve ser um número", "Tente novamente");
  }

  const director = new Director();
  const discenteBuilder = new DiscenteBuilder();

  director.usuarioBuilder = discenteBuilder;
  director.buildUsuario({
    usuario: { nome, email, username, password },
    discente: { ra, curso, turno, campus, serie, situacaoAcademica }
  });

  const { usuario, discente } = director.getUsuario();

  try {
    const res = await createUsuario(usuario);
    director.usuarioBuilder.setUsuarioId(res.data.id); // Atualiza o usuarioId da instância de Discente criada
    await createDiscente(discente);

    if (res.status >= 200 && res.status < 300) {
      sweetAlert(
        "success",
        "Cadastro realizado com sucesso",
        "Veja seu email para confirmar sua conta",
        true
      );
      self.setState({ redirect: true });
    }
  } catch (err) {
    sweetAlert(
      "error",
      "Ops! Algo deu errado",
      err.response.data.error.message,
      true
    );
  }
};
