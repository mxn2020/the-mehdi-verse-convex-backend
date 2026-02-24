import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: crm
 * Table prefix: crm_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("crm_contacts").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("crm_contacts"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("crm_contacts", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
