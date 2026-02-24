import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: pharmacy
 * Table prefix: pharmacy_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("pharmacy_products").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("pharmacy_products"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("pharmacy_products", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
