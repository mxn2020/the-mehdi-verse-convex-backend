import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: real-estate-listing
 * Table prefix: real_estate_listing_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("real_estate_listing_listings").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("real_estate_listing_listings"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("real_estate_listing_listings", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
