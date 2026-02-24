import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: sales-analytics
 * Table prefix: sales_analytics_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("sales_analytics_metrics").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("sales_analytics_metrics"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("sales_analytics_metrics", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
