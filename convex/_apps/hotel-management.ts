import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: hotel-management
 * Table prefix: hotel_management_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("hotel_management_rooms").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("hotel_management_rooms"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("hotel_management_rooms", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
