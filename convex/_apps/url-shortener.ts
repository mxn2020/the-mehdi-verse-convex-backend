import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: url-shortener
 * Table prefix: url_shortener_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("url_shortener_urls").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("url_shortener_urls"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("url_shortener_urls", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
