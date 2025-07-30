import { BaseAgent } from './BaseAgent.js';

/**
 * Agente especializado en creatividad y generación de ideas
 * Agent specialized in creativity and idea generation
 */
export class CreativeAgent extends BaseAgent {
    constructor(name = 'CreativeBot') {
        super(name, 'Especialista en creatividad, brainstorming y generación de ideas innovadoras');
        
        this.keywords = [
            'crear', 'creative', 'idea', 'innovar', 'diseño', 'design',
            'brainstorm', 'lluvia de ideas', 'concepto', 'concept',
            'inspiración', 'inspiration', 'arte', 'art', 'creativo'
        ];

        this.capabilities = [
            'Generación de ideas creativas',
            'Sesiones de brainstorming',
            'Desarrollo de conceptos',
            'Sugerencias de diseño',
            'Inspiración artística'
        ];

        this.creativePrompts = [
            '¿Qué tal si exploramos una perspectiva completamente diferente?',
            '¿Has considerado combinar elementos inesperados?',
            'Imaginemos que no hay limitaciones técnicas...',
            '¿Cómo abordaría esto alguien de un campo completamente diferente?',
            '¿Qué pasaría si invirtiéramos el problema?'
        ];

        this.ideationTechniques = [
            'SCAMPER (Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar, Reorganizar)',
            'Mapas mentales',
            'Técnica de los 6 sombreros para pensar',
            'Matriz de ideas forzadas',
            'Analogías y metáforas'
        ];
    }

    async processMessage(message, chatHistory) {
        const lowerMessage = message.toLowerCase();

        // Detectar el tipo de solicitud creativa
        if (this.isIdeaGeneration(lowerMessage)) {
            return this.generateIdeas(message);
        } else if (this.isBrainstorming(lowerMessage)) {
            return this.facilitateBrainstorming(message);
        } else if (this.isConceptDevelopment(lowerMessage)) {
            return this.developConcept(message);
        } else if (this.isDesignHelp(lowerMessage)) {
            return this.provideDesignGuidance(message);
        } else {
            return this.provideCreativeInspiration(message);
        }
    }

    isIdeaGeneration(message) {
        return message.includes('idea') || message.includes('crear') || 
               message.includes('generar') || message.includes('innovar');
    }

    isBrainstorming(message) {
        return message.includes('brainstorm') || message.includes('lluvia de ideas') ||
               message.includes('sesión') || message.includes('team');
    }

    isConceptDevelopment(message) {
        return message.includes('concepto') || message.includes('desarrollo') ||
               message.includes('elaborar') || message.includes('expandir');
    }

    isDesignHelp(message) {
        return message.includes('diseño') || message.includes('design') ||
               message.includes('interfaz') || message.includes('visual');
    }

    generateIdeas(originalMessage) {
        const randomPrompt = this.creativePrompts[Math.floor(Math.random() * this.creativePrompts.length)];
        const randomTechnique = this.ideationTechniques[Math.floor(Math.random() * this.ideationTechniques.length)];

        return `🎨 ¡Perfecto! Soy tu especialista en creatividad. Basándome en tu solicitud: "${originalMessage}"

💡 **Ideas iniciales:**
1. Enfoque minimalista: Simplificar al máximo y enfocarse en la esencia
2. Enfoque colaborativo: Hacer que múltiples usuarios contribuyan simultáneamente
3. Enfoque gamificado: Añadir elementos de juego para aumentar el engagement
4. Enfoque adaptativo: Que el sistema aprenda y evolucione con el uso

🧠 **Prompt creativo:** ${randomPrompt}

🛠️ **Técnica recomendada:** ${randomTechnique}

¿Te gustaría que profundicemos en alguna de estas direcciones o exploramos otras posibilidades?`;
    }

    facilitateBrainstorming(originalMessage) {
        return `🚀 ¡Excelente! Iniciemos una sesión de brainstorming. Aquí están las reglas:

📋 **Protocolo de Brainstorming:**
1. **No juzgar**: Todas las ideas son válidas inicialmente
2. **Cantidad sobre calidad**: Generemos muchas ideas primero
3. **Construir sobre ideas**: Toma ideas existentes y mejóralas
4. **Ser visual**: Piensa en imágenes, diagramas, prototipos

🎯 **Enfoque en:** ${originalMessage}

🔄 **Rondas de ideación:**
- **Ronda 1**: Ideas obvias y tradicionales
- **Ronda 2**: Ideas disruptivas y fuera de lo común
- **Ronda 3**: Combinaciones híbridas de las anteriores

💭 **Pregunta disparadora:** ¿Cómo podríamos...?

¡Comparte tu primera idea y construyamos sobre ella!`;
    }

    developConcept(originalMessage) {
        return `🔧 Desarrollemos tu concepto paso a paso:

**📝 Marco de Desarrollo de Concepto:**

1. **Definición del núcleo**
   - ¿Cuál es la esencia de tu idea?
   - ¿Qué problema específico resuelve?

2. **Audiencia objetivo**
   - ¿Para quién es esto?
   - ¿Qué necesidades específicas tienen?

3. **Propuesta de valor única**
   - ¿Qué hace que esto sea diferente?
   - ¿Por qué elegirían esto sobre alternativas?

4. **Ecosistema de implementación**
   - ¿Qué recursos necesitas?
   - ¿Cuáles son las dependencias?

Basándome en: "${originalMessage}"

¿Por cuál aspecto te gustaría comenzar? ¿O prefieres que sugiera un enfoque específico?`;
    }

    provideDesignGuidance(originalMessage) {
        return `🎨 **Guía de Diseño Creativo:**

Para tu proyecto relacionado con: "${originalMessage}"

**🌈 Principios de Diseño:**
1. **Simplicidad elegante**: Menos es más, pero con propósito
2. **Coherencia visual**: Mantén un lenguaje visual consistente
3. **Jerarquía clara**: Guía la atención del usuario naturalmente
4. **Accesibilidad**: Diseña para todos los usuarios

**🎭 Inspiración de estilos:**
- **Minimalista**: Espacios en blanco, tipografía limpia, colores suaves
- **Brutalista**: Formas geométricas, contrastes fuertes, tipografía bold
- **Neumorfismo**: Elementos suaves, sombras sutiles, interfaz táctil
- **Glassmorphism**: Transparencias, efectos de cristal, profundidad

**🚀 Siguiente paso:** ¿Qué aspecto del diseño quieres explorar primero? ¿Visual, interacción, o experiencia de usuario?`;
    }

    provideCreativeInspiration(originalMessage) {
        const inspiration = [
            'Las mejores ideas surgen cuando conectamos conceptos aparentemente no relacionados',
            'La creatividad florece en las restricciones - ¿qué limitaciones podrían ser ventajas?',
            'Piensa como un niño: ¿qué preguntarías si no supieras las "reglas"?',
            'La innovación ocurre en las intersecciones entre disciplinas',
            'El fracaso es solo iteración con otro nombre'
        ];

        const randomInspiration = inspiration[Math.floor(Math.random() * inspiration.length)];

        return `✨ **Inspiración Creativa:**

${randomInspiration}

Para tu consulta: "${originalMessage}"

🔮 **Ejercicio rápido:** Describe tu proyecto como si fuera:
- Una receta de cocina
- Una sinfonía musical
- Un ecosistema natural
- Un juego de mesa

Estas analogías pueden revelar nuevas perspectivas y soluciones inesperadas.

💫 ¿Hay alguna dirección específica en la que quieras que enfoque mi creatividad?`;
    }
}