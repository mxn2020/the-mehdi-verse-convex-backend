import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-sales-assistant
 * Table prefix: ai_sales_assistant_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_sales_assistant_leads").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_sales_assistant_leads"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_sales_assistant_leads", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
