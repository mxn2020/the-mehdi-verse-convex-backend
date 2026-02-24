import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: shift-schedule-planner
 * Table prefix: shift_schedule_planner_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("shift_schedule_planner_shifts").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("shift_schedule_planner_shifts"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("shift_schedule_planner_shifts", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
