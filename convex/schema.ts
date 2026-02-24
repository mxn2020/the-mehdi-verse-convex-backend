import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

/**
 * Shared Convex schema for all The Mehdi Verse apps.
 *
 * Tables are namespaced with app prefixes (e.g. crm_contacts, crm_deals)
 * to keep all apps isolated within a single deployment.
 *
 * Auth tables are shared across all apps via @convex-dev/auth.
 * Each app section starts with a single stub table.
 * Add more tables as you implement each app.
 */
export default defineSchema({
    // ─── Auth (shared across all apps) ─────────────────────────
    ...authTables,

    // ─── User Profiles & Settings (shared) ───────────────────────
    user_profiles: defineTable({
        userId: v.id("users"),
        name: v.optional(v.string()),
        bio: v.optional(v.string()),
        avatarStorageId: v.optional(v.id("_storage")),
        updatedAt: v.number(),
    }).index("by_userId", ["userId"]),

    user_settings: defineTable({
        userId: v.id("users"),
        theme: v.optional(v.string()),
        language: v.optional(v.string()),
        emailNotifications: v.optional(v.boolean()),
        updatedAt: v.number(),
    }).index("by_userId", ["userId"]),

    // ─── Billing / Memberships (shared) ──────────────────────────
    subscriptions: defineTable({
        userId: v.id("users"),
        stripeCustomerId: v.optional(v.string()),
        stripeSubscriptionId: v.optional(v.string()),
        plan: v.string(), // "free", "pro", "business"
        status: v.string(), // "active", "past_due", "canceled"
        currentPeriodEnd: v.optional(v.number()),
    }).index("by_userId", ["userId"]),

    invoices: defineTable({
        userId: v.id("users"),
        stripeInvoiceId: v.string(),
        amount: v.number(),
        status: v.string(), // "paid", "open", "void"
        date: v.number(),
        pdfUrl: v.optional(v.string()),
    }).index("by_userId", ["userId"]),

    // ─── AI Appointment Booking ────────────────────────────────
    ai_appointment_booking_appointments: defineTable({
        title: v.string(),
        date: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Call Center ────────────────────────────────────────
    ai_call_center_calls: defineTable({
        callerId: v.string(),
        status: v.string(),
        duration: v.optional(v.number()),
        createdAt: v.number(),
    }),

    // ─── AI Call Transcription ─────────────────────────────────
    ai_call_transcription_transcripts: defineTable({
        callId: v.string(),
        text: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Chatbot ────────────────────────────────────────────
    ai_chatbot_messages: defineTable({
        role: v.string(),
        content: v.string(),
        sessionId: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Customer Analytics ─────────────────────────────────
    ai_customer_analytics_events: defineTable({
        eventType: v.string(),
        customerId: v.string(),
        data: v.optional(v.string()),
        createdAt: v.number(),
    }),

    // ─── AI Customer Service ───────────────────────────────────
    ai_customer_service_tickets: defineTable({
        subject: v.string(),
        status: v.string(),
        priority: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Document Summarizer ────────────────────────────────
    ai_document_summarizer_documents: defineTable({
        title: v.string(),
        summary: v.optional(v.string()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Email Campaigns ────────────────────────────────────
    ai_email_campaigns_campaigns: defineTable({
        name: v.string(),
        status: v.string(),
        recipients: v.number(),
        createdAt: v.number(),
    }),

    // ─── AI FAQ Assistant ──────────────────────────────────────
    ai_faq_assistant_faqs: defineTable({
        question: v.string(),
        answer: v.string(),
        category: v.optional(v.string()),
        createdAt: v.number(),
    }),

    // ─── AI Fraud Detection ────────────────────────────────────
    ai_fraud_detection_alerts: defineTable({
        transactionId: v.string(),
        riskScore: v.number(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Image & Video Generation ───────────────────────────
    ai_image_video_generation_jobs: defineTable({
        prompt: v.string(),
        type: v.string(),
        status: v.string(),
        resultUrl: v.optional(v.string()),
        createdAt: v.number(),
    }),

    // ─── AI Personal Assistant ─────────────────────────────────
    ai_personal_assistant_tasks: defineTable({
        description: v.string(),
        dueDate: v.optional(v.string()),
        completed: v.boolean(),
        createdAt: v.number(),
    }),

    // ─── AI Sales Assistant ────────────────────────────────────
    ai_sales_assistant_leads: defineTable({
        name: v.string(),
        email: v.string(),
        score: v.optional(v.number()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Sentiment Analysis ─────────────────────────────────
    ai_sentiment_analysis_analyses: defineTable({
        text: v.string(),
        sentiment: v.string(),
        confidence: v.number(),
        createdAt: v.number(),
    }),

    // ─── AI SEO Auditor ────────────────────────────────────────
    ai_seo_auditor_audits: defineTable({
        url: v.string(),
        score: v.optional(v.number()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Social Media Manager ───────────────────────────────
    ai_social_media_manager_posts: defineTable({
        platform: v.string(),
        content: v.string(),
        scheduledAt: v.optional(v.number()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── AI Voice Agent ────────────────────────────────────────
    ai_voice_agent_sessions: defineTable({
        userId: v.string(),
        status: v.string(),
        duration: v.optional(v.number()),
        createdAt: v.number(),
    }),

    // ─── API Monitoring ────────────────────────────────────────
    api_monitoring_endpoints: defineTable({
        url: v.string(),
        status: v.string(),
        lastChecked: v.optional(v.number()),
        createdAt: v.number(),
    }),

    // ─── Appointment Booking ───────────────────────────────────
    appointment_booking_appointments: defineTable({
        clientName: v.string(),
        date: v.string(),
        time: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Construction Management ───────────────────────────────
    construction_management_projects: defineTable({
        name: v.string(),
        status: v.string(),
        budget: v.optional(v.number()),
        createdAt: v.number(),
    }),

    // ─── Consulting Engagement ─────────────────────────────────
    consulting_engagement_engagements: defineTable({
        clientName: v.string(),
        type: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Content Planning ──────────────────────────────────────
    content_planning_items: defineTable({
        title: v.string(),
        type: v.string(),
        status: v.string(),
        scheduledDate: v.optional(v.string()),
        createdAt: v.number(),
    }),

    // ─── CRM ───────────────────────────────────────────────────
    crm_contacts: defineTable({
        name: v.string(),
        email: v.string(),
        company: v.optional(v.string()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Doctor / Clinic ───────────────────────────────────────
    doctor_clinic_patients: defineTable({
        name: v.string(),
        dateOfBirth: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Documentation Generator ───────────────────────────────
    documentation_generator_docs: defineTable({
        title: v.string(),
        content: v.optional(v.string()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Employee Onboarding ───────────────────────────────────
    employee_onboarding_employees: defineTable({
        name: v.string(),
        email: v.string(),
        department: v.optional(v.string()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Event Catering ────────────────────────────────────────
    event_catering_events: defineTable({
        name: v.string(),
        date: v.string(),
        guestCount: v.optional(v.number()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Expense Tracker ───────────────────────────────────────
    expense_tracker_expenses: defineTable({
        description: v.string(),
        amount: v.number(),
        category: v.string(),
        date: v.string(),
        createdAt: v.number(),
    }),

    // ─── Feature Flag Manager ──────────────────────────────────
    feature_flag_manager_flags: defineTable({
        name: v.string(),
        enabled: v.boolean(),
        description: v.optional(v.string()),
        createdAt: v.number(),
    }),

    // ─── Feedback / Bug Reporter ───────────────────────────────
    feedback_bug_reporter_reports: defineTable({
        title: v.string(),
        type: v.string(),
        description: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Fleet Management ──────────────────────────────────────
    fleet_management_vehicles: defineTable({
        identifier: v.string(),
        type: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Freelancer Portal ─────────────────────────────────────
    freelancer_portal_projects: defineTable({
        title: v.string(),
        clientName: v.string(),
        status: v.string(),
        budget: v.optional(v.number()),
        createdAt: v.number(),
    }),

    // ─── Hotel Management ──────────────────────────────────────
    hotel_management_rooms: defineTable({
        number: v.string(),
        type: v.string(),
        status: v.string(),
        pricePerNight: v.number(),
        createdAt: v.number(),
    }),

    // ─── HRMS ──────────────────────────────────────────────────
    hrms_employees: defineTable({
        name: v.string(),
        email: v.string(),
        role: v.string(),
        department: v.string(),
        createdAt: v.number(),
    }),

    // ─── Inventory Management ──────────────────────────────────
    inventory_management_items: defineTable({
        name: v.string(),
        sku: v.string(),
        quantity: v.number(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Invoice & Billing ─────────────────────────────────────
    invoice_billing_invoices: defineTable({
        clientName: v.string(),
        amount: v.number(),
        status: v.string(),
        dueDate: v.string(),
        createdAt: v.number(),
    }),

    // ─── Knowledge Base ────────────────────────────────────────
    knowledge_base_articles: defineTable({
        title: v.string(),
        content: v.string(),
        category: v.optional(v.string()),
        createdAt: v.number(),
    }),

    // ─── Law Firm / Case ───────────────────────────────────────
    law_firm_case_cases: defineTable({
        title: v.string(),
        clientName: v.string(),
        status: v.string(),
        caseType: v.string(),
        createdAt: v.number(),
    }),

    // ─── Online Course / LMS ───────────────────────────────────
    online_course_lms_courses: defineTable({
        title: v.string(),
        instructor: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Personal Trainer ──────────────────────────────────────
    personal_trainer_clients: defineTable({
        name: v.string(),
        goal: v.optional(v.string()),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Pharmacy ──────────────────────────────────────────────
    pharmacy_products: defineTable({
        name: v.string(),
        category: v.string(),
        price: v.number(),
        stock: v.number(),
        createdAt: v.number(),
    }),

    // ─── Procurement ───────────────────────────────────────────
    procurement_orders: defineTable({
        supplier: v.string(),
        status: v.string(),
        totalAmount: v.number(),
        createdAt: v.number(),
    }),

    // ─── Project / Task Manager ────────────────────────────────
    project_task_manager_tasks: defineTable({
        title: v.string(),
        description: v.optional(v.string()),
        status: v.string(),
        priority: v.string(),
        createdAt: v.number(),
    }),

    // ─── Property Management ───────────────────────────────────
    property_management_properties: defineTable({
        address: v.string(),
        type: v.string(),
        status: v.string(),
        rent: v.optional(v.number()),
        createdAt: v.number(),
    }),

    // ─── Real Estate Listing ───────────────────────────────────
    real_estate_listing_listings: defineTable({
        title: v.string(),
        address: v.string(),
        price: v.number(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Restaurant Management ─────────────────────────────────
    restaurant_management_reservations: defineTable({
        guestName: v.string(),
        date: v.string(),
        partySize: v.number(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Sales Analytics ───────────────────────────────────────
    sales_analytics_metrics: defineTable({
        metricName: v.string(),
        value: v.number(),
        period: v.string(),
        createdAt: v.number(),
    }),

    // ─── School Management ─────────────────────────────────────
    school_management_students: defineTable({
        name: v.string(),
        grade: v.string(),
        enrollmentDate: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Shift / Schedule Planner ──────────────────────────────
    shift_schedule_planner_shifts: defineTable({
        employeeName: v.string(),
        date: v.string(),
        startTime: v.string(),
        endTime: v.string(),
        createdAt: v.number(),
    }),

    // ─── Social Media Scheduler ────────────────────────────────
    social_media_scheduler_posts: defineTable({
        platform: v.string(),
        content: v.string(),
        scheduledAt: v.number(),
        status: v.string(),
        createdAt: v.number(),
    }),

    // ─── Student Portfolio ─────────────────────────────────────
    student_portfolio_projects: defineTable({
        title: v.string(),
        description: v.string(),
        category: v.optional(v.string()),
        createdAt: v.number(),
    }),

    // ─── URL Shortener ─────────────────────────────────────────
    url_shortener_urls: defineTable({
        originalUrl: v.string(),
        shortCode: v.string(),
        clicks: v.number(),
        createdAt: v.number(),
    }),

    // ─── Warehouse & Shipping ──────────────────────────────────
    warehouse_shipping_shipments: defineTable({
        trackingNumber: v.string(),
        destination: v.string(),
        status: v.string(),
        createdAt: v.number(),
    }),
});
