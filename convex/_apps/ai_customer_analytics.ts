import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-customer-analytics
 * Table prefix: ai_customer_analytics_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_customer_analytics_events").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_customer_analytics_events"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_customer_analytics_events", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
