# IvaiFood - Backend (Firebase Functions)

## 🔧 Sobre o Backend

Backend do IvaiFood desenvolvido com Firebase Functions (Node.js) e Firestore. Responsável pela autenticação, validação de dados, processamento de pedidos e gerenciamento de entregas.

## 📁 Estrutura do Projeto

```
src/
├── functions/        # Firebase Cloud Functions
├── models/           # Tipagens e interfaces
├── services/         # Lógica de negócio
├── middleware/       # Middlewares Express
├── utils/            # Funções utilitárias
└── index.ts          # Arquivo principal
```

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+
- Firebase CLI
- Google Cloud SDK (opcional)

### Passos de Instalação

```bash
# Entrar na pasta do backend
cd backend

# Instalar dependências
npm install

# Fazer login no Firebase
firebase login

# Selecionar o projeto
firebase use --add

# Instalar o emulador (opcional)
firebase emulators:install
```

## 🏃 Rodando Localmente

```bash
# Com emulador
npm run serve

# Shell interativo (testing)
npm run start
```

## 🚀 Deploy

```bash
# Deploy apenas das functions
npm run deploy

# Deploy completo do projeto
firebase deploy
```

## 📦 Dependências Principais

- **Firebase Admin SDK:** Acesso ao banco de dados e autenticação
- **Firebase Functions:** Computação serverless
- **Express:** Framework web (opcional)
- **CORS:** Controle de origem

## 🔒 Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }

    // Vendedores
    match /vendors/{vendorId} {
      allow read: if true;
      allow write: if request.auth.uid == resource.data.userId;
    }

    // Produtos
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth.uid == resource.data.vendorId;
    }

    // Pedidos
    match /orders/{orderId} {
      allow read: if request.auth.uid == resource.data.clientId ||
                     request.auth.uid == resource.data.vendorId ||
                     request.auth.uid == resource.data.deliveryPersonId;
      allow create: if request.auth.uid == request.resource.data.clientId;
      allow update: if request.auth.uid == resource.data.vendorId ||
                       request.auth.uid == resource.data.deliveryPersonId;
    }
  }
}
```

## 🔑 Environment Variables

As variáveis são automaticamente gerenciadas pelo Firebase, mas para desenvolvimento local, use:

```bash
firebase functions:config:set \
  app.name="IvaiFood" \
  app.version="1.0.0"
```

## 📱 Endpoints Principais

*(A serem implementados)*

- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Login
- `GET /vendors` - Listar vendedores
- `GET /vendors/{id}` - Detalhes de vendedor
- `GET /products` - Listar produtos
- `POST /orders` - Criar pedido
- `GET /orders/{id}` - Detalhes do pedido

## 🛠️ Scripts Disponíveis

```bash
# Build do TypeScript
npm run build

# Rodar emulador
npm run serve

# Shell interativo
npm run start

# Deploy
npm run deploy

# Ver logs
npm run logs

# Type check
npm run type-check

# Lint
npm run lint
```

## 🚧 Próximos Passos

1. Implementar autenticação (registro e login)
2. CRUD de vendedores e produtos
3. Sistema de pedidos
4. Notificações em tempo real
5. Rastreamento de entrega
6. Sistema de pagamentos

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

**Última atualização:** 2026-05-18
