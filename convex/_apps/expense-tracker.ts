import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: expense-tracker
 * Table prefix: expense_tracker_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("expense_tracker_expenses").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("expense_tracker_expenses"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("expense_tracker_expenses", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
