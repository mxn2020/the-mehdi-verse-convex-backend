import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: content-planning
 * Table prefix: content_planning_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("content_planning_items").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("content_planning_items"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("content_planning_items", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
