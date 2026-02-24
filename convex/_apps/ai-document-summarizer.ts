import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-document-summarizer
 * Table prefix: ai_document_summarizer_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_document_summarizer_documents").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_document_summarizer_documents"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_document_summarizer_documents", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
