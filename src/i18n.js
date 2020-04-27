import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  pt: {
    translation: {
      "Seu e-mail": "Seu e-mail",
      "Sua senha": "Sua senha",
      Acessar: "Acessar",
      Carregando: "Carregando",
      "Criar conta": "Criar conta",
      "Insira um e-mail válido": "Insira um e-mail válido.",
      "O e-mail é obrigatório": "O e-mail é obrigatório.",
      "A senha é obrigatória": "A senha é obrigatória.",
      "Falha na autenticação": "Falha na autenticação, verifique seus dados.",
      "O nome é obrigatório": "O nome é obrigatório.",
      "A ocupação é obrigatória": "A ocupação é obrigatória.",
      "O celular é obrigatório": "O celular é obrigatório.",
      "O país é obrigatório": "O país é obrigatório.",
      "O estado é obrigatório": "O estado é obrigatório;",
      "A senha deve conter no mínimo 6 caracteres":
        "A senha deve conter no mínimo 6 caracteres.",
      "A confirmação da senha é obrigatória":
        "A confirmação da senha é obrigatória.",
      Estado: "Estado",
      "Nome completo": "Nome completo",
      "E-mail": "E-mail",
      Ocupação: "Ocupação",
      Celular: "Celular",
      País: "País",
      Senha: "Senha",
      "Confirmar senha": "Confirmar senha",
      "Já tenho login": "Já tenho login",
      "As senhas não coincidem": "As senhas não coincidem.",
      "Sua senha atual": "Sua senha atual",
      "Sua nova senha": "Sua nova senha",
      "Confirmar nova senha": "Confirmar nova senha",
      "Atualizar perfil": "Atualizar perfil",
      Sair: "Sair",
      "Perfil Atualizado com sucesso": "Perfil Atualizado com sucesso",
      "Erro ao atualizar perfil.": "Erro ao atualizar perfil.",
      Permissões: "PERMISSÕES",
      "Criar grupo": "CRIAR GRUPO",
      "Meu perfil": "Meu perfil",
      "Solicitar acesso": "SOLICITAR ACESSO",
      Pesquisar: "Pesquisar pelo e-mail",
      "Permissão salva": "Permissão salva.",
      "Erro ao atribuir permissão": "Erro ao atribuir permissão.",
      "Nenhum resultado": "Nenhum resultado",
      Salvar: "Salvar",
      "Você não tem permissão": "Você não tem permissão",
    },
  },
  es: {
    translation: {
      "Seu e-mail": "Su e-mail",
      "Sua senha": "Su contraseña",
      Acessar: "Acceso",
      Carregando: "Cargando",
      "Criar conta": "Crear cuenta",
      "Insira um e-mail válido": "Ingrese un correo electrónico válido",
      "O e-mail é obrigatório": "Se requiere correo electrónico.",
      "A senha é obrigatória": "Se requiere contraseña.",
      "Falha na autenticação": "Error de autenticación, verifique sus datos.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pt",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
