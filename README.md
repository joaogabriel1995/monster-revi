# README

## Introdução
Este repositório contém o **backend** e o **frontend** para gerenciamento de monstros, lógica de batalha e interface de usuário de um sistema de arena.

## Pré-requisitos
- **Node.js** v22.13.1 ou superior
- **npm** (incluído no Node.js)
- **Docker** e **Docker Compose** (para o banco de dados e serviços auxiliares)

## Instalação e Execução

### Backend
1. Navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie os serviços via Docker Compose:
   ```bash
   docker-compose up -d
   ```
4. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```
4\.1 Execute o Prisma Client (gerar o cliente):
   ```bash
   npx prisma generate
   ```
5. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

### Frontend
1. Navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## Endpoints (Backend)
*(Adicione aqui a lista de endpoints disponíveis e suas descrições)*

## Contribuição
Sinta-se à vontade para:
- Abrir issues para reportar bugs ou sugerir melhorias.
- Enviar pull requests com correções ou novas funcionalidades.

## Licença
Este projeto está licenciado sob a MIT License.

