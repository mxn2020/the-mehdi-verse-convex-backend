import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: appointment-booking
 * Table prefix: appointment_booking_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("appointment_booking_appointments").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("appointment_booking_appointments"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("appointment_booking_appointments", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
