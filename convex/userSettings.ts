import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { auth } from "./auth";

/**
 * Get the current user's settings.
 */
export const get = query({
    args: {},
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);
        if (!userId) return null;

        const settings = await ctx.db
            .query("user_settings")
            .withIndex("by_userId", (q) => q.eq("userId", userId))
            .unique();

        return {
            theme: settings?.theme ?? "dark",
            language: settings?.language ?? "en",
            emailNotifications: settings?.emailNotifications ?? true,
        };
    },
});

/**
 * Update the current user's settings (upsert).
 */
export const update = mutation({
    args: {
        theme: v.optional(v.string()),
        language: v.optional(v.string()),
        emailNotifications: v.optional(v.boolean()),
    },
    handler: async (ctx, args) => {
        const userId = await auth.getUserId(ctx);
        if (!userId) throw new Error("Unauthenticated");

        const existing = await ctx.db
            .query("user_settings")
            .withIndex("by_userId", (q) => q.eq("userId", userId))
            .unique();

        const payload = {
            ...(args.theme !== undefined && { theme: args.theme }),
            ...(args.language !== undefined && { language: args.language }),
            ...(args.emailNotifications !== undefined && {
                emailNotifications: args.emailNotifications,
            }),
            updatedAt: Date.now(),
        };

        if (existing) {
            await ctx.db.patch(existing._id, payload);
        } else {
            await ctx.db.insert("user_settings", {
                userId,
                theme: args.theme ?? "dark",
                language: args.language ?? "en",
                emailNotifications: args.emailNotifications ?? true,
                updatedAt: Date.now(),
            });
        }
    },
});
