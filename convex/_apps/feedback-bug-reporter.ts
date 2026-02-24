import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: feedback-bug-reporter
 * Table prefix: feedback_bug_reporter_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("feedback_bug_reporter_reports").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("feedback_bug_reporter_reports"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("feedback_bug_reporter_reports", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
