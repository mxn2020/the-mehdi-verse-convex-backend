import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: project-task-manager
 * Table prefix: project_task_manager_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("project_task_manager_tasks").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("project_task_manager_tasks"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("project_task_manager_tasks", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
