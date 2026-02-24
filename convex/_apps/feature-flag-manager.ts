import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: feature-flag-manager
 * Table prefix: feature_flag_manager_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("feature_flag_manager_flags").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("feature_flag_manager_flags"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("feature_flag_manager_flags", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
