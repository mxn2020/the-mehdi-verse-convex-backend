import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: social-media-scheduler
 * Table prefix: social_media_scheduler_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("social_media_scheduler_posts").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("social_media_scheduler_posts"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("social_media_scheduler_posts", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
