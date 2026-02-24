import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: event-catering
 * Table prefix: event_catering_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("event_catering_events").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("event_catering_events"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("event_catering_events", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
