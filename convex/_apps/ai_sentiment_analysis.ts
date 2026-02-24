import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-sentiment-analysis
 * Table prefix: ai_sentiment_analysis_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_sentiment_analysis_analyses").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_sentiment_analysis_analyses"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_sentiment_analysis_analyses", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
