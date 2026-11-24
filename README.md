# Arquitectura de Sistemas Operativos · UPC

Exposición web interactiva basada en el resumen de la Semana 4 del curso 1FIS0277. El frontend usa Vue 3, Vue Router y Tailwind CSS 4. El repositorio conserva un backend NestJS básico, aunque esta exposición funciona sin API.

## Ejecutar en local

Requiere Node.js 22.

```bash
cd frontend
npm install --no-package-lock
npm run dev
```

Abre http://localhost:5173. El backend es independiente: en otra terminal, entra a `backend`, instala sus dependencias y ejecuta `npm run start:dev`.

## Estructura

- `frontend/src/pages/HomePage.vue`: compone toda la exposición.
- `frontend/src/components/pages/home/`: cada capítulo y sus interacciones.
- `frontend/src/data/presentation.js`: contenido de capas, recorrido, cronología y sistemas.
- `frontend/src/layouts/MainLayout.vue`: layout con navegación común.
- `frontend/src/router/index.js`: ruta principal.
- `frontend/public/`: visuales 3D y redirección de Netlify.
- `backend/`: API básica independiente.

## Desplegar el frontend en Netlify

Conecta el repositorio `Jeremitc/UPC-PROJECT` y usa estos campos:

| Campo | Valor |
| --- | --- |
| Branch to deploy | `main` |
| Base directory | `frontend` |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions directory | Dejar vacío |
| Node version | `22` (también declarada en `.nvmrc`) |

Netlify instala las dependencias automáticamente antes de ejecutar el build. No uses `npm run i`: ese script no existe. El archivo `frontend/public/_redirects` permite que Vue Router cargue correctamente al entrar a una ruta directamente.

Para comprobar el build localmente:

```bash
cd frontend
npm run build
```

Si configuras Netlify con la raíz del repositorio en lugar de `frontend`, utiliza `npm --prefix frontend run build` y publica `frontend/dist`.

## Contenido

La web recorre fundamentos, capas, una simulación del viaje de un clic, arquitecturas de kernel, cronología, cinco ecosistemas y una comparativa. Incluye preguntas finales para el público y enlaces a documentación técnica oficial.
