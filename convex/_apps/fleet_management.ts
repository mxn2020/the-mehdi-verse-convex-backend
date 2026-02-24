import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: fleet-management
 * Table prefix: fleet_management_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("fleet_management_vehicles").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("fleet_management_vehicles"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("fleet_management_vehicles", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
