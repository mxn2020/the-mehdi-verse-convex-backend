import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Stub functions for: invoice-billing
 * Table prefix: invoice_billing_
 */

export const list = query({
  args: {},
  returns: v.any(),
  handler: async (ctx) => {
    return await ctx.db.query("invoice_billing_invoices").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    data: v.any(),
  },
  returns: v.id("invoice_billing_invoices"),
  handler: async (ctx, { data }) => {
    return await ctx.db.insert("invoice_billing_invoices", {
      ...data,
      createdAt: Date.now(),
    });
  },
});
