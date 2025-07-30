/**
 * Clase base para todos los agentes
 * Base class for all agents
 */
export class BaseAgent {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.capabilities = [];
        this.keywords = [];
    }

    /**
     * Determinar si este agente puede manejar un mensaje específico
     * Determine if this agent can handle a specific message
     */
    canHandle(message) {
        return this.keywords.some(keyword => 
            message.includes(keyword.toLowerCase())
        );
    }

    /**
     * Procesar un mensaje (debe ser implementado por cada agente)
     * Process a message (should be implemented by each agent)
     */
    async processMessage(message, chatHistory) {
        throw new Error('processMessage debe ser implementado por cada agente');
    }

    /**
     * Obtener capacidades del agente
     * Get agent capabilities
     */
    getCapabilities() {
        return this.capabilities;
    }

    /**
     * Agregar una capacidad al agente
     * Add a capability to the agent
     */
    addCapability(capability) {
        this.capabilities.push(capability);
    }

    /**
     * Respuesta genérica cuando no se puede procesar un mensaje
     * Generic response when a message cannot be processed
     */
    getDefaultResponse() {
        return `Lo siento, como ${this.name}, no estoy seguro de cómo ayudarte con eso. ¿Podrías ser más específico?`;
    }
}