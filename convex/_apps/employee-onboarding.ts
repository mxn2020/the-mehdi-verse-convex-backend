import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: employee-onboarding
 * Table prefix: employee_onboarding_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("employee_onboarding_employees").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("employee_onboarding_employees"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("employee_onboarding_employees", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
