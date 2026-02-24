import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: student-portfolio
 * Table prefix: student_portfolio_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("student_portfolio_projects").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("student_portfolio_projects"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("student_portfolio_projects", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
