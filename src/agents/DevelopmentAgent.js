import { BaseAgent } from './BaseAgent.js';

/**
 * Agente especializado en desarrollo de software y mejores prácticas
 * Agent specialized in software development and best practices
 */
export class DevelopmentAgent extends BaseAgent {
    constructor(name = 'DevBot') {
        super(name, 'Especialista en desarrollo de software, arquitectura y mejores prácticas técnicas');
        
        this.keywords = [
            'código', 'code', 'programar', 'programming', 'desarrollo', 'development',
            'arquitectura', 'architecture', 'framework', 'biblioteca', 'library',
            'api', 'base de datos', 'database', 'test', 'testing', 'debug',
            'deployment', 'git', 'javascript', 'python', 'node', 'react'
        ];

        this.capabilities = [
            'Arquitectura de software',
            'Revisión de código',
            'Selección de tecnologías',
            'Mejores prácticas de desarrollo',
            'Estrategias de testing',
            'Optimización de rendimiento'
        ];

        this.architecturePatterns = [
            'MVC (Model-View-Controller)',
            'MVP (Model-View-Presenter)', 
            'MVVM (Model-View-ViewModel)',
            'Component-Based Architecture',
            'Microservices',
            'Event-Driven Architecture',
            'Layered Architecture',
            'Hexagonal Architecture'
        ];

        this.developmentPrinciples = [
            'SOLID (Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion)',
            'DRY (Don\'t Repeat Yourself)',
            'KISS (Keep It Simple, Stupid)',
            'YAGNI (You Aren\'t Gonna Need It)',
            'Separation of Concerns',
            'Composition over Inheritance'
        ];
    }

    async processMessage(message, chatHistory) {
        const lowerMessage = message.toLowerCase();

        if (this.isArchitectureQuestion(lowerMessage)) {
            return this.provideArchitectureGuidance(message);
        } else if (this.isTechnologySelection(lowerMessage)) {
            return this.suggestTechnologies(message);
        } else if (this.isCodeReview(lowerMessage)) {
            return this.provideCodeReviewGuidance(message);
        } else if (this.isTestingQuestion(lowerMessage)) {
            return this.provideTestingGuidance(message);
        } else if (this.isProjectStructure(lowerMessage)) {
            return this.suggestProjectStructure(message);
        } else {
            return this.provideGeneralDevelopmentAdvice(message);
        }
    }

    isArchitectureQuestion(message) {
        return message.includes('arquitectura') || message.includes('architecture') ||
               message.includes('estructura') || message.includes('organizar') ||
               message.includes('diseño de sistema');
    }

    isTechnologySelection(message) {
        return message.includes('tecnología') || message.includes('framework') ||
               message.includes('biblioteca') || message.includes('herramienta') ||
               message.includes('elegir') || message.includes('recomendar');
    }

    isCodeReview(message) {
        return message.includes('código') || message.includes('revisar') ||
               message.includes('calidad') || message.includes('refactor') ||
               message.includes('mejores prácticas');
    }

    isTestingQuestion(message) {
        return message.includes('test') || message.includes('prueba') ||
               message.includes('testing') || message.includes('qa') ||
               message.includes('coverage');
    }

    isProjectStructure(message) {
        return message.includes('estructura') || message.includes('organización') ||
               message.includes('carpetas') || message.includes('archivos') ||
               message.includes('proyecto');
    }

    provideArchitectureGuidance(originalMessage) {
        const randomPattern = this.architecturePatterns[Math.floor(Math.random() * this.architecturePatterns.length)];
        
        return `🏗️ **Guía de Arquitectura de Software:**

Para tu consulta: "${originalMessage}"

**🎯 Consideraciones Clave:**

1. **Escalabilidad**
   - ¿El sistema necesita manejar crecimiento de usuarios/datos?
   - ¿Horizontal vs. Vertical scaling?

2. **Mantenibilidad**
   - ¿Qué tan fácil será modificar el código en el futuro?
   - ¿Separación de responsabilidades clara?

3. **Rendimiento**
   - ¿Cuáles son los requisitos de latencia/throughput?
   - ¿Caching strategies necesarias?

4. **Seguridad**
   - ¿Qué datos sensibles maneja?
   - ¿Autenticación/autorización requerida?

**📐 Patrón Recomendado:** ${randomPattern}

**🔧 Siguientes Pasos:**
1. Define los componentes principales
2. Identifica las interfaces entre componentes
3. Establece el flujo de datos
4. Considera las dependencias externas

¿Te gustaría que profundicemos en algún aspecto específico de la arquitectura?`;
    }

    suggestTechnologies(originalMessage) {
        return `🛠️ **Recomendaciones Tecnológicas:**

Basándome en: "${originalMessage}"

**🌐 Frontend:**
- **React**: Para UIs complejas e interactivas
- **Vue.js**: Curva de aprendizaje suave, gran ecosistema
- **Svelte**: Rendimiento optimizado, bundle size pequeño
- **Vanilla JS**: Para proyectos simples, máximo control

**⚙️ Backend:**
- **Node.js**: JavaScript full-stack, gran ecosistema NPM
- **Python (FastAPI/Django)**: Desarrollo rápido, IA/ML friendly
- **Go**: Alto rendimiento, concurrencia nativa
- **TypeScript**: Type safety, mejor developer experience

**🗄️ Base de Datos:**
- **PostgreSQL**: Relacional robusto, ACID compliant
- **MongoDB**: NoSQL flexible, schema dinámico
- **Redis**: In-memory, excelente para caching
- **SQLite**: Embebida, perfecta para prototipos

**☁️ Deployment:**
- **Vercel/Netlify**: Para aplicaciones estáticas/JAMstack
- **Docker + AWS/GCP**: Para aplicaciones containerizadas
- **Heroku**: Deployment simple, ideal para MVPs

**🔍 Criterios de Selección:**
1. Experiencia del equipo
2. Requisitos de rendimiento
3. Ecosistema y comunidad
4. Mantenimiento a largo plazo

¿Qué tipo de aplicación estás construyendo específicamente?`;
    }

    provideCodeReviewGuidance(originalMessage) {
        const randomPrinciple = this.developmentPrinciples[Math.floor(Math.random() * this.developmentPrinciples.length)];

        return `🔍 **Guía de Revisión de Código:**

**📋 Checklist Esencial:**

**1. Legibilidad y Claridad**
- [ ] Nombres de variables/funciones descriptivos
- [ ] Comentarios donde sea necesario (no obvio)
- [ ] Código autodocumentado
- [ ] Consistencia en estilo de código

**2. Funcionalidad**
- [ ] El código hace lo que dice que hace
- [ ] Manejo adecuado de casos edge
- [ ] Validación de inputs
- [ ] Gestión apropiada de errores

**3. Rendimiento**
- [ ] No hay operaciones innecesariamente costosas
- [ ] Uso eficiente de memoria
- [ ] Algoritmos apropiados para el tamaño del problema

**4. Seguridad**
- [ ] No hay secretos hardcodeados
- [ ] Validación y sanitización de inputs
- [ ] Manejo seguro de datos sensibles

**💡 Principio Destacado:** ${randomPrinciple}

**🎯 Para tu código específico:**
"${originalMessage}"

¿Hay algún aspecto particular del código que te preocupa o quieres que revisemos juntos?`;
    }

    provideTestingGuidance(originalMessage) {
        return `🧪 **Estrategia de Testing:**

**🏗️ Pirámide de Testing:**

**1. Unit Tests (Base - 70%)**
- Funciones individuales
- Casos edge y happy path
- Rápidos de ejecutar
- Feedback inmediato

**2. Integration Tests (Medio - 20%)**
- Interacción entre componentes
- APIs y servicios
- Base de datos
- Flujos de datos

**3. End-to-End Tests (Cima - 10%)**
- Flujos completos de usuario
- Interfaz real
- Escenarios críticos de negocio

**🛠️ Herramientas Recomendadas:**

**JavaScript/Node.js:**
- **Jest**: Unit testing, mocking, coverage
- **Cypress**: E2E testing, debugging visual
- **Testing Library**: Component testing, user-centric

**Python:**
- **pytest**: Flexible, plugins extensos
- **unittest**: Built-in, standard library
- **Selenium**: Browser automation

**🎯 Estrategia para tu proyecto:**
"${originalMessage}"

**📝 Plan de Testing:**
1. Identifica funciones críticas para unit tests
2. Define flujos de integración principales
3. Mapea user journeys para E2E tests
4. Establece métricas de coverage objetivo (80%+)

¿Qué tipo de testing necesitas implementar primero?`;
    }

    suggestProjectStructure(originalMessage) {
        return `📁 **Estructura de Proyecto Recomendada:**

**🌐 Para Web Application (Node.js/React):**
\`\`\`
proyecto/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas/rutas principales
│   ├── services/      # Lógica de negocio y APIs
│   ├── utils/         # Funciones helper
│   ├── hooks/         # Custom hooks (React)
│   └── styles/        # CSS/SCSS/styled-components
├── public/            # Assets estáticos
├── tests/             # Test files
├── docs/              # Documentación
├── config/            # Configuraciones
└── scripts/           # Scripts de build/deploy
\`\`\`

**🏗️ Principios de Organización:**

1. **Separación por Funcionalidad**
   - Agrupa archivos relacionados
   - Facilita encontrar y modificar código

2. **Estructura Escalable**
   - Fácil agregar nuevas features
   - Refactoring sin romper dependencias

3. **Convenciones Claras**
   - Nombres consistentes
   - Patrones predecibles

**🎯 Para tu proyecto específico:**
"${originalMessage}"

**📋 Checklist de Setup:**
- [ ] Configurar linting (ESLint/Prettier)
- [ ] Setup de testing framework
- [ ] Configurar build process
- [ ] Documentar convenciones en README
- [ ] Configurar CI/CD básico

¿Qué tipo de aplicación estás estructurando?`;
    }

    provideGeneralDevelopmentAdvice(originalMessage) {
        return `💻 **Consejo de Desarrollo General:**

Para tu consulta: "${originalMessage}"

**🚀 Mejores Prácticas Universales:**

1. **Comienza Simple**
   - MVP primero, optimiza después
   - No sobre-ingenierías desde el inicio

2. **Documentación como Código**
   - README claro y actualizado
   - Comentarios donde agreguen valor
   - Ejemplos de uso

3. **Control de Versiones**
   - Commits pequeños y frecuentes
   - Mensajes descriptivos
   - Branching strategy clara

4. **Automatización**
   - Tests automatizados
   - Linting y formatting
   - Deployment pipelines

**🎯 Workflow Recomendado:**
1. **Planifica** → Define requirements y arquitectura
2. **Prototipa** → Valida conceptos rápidamente
3. **Desarrolla** → Implementa iterativamente
4. **Testa** → Valida cada feature
5. **Refactoriza** → Mejora calidad continuamente
6. **Documenta** → Mantén docs actualizadas

**🔄 Pregunta de Reflexión:**
¿Cuál es el mayor desafío técnico que enfrentas actualmente?

¡Estoy aquí para ayudarte a resolverlo paso a paso!`;
    }
}