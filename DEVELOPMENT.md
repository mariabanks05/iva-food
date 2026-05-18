# Padrões de Desenvolvimento do IvaiFood

Este documento define os padrões e convenções de código para o projeto IvaiFood.

## 📋 Índice

1. [Estrutura de Pastas](#estrutura-de-pastas)
2. [Nomeação](#nomeação)
3. [TypeScript](#typescript)
4. [Componentes React](#componentes-react)
5. [Estilos](#estilos)
6. [Commits](#commits)

## 🗂️ Estrutura de Pastas

### Frontend
```
src/
├── components/       # Componentes reutilizáveis
├── screens/         # Telas/Páginas
├── services/        # Serviços (Firebase, API)
├── hooks/           # Custom React Hooks
├── store/           # Gerenciamento de estado
├── styles/          # Temas e estilos globais
├── types/           # Tipos TypeScript
├── utils/           # Funções utilitárias
├── navigation/      # Configuração de navegação
├── assets/          # Imagens, ícones
└── App.tsx          # Arquivo principal
```

### Backend
```
src/
├── functions/       # Cloud Functions
├── models/          # Tipagens e interfaces
├── services/        # Lógica de negócio
├── middleware/      # Middlewares Express
├── utils/           # Funções utilitárias
└── index.ts         # Arquivo principal
```

## 📝 Nomeação

### Arquivos e Pastas
- **Componentes:** PascalCase (ex: `UserProfile.tsx`)
- **Hooks:** camelCase com prefixo `use` (ex: `useAuth.ts`)
- **Services:** camelCase (ex: `firebaseService.ts`)
- **Pastas:** kebab-case (ex: `user-profile/`)
- **Types:** PascalCase (ex: `User.ts`)

### Variáveis e Funções
- **Variáveis:** camelCase (ex: `const userName = ...`)
- **Constantes:** UPPER_SNAKE_CASE (ex: `const API_KEY = ...`)
- **Functions:** camelCase (ex: `const handleUserClick = ...`)

## 🔧 TypeScript

### Tipos e Interfaces
```typescript
// ✅ Bom: Exportar interfaces
export interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ Bom: Type para tipos simples
export type UserType = 'client' | 'vendor' | 'delivery';

// ❌ Evitar: any
const data: any = ...  // Não usar

// ✅ Bom: Tipos específicos
const data: User = ...
```

### Tipagem de Funções
```typescript
// ✅ Bom
interface Props {
  name: string;
  onPress: () => void;
}

const Component: React.FC<Props> = ({ name, onPress }) => {
  return ...
}

// ❌ Evitar
const Component = (props) => {
  return ...
}
```

## ⚛️ Componentes React

### Estrutura de Componente
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '@styles/theme';

interface Props {
  title: string;
  onPress: () => void;
}

export const MyComponent: React.FC<Props> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,
  },
  title: {
    color: COLORS.primary,
  },
});
```

### Nomeação de Props
- Callbacks: `on{Action}` (ex: `onPress`, `onChange`, `onSubmit`)
- Boolean: `is{Adjective}` (ex: `isLoading`, `isDisabled`)
- Strings: `{noun}` (ex: `title`, `placeholder`)

### Hooks
```typescript
// ✅ Bom: Custom hook
export const useAuthUser = () => {
  const [user, setUser] = useState(null);
  
  return { user };
};

// ✅ Bom: Usar o hook
const { user } = useAuthUser();
```

## 🎨 Estilos

### Cores
```typescript
// ✅ Sempre use o theme
import { COLORS } from '@styles/theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary, // ✅ Bom
  },
});

// ❌ Evitar cores hardcoded
backgroundColor: '#FF6B35'
```

### Spacing
```typescript
// ✅ Use constantes de spacing
import { SPACING } from '@styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,      // 16px
    marginVertical: SPACING.lg, // 24px
  },
});
```

## 📦 Commits

### Formato
```
<tipo>(<escopo>): <descrição>

<corpo>

<footer>
```

### Tipos
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação de código
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Testes

### Exemplos
```
feat(home): adicionar busca de restaurantes
fix(cart): corrigir cálculo de total
docs(readme): atualizar instruções de setup
refactor(auth): melhorar fluxo de autenticação
```

## 🧪 Testes

- Usar Jest + React Testing Library
- Arquivos de teste: `__tests__/` ou `.test.ts`
- Cobertura mínima: 80%

## 📋 Checklist Antes de Fazer PR

- [ ] Código segue os padrões
- [ ] TypeScript sem erros
- [ ] Lint passou (eslint, prettier)
- [ ] Testes implementados
- [ ] Commits com mensagens claras
- [ ] README/documentação atualizada
- [ ] Sem console.log de debug
- [ ] Performance considerada

---

**Última atualização:** 2026-05-18
