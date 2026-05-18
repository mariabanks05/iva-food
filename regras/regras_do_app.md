# IvaiFood - Regras do App

## 1. Informações Gerais do Projeto

**Nome do App:** IvaiFood  
**Tipo:** Delivery de Comidas (Exclusivo - Cidade Específica)  
**Tecnologia:** React Expo  
**Abordagem:** Mobile First  
**Backend:** Firebase (Firestore + Authentication)  
**Plataformas:** iOS e Android

---

## 2. Identidade Visual

### Cores Principais
- **Vermelho:** #FF6B35 (Cor Principal/Ação)
- **Marrom:** #8B4513 (Cor Secundária/Destaque)
- **Amarelo:** #FFD700 (Cor Terciária/Destaque Secundário)

### Tipografia
- Fonte Principal: Inter ou Roboto
- Fonte Secundária: Para títulos (Bold)

---

## 3. Tipos de Usuários e Fluxos

### 3.1 Cliente (Comprador)
**Funcionalidades:**
- Cadastro com email/senha e redes sociais
- Perfil de usuário (nome, endereço, telefone)
- Listar restaurantes/vendedores
- Visualizar cardápio de cada vendedor
- Carrinho de compras
- Histórico de pedidos
- Rastreamento de entrega em tempo real
- Sistema de avaliação de vendedor e entregador
- Métodos de pagamento (cartão, PIX, dinheiro)
- Promoções e cupons

### 3.2 Vendedor (Restaurante/Loja)
**Funcionalidades:**
- Cadastro com validação de dados comerciais
- Gerenciamento de loja (horário, descrição, foto)
- Cadastro e edição de cardápio (produtos, preços, fotos)
- Dashboard com pedidos em tempo real
- Aceitar/Rejeitar pedidos
- Gerenciar status de entrega
- Histórico de vendas e relatórios
- Sistema de avaliação e feedback de clientes
- Gerenciar horário de funcionamento

### 3.3 Entregador (Motorista)
**Funcionalidades:**
- Cadastro com validação de dados pessoais
- Listar entregas disponíveis
- Aceitar/Recusar entrega
- Rastreamento GPS em tempo real
- Avisos de localização do cliente
- Histórico de entregas
- Ganhos e relatórios
- Sistema de avaliação de clientes
- Notificações de novas entregas

---

## 4. Estrutura de Cadastro (3 Fluxos Diferentes)

### Tela 1: Seleção de Tipo de Usuário
- Botão: "Sou Cliente"
- Botão: "Sou Vendedor"
- Botão: "Sou Entregador"

### Tela 2: Cadastro Cliente
- Email
- Senha
- Nome Completo
- Telefone
- Endereço
- Complemento
- Termos de uso

### Tela 3: Cadastro Vendedor
- Email
- Senha
- Nome do Negócio
- CNPJ/CPF
- Telefone
- Endereço Comercial
- Descrição da Loja
- Foto de Perfil
- Categoria (Restaurante, Lanchonete, Açaí, etc.)
- Horário de Funcionamento
- Termos de uso

### Tela 4: Cadastro Entregador
- Email
- Senha
- Nome Completo
- CPF
- Telefone
- Veículo (Moto/Carro/Bicicleta)
- Placa/Identificação
- Dados Bancários (PIX/Transferência)
- Foto Perfil
- Termos de uso

---

## 5. Estrutura de Autenticação Firebase

### Autenticação
- Email/Senha
- Google Sign-In (opcional)
- Apple Sign-In (opcional)

### Regras Firestore (Segurança)
```
- Usuários podem ler/escrever apenas seu próprio documento
- Vendedores podem ler/escrever dados de sua loja
- Entregadores podem ler/escrever apenas suas entregas
- Clientes podem ler catálogos públicos de vendedores
```

---

## 6. Estrutura de Dados Firestore

### Coleção: users
```
{
  id: string (UID),
  type: "client" | "vendor" | "delivery",
  email: string,
  name: string,
  phone: string,
  avatar: string (URL),
  createdAt: timestamp,
  isActive: boolean
}
```

### Coleção: vendors
```
{
  id: string,
  userId: string (referência users),
  businessName: string,
  cnpjCpf: string,
  category: string,
  address: object,
  description: string,
  photos: array,
  rating: number,
  reviews: number,
  schedule: object,
  isActive: boolean,
  createdAt: timestamp
}
```

### Coleção: products
```
{
  id: string,
  vendorId: string (referência vendors),
  name: string,
  description: string,
  price: number,
  image: string,
  category: string,
  isAvailable: boolean,
  createdAt: timestamp
}
```

### Coleção: orders
```
{
  id: string,
  clientId: string,
  vendorId: string,
  deliveryPersonId: string,
  items: array,
  totalPrice: number,
  status: "pending" | "accepted" | "preparing" | "ready" | "on_the_way" | "delivered" | "canceled",
  deliveryAddress: object,
  paymentMethod: string,
  rating: object,
  createdAt: timestamp,
  deliveredAt: timestamp
}
```

### Coleção: deliveries
```
{
  id: string,
  orderId: string,
  deliveryPersonId: string,
  vendorId: string,
  clientId: string,
  status: "pending" | "accepted" | "on_the_way" | "delivered" | "declined",
  startLocation: geolocation,
  currentLocation: geolocation,
  destinationLocation: geolocation,
  earnings: number,
  rating: number,
  createdAt: timestamp
}
```

---

## 7. Fluxo de Funcionamento

### Fluxo Cliente
1. Cliente se cadastra/loga
2. Visualiza vendedores disponíveis na sua região
3. Seleciona vendedor e visualiza produtos
4. Adiciona itens ao carrinho
5. Faz checkout e pagamento
6. Acompanha preparação do pedido
7. Acompanha localização do entregador
8. Recebe pedido
9. Avalia vendedor e entregador

### Fluxo Vendedor
1. Vendedor se cadastra/loga
2. Gerencia sua loja e cardápio
3. Recebe notificações de novos pedidos
4. Aceita/rejeita pedidos
5. Atualiza status de preparação
6. Marca como pronto para entrega
7. Visualiza histórico e ganhos

### Fluxo Entregador
1. Entregador se cadastra/loga
2. Visualiza entregas disponíveis
3. Aceita/recusa entrega
4. Começa rota com GPS
5. Notifica cliente de chegada
6. Completa entrega
7. Recebe avaliação
8. Visualiza ganhos

---

## 8. Regras de Negócio

### Validações Gerais
- Todos os cadastros requerem email único
- Senha mínima de 8 caracteres
- Telefone validado com formato brasileiro
- CPF/CNPJ validado

### Regras de Pedidos
- Pedido só pode ser aceito por vendedor em horário comercial
- Tempo mínimo de preparo: 15 minutos (configurável)
- Apenas um entregador por pedido
- Cancelamento permitido até 5 minutos após confirmação
- Taxa de entrega calculada por distância

### Regras de Pagamento
- Valores mínimos por pedido: R$ 15,00
- Taxa de serviço: 15% do vendedor
- Taxa de entrega: Dinâmica conforme distância
- PIX é método recomendado

### Regras de Avaliação
- Escala de 1 a 5 estrelas
- Comentário opcional
- Apenas usuários que completaram transação podem avaliar

---

## 9. Notificações

- Novo pedido para vendedor
- Pedido aceito para cliente
- Entregador chegando
- Entrega completa
- Promoções e ofertas especiais (opt-in)

---

## 10. Segurança e Compliance

- LGPD: Política de privacidade explícita
- Dados sensíveis criptografados
- Autenticação via Firebase
- SSL/TLS obrigatório
- Rate limiting em APIs
- Logs de transações

---

## 11. Fases de Desenvolvimento

### Fase 1: MVP
- Cadastros básicos
- Listar vendedores e produtos
- Criar pedidos
- Sistema de notificações simples

### Fase 2: Entrega
- Rastreamento GPS
- Chat entre cliente e entregador
- Sistema de avaliação

### Fase 3: Expandido
- Promoções e cupons
- Integração com múltiplos pagamentos
- Analytics para vendedores
- App de web para vendedor

---

## 12. Roadmap Técnico

- [ ] Configurar projeto React Expo
- [ ] Configurar Firebase (Firestore + Auth)
- [ ] Criar navegação base (3 fluxos)
- [ ] Implementar autenticação
- [ ] Telas de cadastro e perfil
- [ ] Home do cliente com listagem
- [ ] Carrinho e checkout
- [ ] Dashboard do vendedor
- [ ] Sistema de pedidos
- [ ] Rastreamento em tempo real
- [ ] Sistema de avaliações
- [ ] Testes e otimização

---

**Última atualização:** 2026-05-18
