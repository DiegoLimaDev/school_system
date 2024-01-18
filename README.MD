## School System

Existe um arquivo docker-compose no root do projeto.

Inicie um terminal e utilize o comando `docker compose build` e depois `docker compose up -d` em ambos terminais.

O localhost do backend é na porta `8000`

O localhost do frontend é na porta `5173`

Utilize o seguinte login como admin:

cpf: `00000000000`

password: `123456`

No login admin você pode criar novos professores. Cada professor criado terá um login que corresponde aos 6 primeiros digítos do seu próprio cpf.

Exemplo:

Login professor:
cpf: 11111111111
senha: 111111