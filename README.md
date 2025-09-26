# Backend – API del Catálogo de Pizarras

## Descripción

El backend proporciona la **API REST** del catálogo de pizarras, utilizando **Express** y **Prisma** para interactuar con una base de datos **PostgreSQL**.
Permite:

* Listar productos.
* Inicializar la base de datos con seeders de productos.
* Servir datos de manera rápida y escalable para el frontend.

> ⚠️ Nota: Es necesario que previamente exista una base de datos PostgreSQL creada y accesible para poder conectar y ejecutar las migraciones.

---

## Tecnologías

* **Node.js + Express**: Servidor escalable y rápido.
* **Prisma**: ORM moderno con tipado seguro para PostgreSQL.
* **PostgreSQL**: Base de datos relacional confiable.
* **dotenv**: Manejo seguro de variables de entorno.
* **Nodemon**: Reinicio automático durante desarrollo.

---

## Instalación

**Clonar el repositorio y entrar al backend:**

```bash
git clone [URL_DEL_REPO]
```

**Instalar dependencias:**

```bash
npm install
```

**Configurar variables de entorno:**

```env
DATABASE_URL="postgresql://usuario:contraseña@host:5432/postgres"
PORT=4000
```

> Reemplaza `usuario`, `contraseña` y `host` con los datos correctos de tu base de datos.

**Generar Prisma Client y ejecutar migraciones:**

```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

**Ejecutar el servidor:**

```bash
npm run dev
```

La API estará disponible en: [http://localhost:4000/api/products](http://localhost:4000/api/products)

---

## Funcionalidades

* **Listar productos** con filtros por categoría y búsqueda por nombre.
* **Paginación** de productos.
* **Seeders** para inicializar la base de datos con productos de ejemplo.
* **API REST escalable** para futuros endpoints.
