import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: inventory-management
 * Table prefix: inventory_management_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("inventory_management_items").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("inventory_management_items"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("inventory_management_items", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
