# IvaiFood 🍕

Plataforma de delivery de comidas exclusiva para a cidade de Ivaí. Conectando clientes, vendedores e entregadores.

## 🎯 Visão Geral

IvaiFood é um aplicativo mobile desenvolvido com **React Expo** para iOS e Android, que funciona como um marketplace de delivery de comidas. A plataforma possui três interfaces diferentes:

- **Cliente:** Busca restaurantes, faz pedidos e acompanha entregas
- **Vendedor:** Gerencia sua loja, cardápio e pedidos
- **Entregador:** Aceita entregas e gerencia rotas

## 🎨 Design System

### Cores Principais
- **Vermelho:** #FF6B35 (Ação e CTA)
- **Marrom:** #8B4513 (Elementos secundários)
- **Amarelo:** #FFD700 (Destaque e ênfase)

## 📁 Estrutura do Projeto

```
iva-food/
├── frontend/        # Aplicativo móvel (React Expo)
├── backend/         # APIs e funções (Firebase Functions)
├── regras/          # Documentação de regras de negócio
└── README.md        # Este arquivo
```

## 🚀 Quick Start

### Frontend

```bash
cd frontend
npm install
npm start
```

Veja [Frontend README](./frontend/README.md) para mais informações.

### Backend

```bash
cd backend
npm install
npm run serve
```

Veja [Backend README](./backend/README.md) para mais informações.

## 📋 Funcionalidades

### ✅ Cliente
- [x] Tela home com promoções e restaurantes
- [ ] Busca e filtros
- [ ] Detalhes do restaurante
- [ ] Carrinho de compras
- [ ] Checkout
- [ ] Rastreamento em tempo real
- [ ] Histórico de pedidos
- [ ] Sistema de avaliação

### ✅ Vendedor
- [ ] Dashboard
- [ ] Gerenciamento de cardápio
- [ ] Gestão de pedidos
- [ ] Relatórios de vendas
- [ ] Horário de funcionamento

### ✅ Entregador
- [ ] Listagem de entregas
- [ ] Aceitar/recusar entregas
- [ ] Rastreamento GPS
- [ ] Histórico de ganhos
- [ ] Avaliação

## 🔧 Tecnologias

### Frontend
- React Native / Expo
- TypeScript
- React Navigation
- Firebase
- Zustand

### Backend
- Firebase Functions
- Firestore
- Node.js
- Express (opcional)

## 📱 Plataformas

- iOS 13+
- Android 11+
- Web (via Expo Web)

## 🔐 Segurança

- Autenticação via Firebase
- Firestore com regras de segurança
- Dados criptografados
- LGPD compliant

## 📚 Documentação

- [Regras do App](./regras/regras_do_app.md) - Documentação completa das regras de negócio
- [Frontend README](./frontend/README.md) - Guia do aplicativo móvel
- [Backend README](./backend/README.md) - Guia das APIs e funções

## 🗺️ Roadmap

### Phase 1: MVP (Current)
- [x] Estrutura do projeto
- [x] Tela home
- [ ] Autenticação básica
- [ ] Listar restaurantes

### Phase 2: Funcionalidades Core
- [ ] Sistema de pedidos completo
- [ ] Rastreamento de entrega
- [ ] Sistema de avaliação

### Phase 3: Expansão
- [ ] App para Web (vendedor)
- [ ] Integração de pagamentos
- [ ] Promoções e cupons
- [ ] Chat em tempo real

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📝 Licença

Este projeto é privado e exclusivo para a cidade de Ivaí.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato com o time de desenvolvimento.

---

**Início do Projeto:** 2026-05-18
