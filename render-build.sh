#!/usr/bin/env bash
# Instala dependencias
npm install

# Ejecuta las migraciones si tienes
npx sequelize-cli db:migrate
