import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: personal-trainer
 * Table prefix: personal_trainer_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("personal_trainer_clients").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("personal_trainer_clients"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("personal_trainer_clients", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
