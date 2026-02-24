import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-chatbot
 * Table prefix: ai_chatbot_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_chatbot_messages").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_chatbot_messages"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_chatbot_messages", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
