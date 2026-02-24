import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: warehouse-shipping
 * Table prefix: warehouse_shipping_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("warehouse_shipping_shipments").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("warehouse_shipping_shipments"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("warehouse_shipping_shipments", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
