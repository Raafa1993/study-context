function maskCEP(e: any) {
    let value = e;
    value = value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
    e = value;
    return e;
}

function maskCPF(e: any) {
    let value = e;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
    value = value.replace(/(-\d{2})\d+?$/, "$1");

    e = value;
    return e;
}

export { maskCEP, maskCPF }