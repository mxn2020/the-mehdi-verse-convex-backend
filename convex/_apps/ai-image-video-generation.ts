import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-image-video-generation
 * Table prefix: ai_image_video_generation_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_image_video_generation_jobs").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_image_video_generation_jobs"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_image_video_generation_jobs", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
