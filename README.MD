## School System

Esse projeto simula um sistema escolar.

O backend utiliza NestJS com Typescript e banco de dados PostgreSQL.

O frontend utiliza Vite + React + Typescript

A melhor maneira de rodar o projeto é com o docker, dessa maneira o Docker é a única dependência necessária.

Existe um arquivo docker-compose no root do projeto.

Inicie um terminal e utilize o comando `docker compose build` e depois `docker compose up -d` em ambos terminais.

Backend: http://localhost:8000/

Frontend: http://localhost:5173/

Utilize o seguinte login como admin:

cpf: `00000000000`

password: `123456`

No login admin você pode criar novos professores. Cada professor criado terá um login que corresponde aos 6 primeiros digítos do seu próprio cpf.

Exemplo:

Login professor:
cpf: 11111111111
senha: 111111