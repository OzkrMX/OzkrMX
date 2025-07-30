import { AgentChatSpace } from './AgentChatSpace.js';
import { CreativeAgent } from './agents/CreativeAgent.js';
import { DevelopmentAgent } from './agents/DevelopmentAgent.js';

/**
 * Punto de entrada principal para el espacio de chat de agentes
 * Main entry point for the agent chat space
 */
async function main() {
    console.log('🚀 Iniciando Espacio de Chat de Agentes / Starting Agent Chat Space');
    
    // Crear el espacio de chat
    const chatSpace = new AgentChatSpace();
    
    // Agregar agentes especializados
    const creativeAgent = new CreativeAgent('CreativeBot');
    const devAgent = new DevelopmentAgent('DevBot');
    
    chatSpace.addAgent(creativeAgent);
    chatSpace.addAgent(devAgent);
    
    // Iniciar la interfaz de chat
    await chatSpace.start();
}

// Manejar errores globales
process.on('uncaughtException', (error) => {
    console.error('❌ Error no capturado:', error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Promesa rechazada no manejada:', reason);
    process.exit(1);
});

// Ejecutar la aplicación
main().catch(console.error);