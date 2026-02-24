import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: construction-management
 * Table prefix: construction_management_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("construction_management_projects").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("construction_management_projects"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("construction_management_projects", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
