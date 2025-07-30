# Espacio de Chat de Agentes / Agent Chat Space

Un modelo creativo para desarrollo de proyectos basado en espacios de chat con agentes especializados.

*A creative model for project development based on specialized agent chat spaces.*

## 🌟 Visión del Proyecto / Project Vision

Este proyecto proporciona un marco de trabajo innovador para el desarrollo creativo mediante la interacción con agentes especializados que actúan como consultores expertos en diferentes áreas.

*This project provides an innovative framework for creative development through interaction with specialized agents that act as expert consultants in different areas.*

## 🤖 Agentes Disponibles / Available Agents

### CreativeAgent (Agente Creativo)
- **Especialidad**: Creatividad, brainstorming, generación de ideas
- **Capacidades**:
  - Generación de ideas innovadoras
  - Facilitación de sesiones de brainstorming
  - Desarrollo de conceptos creativos
  - Inspiración artística y de diseño

### DevelopmentAgent (Agente de Desarrollo)
- **Especialidad**: Desarrollo de software, arquitectura técnica
- **Capacidades**:
  - Arquitectura de software
  - Revisión de código
  - Selección de tecnologías
  - Mejores prácticas de desarrollo
  - Estrategias de testing

## 🚀 Inicio Rápido / Quick Start

### Prerrequisitos / Prerequisites
- Node.js 18+ instalado
- Git para clonar el repositorio

### Instalación / Installation

```bash
# Clonar el repositorio
git clone https://github.com/OzkrMX/OzkrMX.git
cd OzkrMX

# Instalar dependencias (si las hay)
npm install

# Ejecutar la aplicación
npm start
```

### Uso Básico / Basic Usage

```bash
# Iniciar el espacio de chat interactivo
npm start

# En el chat, puedes usar comandos como:
help        # Mostrar ayuda
agents      # Listar agentes disponibles
history     # Ver historial de chat
clear       # Limpiar historial
exit        # Salir
```

## 💬 Ejemplos de Interacción / Interaction Examples

### Sesión Creativa / Creative Session
```
> necesito ideas para mi aplicación web
CreativeBot: 🎨 ¡Perfecto! Soy tu especialista en creatividad...
```

### Consulta Técnica / Technical Consultation
```
> qué arquitectura recomiendas para mi proyecto
DevBot: 🏗️ Guía de Arquitectura de Software...
```

## 🏗️ Arquitectura del Sistema / System Architecture

```
src/
├── index.js              # Punto de entrada principal
├── AgentChatSpace.js     # Motor del espacio de chat
└── agents/
    ├── BaseAgent.js      # Clase base para agentes
    ├── CreativeAgent.js  # Agente especializado en creatividad
    └── DevelopmentAgent.js # Agente de desarrollo
```

## 🧪 Testing / Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Las pruebas cubren:
# - Funcionalidad del espacio de chat
# - Comportamiento de los agentes
# - Selección automática de agentes
```

## 🔧 Personalización / Customization

### Crear un Nuevo Agente / Creating a New Agent

```javascript
import { BaseAgent } from './BaseAgent.js';

export class MiNuevoAgente extends BaseAgent {
    constructor(name = 'MiBot') {
        super(name, 'Descripción de mi agente especializado');
        
        this.keywords = ['palabra1', 'palabra2', 'palabra3'];
        this.capabilities = ['Capacidad 1', 'Capacidad 2'];
    }

    async processMessage(message, chatHistory) {
        // Lógica personalizada para procesar mensajes
        return 'Respuesta del agente';
    }
}
```

### Agregar el Agente al Sistema / Adding Agent to System

```javascript
// En src/index.js
import { MiNuevoAgente } from './agents/MiNuevoAgente.js';

const miAgente = new MiNuevoAgente('MiBot');
chatSpace.addAgent(miAgente);
```

## 🎯 Filosofía del Proyecto / Project Philosophy

### Modelo Creativo de Desarrollo / Creative Development Model

Este proyecto implementa un enfoque innovador para el desarrollo de proyectos:

1. **Colaboración con Expertos Virtuales**: Cada agente representa un experto en su campo
2. **Iteración Rápida**: Feedback inmediato y sugerencias contextuales
3. **Aprendizaje Continuo**: El sistema evoluciona con cada interacción
4. **Democratización del Expertise**: Acceso fácil a conocimiento especializado

### Casos de Uso / Use Cases

- **Startups**: Validación de ideas y decisiones técnicas
- **Equipos de Desarrollo**: Consultoría instantánea en múltiples disciplinas
- **Estudiantes**: Aprendizaje interactivo y guiado
- **Creadores**: Superación de bloqueos creativos

## 🛣️ Roadmap / Hoja de Ruta

### Versión Actual (1.0)
- [x] Estructura básica del sistema
- [x] Agentes creativos y de desarrollo
- [x] Interfaz de chat interactiva
- [x] Sistema de selección automática de agentes

### Próximas Funcionalidades
- [ ] Agente de Marketing
- [ ] Agente de UX/UI
- [ ] Persistencia de conversaciones
- [ ] Interfaz web
- [ ] API REST
- [ ] Integración con herramientas de desarrollo
- [ ] Análisis de sentimientos
- [ ] Recomendaciones basadas en historial

## 🤝 Contribuir / Contributing

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia / License

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Reconocimientos / Acknowledgments

- Inspirado en el concepto de "pair programming" con IA
- Diseñado para democratizar el acceso a expertise especializado
- Construido con Node.js y amor por la innovación

---

**¿Listo para comenzar tu proyecto creativo? ¡Ejecuta `npm start` y comienza a chatear con tus agentes expertos!**

*Ready to start your creative project? Run `npm start` and start chatting with your expert agents!*