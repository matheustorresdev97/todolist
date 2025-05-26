# 📝 TodoList

Uma aplicação completa de lista de tarefas com backend em Spring Boot e frontend em React + TypeScript, utilizando Tailwind CSS para estilização.

## 🚀 Funcionalidades

- Criar novas tarefas
- Listar todas as tarefas
- Marcar tarefas como concluídas
- Excluir tarefas
- Contador de tarefas concluídas
- Interface responsiva e moderna

## 🛠️ Tecnologias

### Backend
- Java 21
- Spring Boot 3.4.5
- Spring Data JPA
- Spring Validation
- Banco de dados H2 (em memória)
- Lombok
- Maven

### Frontend Web
- React 18
- TypeScript
- Tailwind CSS 4
- Vite
- Lucide React (ícones)

### Frontend Mobile

- **React Native 0.79.2**
- **Expo ~53.0.9**
- **TypeScript**
- **NativeWind 4.1.23** (Tailwind CSS para React Native)
- **Expo Router 5.0.6**
- **Expo Google Fonts** (Inter)
- **React Native Vector Icons**

## 📋 Pré-requisitos

- Java 21
- Node.js (versão recomendada: 20.x ou superior)
- npm ou yarn

## 🔧 Instalação e Execução

### Backend

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/todolist.git
   cd todolist
   ```

2. Compile e execute o projeto Spring Boot
   ```bash
   ./mvnw spring-boot:run
   ```
   O servidor estará disponível em `http://localhost:8080`

### Frontend

1. Navegue até a pasta do frontend
   ```bash
   cd frontend
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Execute o projeto
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   O frontend estará disponível em `http://localhost:5173`

### Frontend Mobile

1. **Navegue até a pasta do app mobile**
   ```bash
   cd todolist-app
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Configure o IP da API**
   
   No arquivo `src/app/index.tsx`, atualize o IP para o da sua máquina:
   ```typescript
   const API_URL = 'http://SEU_IP_LOCAL:8080';
   ```

4. **Execute o projeto**
   ```bash
   npx expo start
   ```
   
   **Opções de execução:**
   - **Android**: `npx expo start --android`
   - **iOS**: `npx expo start --ios` 
   - **Web**: `npx expo start --web`


## 🌐 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET    | /tasks   | Retorna todas as tarefas |
| POST   | /tasks   | Cria uma nova tarefa |
| PUT    | /tasks/{id} | Atualiza o status de uma tarefa |
| DELETE | /tasks/{id} | Remove uma tarefa |

### Exemplos de Requisições

#### Criar uma tarefa
```http
POST /tasks
Content-Type: application/json

{
  "description": "Estudar Spring Boot",
  "complete": false
}
```

#### Atualizar status da tarefa
```http
PUT /tasks/{id}
Content-Type: application/json

{
  "complete": true
}
```

## 📁 Estrutura do Projeto

### Backend
O backend segue uma arquitetura em camadas:
- `controllers`: Responsáveis por receber as requisições HTTP
- `services`: Contém a lógica de negócio da aplicação
- `dtos`: Objetos de transferência de dados
- `exceptions`: Tratamento de exceções personalizadas

### Frontend
O frontend é organizado em componentes reutilizáveis:
- `components`: Componentes da interface como Button, Input, Item, etc.
- `interfaces`: Definições de tipos TypeScript

## 🧪 Testes

O projeto inclui suporte para testes com Spring Boot Test. Execute-os com:

```bash
./mvnw test
```

## 🔄 Estado do Desenvolvimento

Este projeto está em desenvolvimento ativo. Novas funcionalidades estão sendo adicionadas regularmente.

## 👤 Autor

**Matheus Torres**

## 🎯 Como Usar

1. **Inicie o backend** Spring Boot
2. **Lance a aplicação web** ou **mobile** de sua preferência
3. **Adicione suas primeiras tarefas**
4. **Marque como concluídas** conforme progride
5. **Mantenha-se organizado** e produtivo! 

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## 📸 Screenshots

Abaixo estão algumas capturas de tela da aplicação em funcionamento:

![Screenshot da aplicação](./screenshots/screenshot1.png)

![Screenshot da aplicação](./screenshots/screenshot2.png)
