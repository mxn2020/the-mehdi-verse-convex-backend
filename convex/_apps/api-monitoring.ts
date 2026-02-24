import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: api-monitoring
 * Table prefix: api_monitoring_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("api_monitoring_endpoints").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("api_monitoring_endpoints"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("api_monitoring_endpoints", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
