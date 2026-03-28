# Usando Node 20 (LTS) em um ambiente Linux (Debian)
FROM node:20-bookworm

# Cria o diretório de trabalho
WORKDIR /usr/src/app

RUN npm install -g nodemon

# Copia apenas os arquivos de dependências primeiro (otimiza o cache)
COPY package*.json ./

# Instala as dependências (aqui o tfjs-node vai compilar no Linux sem erro)
RUN npm install

# Copia o restante dos arquivos do seu projeto
COPY . .

# Comando para rodar a aplicação
CMD ["npm", "start"]