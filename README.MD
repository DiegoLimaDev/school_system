## School System

Existe um arquivo docker-compose para cada pasta: backend e frontend.
Recomendo iniciar um terminal para cada pasta.
Utilize o comando `docker compose build` e depois `docker compose up -d` em ambos terminais.

O localhost do backend é na porta 8000
O localhost do frontend é na porta 5173

Utilize o seguinte login como admin:
cpf: 00000000000
password: 12345

No login admin você pode criar novos professores. Cada professor criado terá um login que corresponde aos 6 primeiros digítos do cpf cadastrado.