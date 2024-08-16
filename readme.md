### SSRH ADMINISTRADOR


# FUNCTION REQ
 
  - REALIZAR CADASTRO, LOGIN
  - REALIZAR POSTAGEM VIZUALIZAÇÃO EDIÇÃO E EXCLUSÃO DE VAGAS
  - ACOMPANHAR CANDIDATOS QUE SE APLICARAM ÁS VAGAS
  - VER, ATUALIZAR,EXCLUIR E ENVIAR EMAILS PARA CANDIDATOS CADASTRADOS E PARA EMPRESAS CADASTRADAS
  - CADASTRAR EMPRESAS.
  - ACOMPANHAR PROCESSOS SELETIVOS RELACIONADOS A CADA VAGA
  - INTEGRAR COM O SISTEMA DO REDRIVE PARA FAZER ENVIOS EM MASSA?

# BUSINESS RULES

  - apenas usuários cadastrados podem realizar pagamento
  - qualquer usuário pode verificar prazos 
  - A PAGINA DE CADASTRO DEVE POSSUIR UMA SENHA PARA PERMITIR O REGISTRO DE NOVAS CONTAS
  -

# NO FUNCTIONAL REQ

  # 
  #
  #




### step by step

  - create user routes 
  - create product routes
  - create cart routes
  - create payment routes




# Current step

  - add jsonwebtoken and initialize unitary tests
  - testar controller 
  - adcionar token 


# fatoração

  - add iuserserviceprotocol em interface/auth

# current actions

  -register method tested in controller

# next versions ideas
  -implements two factory authentication to create a new account

# notations
  - maybe control admin access by status can be a good idea