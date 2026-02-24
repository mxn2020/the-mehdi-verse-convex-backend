import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-voice-agent
 * Table prefix: ai_voice_agent_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_voice_agent_sessions").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_voice_agent_sessions"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_voice_agent_sessions", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
