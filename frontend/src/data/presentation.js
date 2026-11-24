export const sections = [
  ['inicio', 'Inicio'], ['fundamentos', 'Fundamentos'], ['capas', 'Arquitectura'],
  ['recorrido', 'El recorrido'], ['nucleos', 'Núcleos'], ['historia', 'Evolución'],
  ['sistemas', 'Ecosistemas'], ['comparar', 'Comparativa'], ['cierre', 'Cierre'],
]

export const layers = [
  { id: 'usuario', number: '01', title: 'Usuario y aplicaciones', detail: 'Tu intención comienza en una aplicación: abrir una foto, guardar un archivo o reproducir música.', example: 'Navegador · editor · juego' },
  { id: 'interfaz', number: '02', title: 'Interfaz y shell', detail: 'La interfaz gráfica o un intérprete de comandos recibe la acción. La aplicación solicita servicios mediante sus API.', example: 'GUI · terminal · API' },
  { id: 'kernel', number: '03', title: 'Kernel', detail: 'El núcleo coordina procesos, memoria, permisos y entrada/salida. Decide cuándo y cómo utilizar los recursos.', example: 'Scheduler · memoria · controladores' },
  { id: 'hardware', number: '04', title: 'Hardware', detail: 'CPU, RAM, SSD y periféricos realizan el trabajo físico. Los controladores traducen las peticiones para cada dispositivo.', example: 'CPU · RAM · SSD' },
]

export const journey = [
  { number: '01', label: 'La intención', title: 'Haces clic en un archivo', body: 'El evento del mouse llega a la aplicación. Su interfaz interpreta que quieres abrir un archivo.', signal: 'click → aplicación' },
  { number: '02', label: 'La solicitud', title: 'La app pide un servicio', body: 'La aplicación invoca una llamada al sistema para solicitar acceso. Aquí se cruza de modo usuario a modo kernel.', signal: 'open() → syscall' },
  { number: '03', label: 'La decisión', title: 'El kernel organiza recursos', body: 'Comprueba permisos, programa tiempo de CPU y localiza los datos mediante el sistema de archivos y el controlador del SSD.', signal: 'permisos → scheduler' },
  { number: '04', label: 'La ejecución', title: 'El hardware responde', body: 'El dispositivo entrega los datos. Una interrupción avisa al procesador cuando la operación termina.', signal: 'SSD → interrupción' },
  { number: '05', label: 'El resultado', title: 'La ventana muestra el archivo', body: 'El kernel devuelve el resultado a la aplicación. La interfaz dibuja el contenido en la pantalla.', signal: 'datos → pantalla' },
]

export const kernels = [
  { id: 'mono', number: '01', name: 'Monolítico', short: 'Servicios principales dentro del espacio privilegiado.', description: 'Planificador, memoria y muchos controladores comparten el espacio del kernel. Las llamadas internas son directas; un fallo en código privilegiado puede afectar a todo el sistema.', example: 'Linux usa un diseño monolítico modular.', diagram: ['Procesos', 'Memoria', 'Drivers', 'Archivos'] },
  { id: 'micro', number: '02', name: 'Microkernel', short: 'Núcleo mínimo; servicios en procesos separados.', description: 'Mantiene funciones esenciales en modo privilegiado y sitúa más servicios fuera del núcleo. Favorece el aislamiento, aunque la comunicación entre procesos añade trabajo.', example: 'QNX es un ejemplo de microkernel.', diagram: ['IPC', 'Scheduler', 'Memoria mínima'] },
  { id: 'hybrid', number: '03', name: 'Híbrido', short: 'Combina ideas de ambos diseños según el sistema.', description: 'Busca un equilibrio práctico: conserva componentes de alto rendimiento en modo kernel e incorpora mecanismos inspirados en microkernels.', example: 'Windows NT y XNU (macOS/iOS) suelen describirse como híbridos.', diagram: ['Procesos', 'Memoria', 'IPC', 'Drivers'] },
]

export const milestones = [
  { year: '1969', title: 'Unix', body: 'Bell Labs establece una base portable y una filosofía de herramientas pequeñas y combinables.' },
  { year: '1983', title: 'GNU', body: 'El proyecto GNU comienza a construir herramientas libres y un sistema compatible con Unix.' },
  { year: '1991', title: 'Linux', body: 'Aparece el kernel Linux. Junto a herramientas GNU y otros componentes forma distribuciones completas.' },
  { year: '1993', title: 'Windows NT', body: 'Microsoft estrena una arquitectura nueva con separación de modos y servicios para equipos profesionales.' },
  { year: '2001', title: 'Mac OS X', body: 'Apple adopta Darwin y XNU, combinando Mach, BSD y tecnologías propias.' },
  { year: '2007', title: 'iPhone OS', body: 'La interfaz multitáctil lleva un sistema basado en XNU al teléfono.' },
  { year: '2008', title: 'Android', body: 'El sistema basado en Linux llega a dispositivos de múltiples fabricantes.' },
  { year: '2021', title: 'Windows 11', body: 'La familia NT continúa con mayor atención a la seguridad apoyada en hardware.' },
]

export const systems = [
  { id: 'windows', name: 'Windows', mark: 'W', category: 'Escritorio / PC', kernel: 'NT', model: 'Propietario', description: 'El ecosistema más familiar en PC. Destaca por compatibilidad con aplicaciones, hardware y videojuegos. Su núcleo NT separa el modo usuario del modo kernel.', ideal: 'Oficina, equipos variados y gaming', accent: '#74b9ff', fact: 'Windows XP llevó la línea NT a la mayoría de computadoras domésticas.' },
  { id: 'linux', name: 'GNU/Linux', mark: 'L', category: 'Servidor / escritorio', kernel: 'Linux', model: 'Software libre', description: 'Linux es el kernel; una distribución añade herramientas, bibliotecas y gestor de paquetes. Su flexibilidad lo hace común en servidores, nube y desarrollo.', ideal: 'Infraestructura, aprendizaje y control', accent: '#ffbf69', fact: 'Linux se inspiró en Unix; no desciende directamente de su código.' },
  { id: 'macos', name: 'macOS', mark: 'M', category: 'Escritorio / Mac', kernel: 'XNU', model: 'Propietario', description: 'Combina la base Darwin, con componentes Mach y BSD, con una interfaz y hardware diseñados por Apple. La transición a Apple Silicon une rendimiento y eficiencia.', ideal: 'Creación, productividad y desarrollo', accent: '#d0d7e2', fact: 'XNU integra componentes Mach, BSD y el sistema de controladores I/O Kit.' },
  { id: 'ios', name: 'iOS', mark: 'i', category: 'Móvil / Apple', kernel: 'XNU', model: 'Propietario', description: 'Comparte la base XNU con macOS y adapta la experiencia a pantallas táctiles y chips móviles. Apple controla dispositivo y plataforma.', ideal: 'iPhone y ecosistema Apple', accent: '#f5a8bd', fact: 'El iPhone llegó en 2007; la App Store se estrenó en 2008.' },
  { id: 'android', name: 'Android', mark: 'A', category: 'Móvil / múltiples marcas', kernel: 'Linux', model: 'AOSP + fabricante', description: 'AOSP aporta una base abierta construida sobre Linux, con runtime ART y capas de sistema. Cada fabricante la adapta a sus dispositivos.', ideal: 'Variedad de precios, formatos y marcas', accent: '#a5de83', fact: 'AOSP es abierto, pero no todos los componentes de cada teléfono lo son.' },
]

export const sources = [
  { label: 'Material de clase · Semana 4', url: null },
  { label: 'Linux Kernel Documentation', url: 'https://docs.kernel.org/' },
  { label: 'Microsoft Learn · modos usuario/kernel', url: 'https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/user-mode-and-kernel-mode' },
  { label: 'Apple Developer · XNU', url: 'https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/KernelProgramming/Architecture/Architecture.html' },
  { label: 'Android Open Source Project', url: 'https://source.android.com/docs/core/architecture' },
]
