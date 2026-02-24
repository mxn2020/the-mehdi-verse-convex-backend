import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: procurement
 * Table prefix: procurement_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("procurement_orders").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("procurement_orders"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("procurement_orders", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
