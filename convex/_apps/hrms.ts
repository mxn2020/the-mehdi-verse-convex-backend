import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: hrms
 * Table prefix: hrms_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("hrms_employees").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("hrms_employees"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("hrms_employees", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
