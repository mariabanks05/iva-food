# IvaiFood - Frontend Mobile (React Expo)

## 📱 Sobre o Projeto

Frontend mobile do IvaiFood desenvolvido com React Expo, focando em mobile first design. O aplicativo permite que clientes, vendedores e entregadores acessem a plataforma de delivery de comidas.

## 🎨 Design e Cores

- **Vermelho (Principal):** #FF6B35
- **Marrom (Secundária):** #8B4513
- **Amarelo (Destaque):** #FFD700

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens, ícones e recursos
├── components/       # Componentes reutilizáveis
├── screens/         # Telas do aplicativo
├── services/        # Serviços (Firebase, API, etc)
├── hooks/           # Custom React hooks
├── store/           # Gerenciamento de estado (Zustand)
├── styles/          # Temas e estilos globais
├── types/           # Tipos TypeScript
├── utils/           # Funções utilitárias
├── navigation/      # Configuração de navegação
└── App.tsx          # Arquivo principal
```

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI

### Passos de Instalação

```bash
# Clonar o repositório
git clone <repositorio>
cd frontend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas credenciais Firebase

# Iniciar o projeto
npm start
```

## 🏃 Rodando o App

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Web
```bash
npm run web
```

## 📦 Dependências Principais

- **React Expo:** Framework para desenvolvimento cross-platform
- **React Navigation:** Navegação entre telas
- **Firebase:** Backend, autenticação e banco de dados
- **Zustand:** Gerenciamento de estado leve
- **TypeScript:** Type safety para o código

## 🔧 Configuração Firebase

1. Criar um projeto no [Firebase Console](https://console.firebase.google.com)
2. Copiar as credenciais do projeto
3. Colar em `.env`:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=sua_chave
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_dominio
EXPO_PUBLIC_FIREBASE_PROJECT_ID=seu_projeto_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=seu_app_id
```

## 📱 Telas Implementadas

- [x] **Home Screen** - Listagem de promoções, categorias e restaurantes
- [ ] **Vendor Detail** - Detalhes de um restaurante
- [ ] **Cart** - Carrinho de compras
- [ ] **Checkout** - Finalização de pedido
- [ ] **Order Tracking** - Rastreamento de entrega
- [ ] **Auth Screens** - Login e cadastro
- [ ] **Profile** - Perfil do usuário

## 🛠️ Scripts Disponíveis

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Rodar no Android
npm run android

# Rodar no iOS
npm run ios

# Rodar na web
npm run web

# Verificar erros TypeScript
npm run type-check

# Lint com ESLint
npm run lint
```

## 🔐 Segurança

- Variáveis de ambiente protegidas
- Autenticação via Firebase
- Regras de Firestore configuradas

## 📝 Padrões de Código

- **TypeScript** para type safety
- **Componentes funcionais** com hooks
- **Estilos com StyleSheet** do React Native
- **Pastas organizadas** por funcionalidade

## 🚧 Próximos Passos

1. Implementar autenticação e cadastro
2. Conectar com Firestore
3. Tela de detalhes de vendedor
4. Sistema de carrinho
5. Checkout e pagamento
6. Rastreamento em tempo real

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

**Última atualização:** 2026-05-18
