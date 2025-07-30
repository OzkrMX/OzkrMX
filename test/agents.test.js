import { test, describe } from 'node:test';
import { strict as assert } from 'node:assert';
import { CreativeAgent } from '../src/agents/CreativeAgent.js';
import { DevelopmentAgent } from '../src/agents/DevelopmentAgent.js';

describe('CreativeAgent', () => {
    test('should create creative agent with correct properties', () => {
        const agent = new CreativeAgent('TestCreative');
        
        assert.equal(agent.name, 'TestCreative');
        assert.ok(agent.description.includes('creatividad'));
        assert.ok(agent.keywords.includes('crear'));
        assert.ok(agent.capabilities.includes('Generación de ideas creativas'));
    });

    test('should handle creative messages', () => {
        const agent = new CreativeAgent('TestCreative');
        
        assert.equal(agent.canHandle('necesito una idea creativa'), true);
        assert.equal(agent.canHandle('crear algo nuevo'), true);
        assert.equal(agent.canHandle('brainstorm session'), true);
        assert.equal(agent.canHandle('ayuda con código'), false);
    });

    test('should process idea generation messages', async () => {
        const agent = new CreativeAgent('TestCreative');
        const response = await agent.processMessage('necesito generar ideas', []);
        
        assert.ok(response.includes('💡'));
        assert.ok(response.includes('Ideas iniciales'));
    });

    test('should process brainstorming messages', async () => {
        const agent = new CreativeAgent('TestCreative');
        const response = await agent.processMessage('hagamos brainstorming', []);
        
        assert.ok(response.includes('🚀'));
        assert.ok(response.includes('Protocolo de Brainstorming'));
    });
});

describe('DevelopmentAgent', () => {
    test('should create development agent with correct properties', () => {
        const agent = new DevelopmentAgent('TestDev');
        
        assert.equal(agent.name, 'TestDev');
        assert.ok(agent.description.includes('desarrollo'));
        assert.ok(agent.keywords.includes('código'));
        assert.ok(agent.capabilities.includes('Arquitectura de software'));
    });

    test('should handle development messages', () => {
        const agent = new DevelopmentAgent('TestDev');
        
        assert.equal(agent.canHandle('ayuda con código'), true);
        assert.equal(agent.canHandle('arquitectura de software'), true);
        assert.equal(agent.canHandle('testing strategy'), true);
        assert.equal(agent.canHandle('idea creativa'), false);
    });

    test('should process architecture questions', async () => {
        const agent = new DevelopmentAgent('TestDev');
        const response = await agent.processMessage('necesito ayuda con arquitectura', []);
        
        assert.ok(response.includes('🏗️'));
        assert.ok(response.includes('Arquitectura de Software'));
    });

    test('should process technology selection questions', async () => {
        const agent = new DevelopmentAgent('TestDev');
        const response = await agent.processMessage('qué tecnología recomiendas', []);
        
        assert.ok(response.includes('🛠️'));
        assert.ok(response.includes('Recomendaciones Tecnológicas'));
    });
});