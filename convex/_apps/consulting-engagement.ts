import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: consulting-engagement
 * Table prefix: consulting_engagement_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("consulting_engagement_engagements").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("consulting_engagement_engagements"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("consulting_engagement_engagements", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
