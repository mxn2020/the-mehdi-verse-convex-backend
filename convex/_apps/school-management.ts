import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: school-management
 * Table prefix: school_management_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("school_management_students").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("school_management_students"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("school_management_students", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
