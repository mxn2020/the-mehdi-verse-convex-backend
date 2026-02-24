import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-personal-assistant
 * Table prefix: ai_personal_assistant_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_personal_assistant_tasks").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_personal_assistant_tasks"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_personal_assistant_tasks", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
