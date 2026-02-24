// v removed
import { query } from "./_generated/server";
import { auth } from "./auth";

/**
 * Get the current user's subscription status.
 * Returns a default "Free" plan if no subscription exists yet.
 */
export const getSubscription = query({
    args: {},
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);
        if (!userId) return null;

        const sub = await ctx.db
            .query("subscriptions")
            .withIndex("by_userId", (q) => q.eq("userId", userId))
            .unique();

        if (sub) return sub;

        // Default mock subscription for new users
        return {
            plan: "free",
            status: "active",
            currentPeriodEnd: null,
        };
    },
});

/**
 * Get the current user's invoice history.
 */
export const listInvoices = query({
    args: {},
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);
        if (!userId) return [];

        return await ctx.db
            .query("invoices")
            .withIndex("by_userId", (q) => q.eq("userId", userId))
            .order("desc")
            .collect();
    },
});
