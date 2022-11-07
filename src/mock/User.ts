interface UserData {
    nome: string,
    funcao: string,
    servico: string,
    status: string,
    supervisor: string,
    coordenador: string,
    auto_apelido_gestores: string,
}

interface UserProps {
    login: string,
    password: string,
    data: UserData
}

export const users: UserProps[] = [{
    login: `rafael.araujo`,
    password: `123456`,
    data: {
        nome: `Rafael Araujo`,
        funcao: `Analista Mis e Qualidade Sr`,
        servico: `Qualidade`,
        status: `ativo`,
        supervisor: `Eric`,
        coordenador: `Gazi`,
        auto_apelido_gestores: ``,
    }
}]