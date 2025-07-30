import { AgentChatSpace } from '../src/AgentChatSpace.js';
import { CreativeAgent } from '../src/agents/CreativeAgent.js';
import { DevelopmentAgent } from '../src/agents/DevelopmentAgent.js';

/**
 * Ejemplo de uso programático del espacio de chat
 * Example of programmatic usage of the chat space
 */
async function exampleUsage() {
    console.log('🎯 Ejemplo de Uso del Espacio de Chat / Chat Space Usage Example\n');

    // Crear el espacio de chat
    const chatSpace = new AgentChatSpace();
    
    // Crear y agregar agentes
    const creativeAgent = new CreativeAgent('CreativeBot');
    const devAgent = new DevelopmentAgent('DevBot');
    
    chatSpace.addAgent(creativeAgent);
    chatSpace.addAgent(devAgent);

    // Simular conversaciones
    console.log('📝 Simulando conversaciones / Simulating conversations:\n');

    // Ejemplo 1: Consulta creativa
    console.log('🎨 Ejemplo 1: Consulta Creativa');
    await chatSpace.processMessage('necesito ideas para una app de productividad');
    
    console.log('\n' + '='.repeat(80) + '\n');

    // Ejemplo 2: Consulta técnica
    console.log('💻 Ejemplo 2: Consulta Técnica');
    await chatSpace.processMessage('qué arquitectura me recomiendas para una aplicación web escalable');
    
    console.log('\n' + '='.repeat(80) + '\n');

    // Ejemplo 3: Brainstorming
    console.log('🚀 Ejemplo 3: Sesión de Brainstorming');
    await chatSpace.processMessage('hagamos brainstorming para mejorar la experiencia de usuario');
    
    console.log('\n' + '='.repeat(80) + '\n');

    // Mostrar estadísticas
    console.log('📊 Estadísticas de la Sesión:');
    console.log(`- Agentes activos: ${chatSpace.agents.size}`);
    console.log(`- Mensajes intercambiados: ${chatSpace.chatHistory.length}`);
    console.log(`- Agentes disponibles: ${Array.from(chatSpace.agents.keys()).join(', ')}`);

    console.log('\n✅ Ejemplo completado. Ejecuta "npm start" para usar la interfaz interactiva.');
}

// Ejecutar el ejemplo si este archivo se ejecuta directamente
if (process.argv[1] === new URL(import.meta.url).pathname) {
    exampleUsage().catch(console.error);
}

export { exampleUsage };