import { exampleRouter } from "y/server/api/routers/example";
import { createTRPCRouter } from "y/server/api/trpc";
import { topicRouter } from "./routers/topic";
import { noteRouter } from "./routers/note";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  topicRouter:topicRouter,  
  noteRouter : noteRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
