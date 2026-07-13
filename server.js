const fastify = require('fastify');

function build(opts = {}) {
    const server = fastify(opts);

    // Health endpoint used by nullplatform scopes for readiness/liveness checks.
    server.get('/health', async () => {
        return { status: 'ok' };
    });

    // Root endpoint — replace with your own API routes.
    server.get('/', async () => {
        return { message: 'Hello from the Nullplatform API Starter Kit' };
    });

    return server;
}

module.exports = build;
