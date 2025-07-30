import { test, describe } from 'node:test';
import { strict as assert } from 'node:assert';
import { AgentChatSpace } from '../src/AgentChatSpace.js';
import { CreativeAgent } from '../src/agents/CreativeAgent.js';
import { DevelopmentAgent } from '../src/agents/DevelopmentAgent.js';

describe('AgentChatSpace', () => {
    test('should create an empty chat space', () => {
        const chatSpace = new AgentChatSpace();
        assert.equal(chatSpace.agents.size, 0);
        assert.equal(chatSpace.chatHistory.length, 0);
        assert.equal(chatSpace.isRunning, false);
    });

    test('should add agents to the chat space', () => {
        const chatSpace = new AgentChatSpace();
        const creativeAgent = new CreativeAgent('TestCreative');
        const devAgent = new DevelopmentAgent('TestDev');

        chatSpace.addAgent(creativeAgent);
        chatSpace.addAgent(devAgent);

        assert.equal(chatSpace.agents.size, 2);
        assert.equal(chatSpace.agents.has('TestCreative'), true);
        assert.equal(chatSpace.agents.has('TestDev'), true);
    });

    test('should remove agents from the chat space', () => {
        const chatSpace = new AgentChatSpace();
        const creativeAgent = new CreativeAgent('TestCreative');

        chatSpace.addAgent(creativeAgent);
        assert.equal(chatSpace.agents.size, 1);

        chatSpace.removeAgent('TestCreative');
        assert.equal(chatSpace.agents.size, 0);
    });

    test('should select appropriate agent based on message content', () => {
        const chatSpace = new AgentChatSpace();
        const creativeAgent = new CreativeAgent('TestCreative');
        const devAgent = new DevelopmentAgent('TestDev');

        chatSpace.addAgent(creativeAgent);
        chatSpace.addAgent(devAgent);

        // Test creative agent selection
        const selectedCreative = chatSpace.selectAgent('necesito una idea creativa');
        assert.equal(selectedCreative.name, 'TestCreative');

        // Test development agent selection
        const selectedDev = chatSpace.selectAgent('necesito ayuda con código');
        assert.equal(selectedDev.name, 'TestDev');
    });

    test('should process messages and add to history', async () => {
        const chatSpace = new AgentChatSpace();
        const creativeAgent = new CreativeAgent('TestCreative');
        chatSpace.addAgent(creativeAgent);

        await chatSpace.processMessage('dame una idea');

        assert.equal(chatSpace.chatHistory.length, 2); // User message + agent response
        assert.equal(chatSpace.chatHistory[0].sender, 'Usuario');
        assert.equal(chatSpace.chatHistory[0].content, 'dame una idea');
        assert.equal(chatSpace.chatHistory[1].sender, 'TestCreative');
    });

    test('should clear chat history', () => {
        const chatSpace = new AgentChatSpace();
        chatSpace.chatHistory = [
            { timestamp: '2023-01-01', sender: 'test', content: 'test', type: 'user' }
        ];

        chatSpace.clearHistory();
        assert.equal(chatSpace.chatHistory.length, 0);
    });
});