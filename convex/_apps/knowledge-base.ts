import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: knowledge-base
 * Table prefix: knowledge_base_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("knowledge_base_articles").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("knowledge_base_articles"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("knowledge_base_articles", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
