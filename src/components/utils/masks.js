export function maskTel(tel){
        tel = tel.replace(/\D/g, "");
        tel = tel.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    return tel;
}

export function maskCep(cep){
        cep = cep.replace(/\D/g, "");
        cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    return cep;
}

export function maskCpf(cpf){
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return cpf;
}

export function maskData(data){
        data = data.replace(/\D/g, "");
        data = data.replace(/^(\d{4})(\d{2})(\d{2})/, "$3/$2/$1");
    return data;
}