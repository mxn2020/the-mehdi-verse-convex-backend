import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: law-firm-case
 * Table prefix: law_firm_case_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("law_firm_case_cases").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("law_firm_case_cases"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("law_firm_case_cases", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
