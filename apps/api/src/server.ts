import Fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from '@plant-diary/api-contract';

const app = Fastify({ logger: true });

await app.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter },
});

await app.listen({ port: 3000, host: '0.0.0.0' });