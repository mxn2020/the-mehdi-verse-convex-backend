import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: doctor-clinic
 * Table prefix: doctor_clinic_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("doctor_clinic_patients").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("doctor_clinic_patients"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("doctor_clinic_patients", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
