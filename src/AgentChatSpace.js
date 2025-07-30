import readline from 'readline';

/**
 * Espacio de chat donde múltiples agentes pueden interactuar
 * Chat space where multiple agents can interact
 */
export class AgentChatSpace {
    constructor() {
        this.agents = new Map();
        this.chatHistory = [];
        this.isRunning = false;
        this.rl = null;
    }

    /**
     * Agregar un agente al espacio de chat
     * Add an agent to the chat space
     */
    addAgent(agent) {
        this.agents.set(agent.name, agent);
        console.log(`✅ Agente ${agent.name} agregado al espacio de chat`);
    }

    /**
     * Remover un agente del espacio de chat
     * Remove an agent from the chat space
     */
    removeAgent(agentName) {
        if (this.agents.delete(agentName)) {
            console.log(`❌ Agente ${agentName} removido del espacio de chat`);
        }
    }

    /**
     * Procesar un mensaje en el espacio de chat
     * Process a message in the chat space
     */
    async processMessage(userInput) {
        const timestamp = new Date().toISOString();
        const message = {
            timestamp,
            sender: 'Usuario',
            content: userInput,
            type: 'user'
        };

        this.chatHistory.push(message);
        console.log(`\n[${timestamp}] Usuario: ${userInput}`);

        // Determinar qué agente debe responder
        const selectedAgent = this.selectAgent(userInput);
        
        if (selectedAgent) {
            const response = await selectedAgent.processMessage(userInput, this.chatHistory);
            const agentMessage = {
                timestamp: new Date().toISOString(),
                sender: selectedAgent.name,
                content: response,
                type: 'agent'
            };
            
            this.chatHistory.push(agentMessage);
            console.log(`[${agentMessage.timestamp}] ${selectedAgent.name}: ${response}`);
        } else {
            console.log('❓ No hay agentes disponibles para procesar este mensaje');
        }
    }

    /**
     * Seleccionar el agente más apropiado para responder
     * Select the most appropriate agent to respond
     */
    selectAgent(message) {
        // Lógica simple de selección de agente basada en palabras clave
        const lowerMessage = message.toLowerCase();
        
        for (const [name, agent] of this.agents) {
            if (agent.canHandle(lowerMessage)) {
                return agent;
            }
        }

        // Si ningún agente específico puede manejar el mensaje, usar el primero disponible
        return this.agents.values().next().value;
    }

    /**
     * Mostrar ayuda disponible
     * Show available help
     */
    showHelp() {
        console.log('\n📋 Comandos disponibles / Available commands:');
        console.log('  help - Mostrar esta ayuda / Show this help');
        console.log('  agents - Listar agentes disponibles / List available agents');
        console.log('  history - Mostrar historial de chat / Show chat history');
        console.log('  clear - Limpiar historial / Clear history');
        console.log('  exit - Salir del programa / Exit program');
        console.log('\n💡 Simplemente escribe tu mensaje para interactuar con los agentes');
        console.log('💡 Just type your message to interact with the agents\n');
    }

    /**
     * Mostrar agentes disponibles
     * Show available agents
     */
    showAgents() {
        console.log('\n🤖 Agentes disponibles / Available agents:');
        for (const [name, agent] of this.agents) {
            console.log(`  - ${name}: ${agent.description}`);
        }
        console.log('');
    }

    /**
     * Mostrar historial de chat
     * Show chat history
     */
    showHistory() {
        console.log('\n📜 Historial de chat / Chat history:');
        this.chatHistory.forEach(msg => {
            console.log(`[${msg.timestamp}] ${msg.sender}: ${msg.content}`);
        });
        console.log('');
    }

    /**
     * Limpiar historial
     * Clear history
     */
    clearHistory() {
        this.chatHistory = [];
        console.log('🧹 Historial limpiado / History cleared\n');
    }

    /**
     * Iniciar el espacio de chat interactivo
     * Start the interactive chat space
     */
    async start() {
        console.log('\n🎯 Espacio de Chat de Agentes Iniciado / Agent Chat Space Started');
        console.log('Escribe "help" para ver los comandos disponibles / Type "help" to see available commands\n');

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '💬 > '
        });

        this.isRunning = true;

        this.rl.prompt();

        this.rl.on('line', async (input) => {
            const command = input.trim();

            if (command === 'exit') {
                this.stop();
                return;
            }

            switch (command) {
                case 'help':
                    this.showHelp();
                    break;
                case 'agents':
                    this.showAgents();
                    break;
                case 'history':
                    this.showHistory();
                    break;
                case 'clear':
                    this.clearHistory();
                    break;
                case '':
                    // Línea vacía, no hacer nada
                    break;
                default:
                    await this.processMessage(command);
                    break;
            }

            if (this.isRunning) {
                this.rl.prompt();
            }
        });

        this.rl.on('close', () => {
            this.stop();
        });
    }

    /**
     * Detener el espacio de chat
     * Stop the chat space
     */
    stop() {
        this.isRunning = false;
        if (this.rl) {
            this.rl.close();
        }
        console.log('\n👋 Espacio de Chat de Agentes Detenido / Agent Chat Space Stopped');
        process.exit(0);
    }
}