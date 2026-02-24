import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: documentation-generator
 * Table prefix: documentation_generator_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("documentation_generator_docs").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("documentation_generator_docs"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("documentation_generator_docs", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
