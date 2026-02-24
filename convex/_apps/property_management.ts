import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: property-management
 * Table prefix: property_management_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("property_management_properties").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("property_management_properties"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("property_management_properties", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
