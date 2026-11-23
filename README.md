# UPC PROJECT

Proyecto base full stack con un backend en NestJS y un frontend en Vue 3, Vue Router y Tailwind CSS 4.

## Estructura

```text
UPC-PROJECT/
├── backend/                 # API REST con NestJS
└── frontend/
    └── src/
        ├── components/
        │   └── pages/       # Una carpeta de componentes por página
        │       ├── about/
        │       └── home/
        ├── layouts/         # Layout principal de las rutas
        ├── pages/           # Páginas que componen sus propios componentes
        ├── router/          # Rutas y layout
        ├── App.vue          # Renderizador raíz
        └── main.js
```

## Instalación

```bash
npm install
```

## Desarrollo

Ejecutar backend y frontend juntos:

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3000/api
- Estado del backend: http://localhost:3000/api/health

## Compilación

```bash
npm run build
```

## Agregar una página

1. Crear la vista en `frontend/src/pages`.
2. Crear sus componentes en `frontend/src/components/pages/nombre-pagina`.
3. Importar esos componentes en la vista.
4. Registrar la nueva ruta como hija de `MainLayout` en `frontend/src/router/index.js`.

