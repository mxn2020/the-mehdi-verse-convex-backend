import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-call-center
 * Table prefix: ai_call_center_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_call_center_calls").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_call_center_calls"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_call_center_calls", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
