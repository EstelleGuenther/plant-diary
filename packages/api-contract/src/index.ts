import { z } from 'zod';
import { router, publicProcedure } from './trpc.js';

export const appRouter = router({
  health: publicProcedure.query(() => ({ ok: true })),

  plant: router({
    greet: publicProcedure
      .input(z.object({ name: z.string().min(1) }))
      .query(({ input }) => `Hello ${input.name}`),
  }),
});

export type AppRouter = typeof appRouter;