// Seleciona elementos do formulário.
const amount = document.getElementById("amount");

// Captura o evemto de input para formatar o valor.
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracters não numéricos.
  let value = amount.value.replace(/\D/g, "")

  // transforma o valor em centavos
  value = Number(value) / 100 

  // Atualiza o valor do input.
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value){
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  // retorna o valor formatado.
  return value
}