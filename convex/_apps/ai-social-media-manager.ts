import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-social-media-manager
 * Table prefix: ai_social_media_manager_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_social_media_manager_posts").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_social_media_manager_posts"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_social_media_manager_posts", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
