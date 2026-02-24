import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-email-campaigns
 * Table prefix: ai_email_campaigns_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_email_campaigns_campaigns").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_email_campaigns_campaigns"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_email_campaigns_campaigns", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
