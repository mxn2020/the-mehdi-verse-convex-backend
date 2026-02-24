import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { auth } from "./auth";

/**
 * Get the current authenticated user's profile.
 * Joins the auth `users` table with `user_profiles` for extended data.
 */
export const viewer = query({
    args: {},
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);
        if (!userId) return null;

        const user = await ctx.db.get(userId);
        if (!user) return null;

        const profile = await ctx.db
            .query("user_profiles")
            .withIndex("by_userId", (q) => q.eq("userId", userId))
            .unique();

        let avatarUrl = null;
        if (profile?.avatarStorageId) {
            avatarUrl = await ctx.storage.getUrl(profile.avatarStorageId);
        }

        return {
            _id: user._id,
            email: user.email ?? "",
            name: profile?.name ?? "",
            bio: profile?.bio ?? "",
            avatarUrl,
            avatarStorageId: profile?.avatarStorageId,
        };
    },
});

/**
 * Update the current user's profile (name, bio, avatar).
 */
export const updateProfile = mutation({
    args: {
        name: v.string(),
        bio: v.optional(v.string()),
        avatarStorageId: v.optional(v.id("_storage")),
    },
    handler: async (ctx, args) => {
        const userId = await auth.getUserId(ctx);
        if (!userId) throw new Error("Unauthenticated");

        const existing = await ctx.db
            .query("user_profiles")
            .withIndex("by_userId", (q) => q.eq("userId", userId))
            .unique();

        if (existing) {
            await ctx.db.patch(existing._id, {
                name: args.name,
                bio: args.bio,
                avatarStorageId: args.avatarStorageId ?? existing.avatarStorageId,
                updatedAt: Date.now(),
            });
        } else {
            await ctx.db.insert("user_profiles", {
                userId,
                name: args.name,
                bio: args.bio,
                avatarStorageId: args.avatarStorageId,
                updatedAt: Date.now(),
            });
        }
    },
});

/**
 * Generate a short-lived upload URL for Convex file storage.
 */
export const generateUploadUrl = mutation({
    args: {},
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);
        if (!userId) throw new Error("Unauthenticated");
        return await ctx.storage.generateUploadUrl();
    },
});
