import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: ai-appointment-booking
 * Table prefix: ai_appointment_booking_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("ai_appointment_booking_appointments").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("ai_appointment_booking_appointments"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("ai_appointment_booking_appointments", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
