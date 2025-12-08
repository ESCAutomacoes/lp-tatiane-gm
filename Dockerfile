# 1) Imagem base
FROM node:20-alpine AS base
WORKDIR /app

# Evita envio de telemetria do Next
ENV NEXT_TELEMETRY_DISABLED=1

# 2) Stage de dependências
FROM base AS deps
# Copia apenas arquivos de dependências
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
# Ajusta se usar yarn/pnpm; aqui está com npm
RUN npm ci

# 3) Stage de build
FROM base AS builder
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# 4) Stage final (imagem de produção)
FROM base AS runner
ENV NODE_ENV=production

# Usuário não-root (boa prática)
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
USER nextjs

# Copia apenas o necessário para rodar
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

# Porta padrão do Next
EXPOSE 3000

# Certifica que no package.json existe: "start": "next start"
CMD ["npm", "start"]
