import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: online-course-lms
 * Table prefix: online_course_lms_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("online_course_lms_courses").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("online_course_lms_courses"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("online_course_lms_courses", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
