# Użyj oficjalnego obrazu Node.js
FROM node:lts

# Utwórz katalog /app w kontenerze
WORKDIR /app

# Skopiuj plik package.json i package-lock.json do katalogu /app
COPY package*.json ./

# Zainstaluj zależności projektu
RUN npm install

# Skopiuj resztę plików projektu
COPY . .

# Port, na którym działa serwer React
EXPOSE 5173

# Uruchom serwer React
CMD ["npm", "run", "dev"]
