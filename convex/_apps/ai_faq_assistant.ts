import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-faq-assistant
 * Table prefix: ai_faq_assistant_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_faq_assistant_faqs").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_faq_assistant_faqs"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_faq_assistant_faqs", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
