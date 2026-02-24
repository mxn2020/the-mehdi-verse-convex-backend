import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: freelancer-portal
 * Table prefix: freelancer_portal_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("freelancer_portal_projects").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("freelancer_portal_projects"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("freelancer_portal_projects", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
