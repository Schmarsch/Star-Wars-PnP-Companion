import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const characterRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.character.findMany({
      where: {
        userId: ctx.session?.user.id,
      },
    });
  }),
});
