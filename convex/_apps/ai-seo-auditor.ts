import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-seo-auditor
 * Table prefix: ai_seo_auditor_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_seo_auditor_audits").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_seo_auditor_audits"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_seo_auditor_audits", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
