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
      PERMISSÕES: "PERMISSÕES",
      Permissões: "Permissões",
      "Criar grupo": "Criar grupo",
      "CRIAR GRUPO": "CRIAR GRUPO",
      "Meu perfil": "Meu perfil",
      "SOLICITAR ACESSO": "SOLICITAR ACESSO",
      "Solicitar acesso": "Solicitar acesso",
      Pesquisar: "Pesquisar pelo e-mail",
      "Permissão salva": "Permissão salva.",
      "Erro ao atribuir permissão": "Erro ao atribuir permissão.",
      "Nenhum resultado": "Nenhum resultado",
      Salvar: "Salvar",
      "Você não tem permissão": "Você não tem permissão",
      "Grupo salvo": "Grupo salvo.",
      "Erro ao salvar grupo": "Erro ao salvar grupo.",
      "Pesquisar pelo nome": "Pesquisar pelo nome",
      "Novo grupo": "Novo grupo",
      Descrição: "Descrição",
      Resumo: "Resumo",
      Cursos: "Cursos",
      Cancelar: "Cancelar",
      "Atualizar grupo": "Atualizar grupo",
      "Adicionar membros": "Adicionar membros",
      "Não existe usuário nesse grupo": "Não existe usuário nesse grupo.",
      "Esse e-mail já existe": "Esse e-mail já existe.",
      "Esse usuário não existe":
        "Esse usuário não existe, gostaria de registrar um novo usuário?",
      Sim: "Sim",
      Não: "Não",
      "Membros adicionados com sucesso": "Membros adicionados com sucesso.",
      "Erro ao adicionar membros ao grupo":
        "Erro ao adicionar membros ao grupo.",
      "Adicionar cursos": "Adicionar cursos",
      "Não existe curso nesse grupo": "Não existe curso nesse grupo.",
      Membros: "Membros",
      "Adicionar Cursos": "Adicionar Cursos",
      "Cursos atuais": "Cursos atuais",
      "Cursos adicionados com sucesso": "Cursos adicionados com sucesso",
      "Erro ao adicionar cursos ao grupo": "Erro ao adicionar cursos ao grupo",
      "Usuário registrado": "Usuário registrado.",
      "Erro ao registrar usuário": "Erro ao registrar usuário.",
      "Escolha um grupo": "Escolha um grupo",
      "Esse usuário já existe": "Esse usuário já existe.",
      "Erro ao editar grupo": "Erro ao editar grupo.",
      "Grupo editado com sucesso": "Grupo editado com sucesso",
      "+Membros": "+ Membros",
      "+Cursos": "+ Cursos",
      Remover: "Remover",
      "Registrar usuário": "Registrar usuário",
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
