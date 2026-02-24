import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-fraud-detection
 * Table prefix: ai_fraud_detection_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_fraud_detection_alerts").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_fraud_detection_alerts"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_fraud_detection_alerts", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
