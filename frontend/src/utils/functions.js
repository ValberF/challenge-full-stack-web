const formatCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, "");
  cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  return cpf;
};

module.exports = { formatCPF };
