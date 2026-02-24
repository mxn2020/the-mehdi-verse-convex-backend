import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: restaurant-management
 * Table prefix: restaurant_management_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("restaurant_management_reservations").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("restaurant_management_reservations"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("restaurant_management_reservations", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
