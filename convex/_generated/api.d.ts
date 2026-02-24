/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as _apps_ai_appointment_booking from "../_apps/ai_appointment_booking.js";
import type * as _apps_ai_call_center from "../_apps/ai_call_center.js";
import type * as _apps_ai_call_transcription from "../_apps/ai_call_transcription.js";
import type * as _apps_ai_chatbot from "../_apps/ai_chatbot.js";
import type * as _apps_ai_customer_analytics from "../_apps/ai_customer_analytics.js";
import type * as _apps_ai_customer_service from "../_apps/ai_customer_service.js";
import type * as _apps_ai_document_summarizer from "../_apps/ai_document_summarizer.js";
import type * as _apps_ai_email_campaigns from "../_apps/ai_email_campaigns.js";
import type * as _apps_ai_faq_assistant from "../_apps/ai_faq_assistant.js";
import type * as _apps_ai_fraud_detection from "../_apps/ai_fraud_detection.js";
import type * as _apps_ai_image_video_generation from "../_apps/ai_image_video_generation.js";
import type * as _apps_ai_personal_assistant from "../_apps/ai_personal_assistant.js";
import type * as _apps_ai_sales_assistant from "../_apps/ai_sales_assistant.js";
import type * as _apps_ai_sentiment_analysis from "../_apps/ai_sentiment_analysis.js";
import type * as _apps_ai_seo_auditor from "../_apps/ai_seo_auditor.js";
import type * as _apps_ai_social_media_manager from "../_apps/ai_social_media_manager.js";
import type * as _apps_ai_voice_agent from "../_apps/ai_voice_agent.js";
import type * as _apps_api_monitoring from "../_apps/api_monitoring.js";
import type * as _apps_appointment_booking from "../_apps/appointment_booking.js";
import type * as _apps_construction_management from "../_apps/construction_management.js";
import type * as _apps_consulting_engagement from "../_apps/consulting_engagement.js";
import type * as _apps_content_planning from "../_apps/content_planning.js";
import type * as _apps_crm from "../_apps/crm.js";
import type * as _apps_doctor_clinic from "../_apps/doctor_clinic.js";
import type * as _apps_documentation_generator from "../_apps/documentation_generator.js";
import type * as _apps_employee_onboarding from "../_apps/employee_onboarding.js";
import type * as _apps_event_catering from "../_apps/event_catering.js";
import type * as _apps_expense_tracker from "../_apps/expense_tracker.js";
import type * as _apps_feature_flag_manager from "../_apps/feature_flag_manager.js";
import type * as _apps_feedback_bug_reporter from "../_apps/feedback_bug_reporter.js";
import type * as _apps_fleet_management from "../_apps/fleet_management.js";
import type * as _apps_freelancer_portal from "../_apps/freelancer_portal.js";
import type * as _apps_hotel_management from "../_apps/hotel_management.js";
import type * as _apps_hrms from "../_apps/hrms.js";
import type * as _apps_inventory_management from "../_apps/inventory_management.js";
import type * as _apps_invoice_billing from "../_apps/invoice_billing.js";
import type * as _apps_knowledge_base from "../_apps/knowledge_base.js";
import type * as _apps_law_firm_case from "../_apps/law_firm_case.js";
import type * as _apps_online_course_lms from "../_apps/online_course_lms.js";
import type * as _apps_personal_trainer from "../_apps/personal_trainer.js";
import type * as _apps_pharmacy from "../_apps/pharmacy.js";
import type * as _apps_procurement from "../_apps/procurement.js";
import type * as _apps_project_task_manager from "../_apps/project_task_manager.js";
import type * as _apps_property_management from "../_apps/property_management.js";
import type * as _apps_real_estate_listing from "../_apps/real_estate_listing.js";
import type * as _apps_restaurant_management from "../_apps/restaurant_management.js";
import type * as _apps_sales_analytics from "../_apps/sales_analytics.js";
import type * as _apps_school_management from "../_apps/school_management.js";
import type * as _apps_shift_schedule_planner from "../_apps/shift_schedule_planner.js";
import type * as _apps_social_media_scheduler from "../_apps/social_media_scheduler.js";
import type * as _apps_student_portfolio from "../_apps/student_portfolio.js";
import type * as _apps_url_shortener from "../_apps/url_shortener.js";
import type * as _apps_warehouse_shipping from "../_apps/warehouse_shipping.js";
import type * as auth from "../auth.js";
import type * as billing from "../billing.js";
import type * as http from "../http.js";
import type * as userSettings from "../userSettings.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "_apps/ai_appointment_booking": typeof _apps_ai_appointment_booking;
  "_apps/ai_call_center": typeof _apps_ai_call_center;
  "_apps/ai_call_transcription": typeof _apps_ai_call_transcription;
  "_apps/ai_chatbot": typeof _apps_ai_chatbot;
  "_apps/ai_customer_analytics": typeof _apps_ai_customer_analytics;
  "_apps/ai_customer_service": typeof _apps_ai_customer_service;
  "_apps/ai_document_summarizer": typeof _apps_ai_document_summarizer;
  "_apps/ai_email_campaigns": typeof _apps_ai_email_campaigns;
  "_apps/ai_faq_assistant": typeof _apps_ai_faq_assistant;
  "_apps/ai_fraud_detection": typeof _apps_ai_fraud_detection;
  "_apps/ai_image_video_generation": typeof _apps_ai_image_video_generation;
  "_apps/ai_personal_assistant": typeof _apps_ai_personal_assistant;
  "_apps/ai_sales_assistant": typeof _apps_ai_sales_assistant;
  "_apps/ai_sentiment_analysis": typeof _apps_ai_sentiment_analysis;
  "_apps/ai_seo_auditor": typeof _apps_ai_seo_auditor;
  "_apps/ai_social_media_manager": typeof _apps_ai_social_media_manager;
  "_apps/ai_voice_agent": typeof _apps_ai_voice_agent;
  "_apps/api_monitoring": typeof _apps_api_monitoring;
  "_apps/appointment_booking": typeof _apps_appointment_booking;
  "_apps/construction_management": typeof _apps_construction_management;
  "_apps/consulting_engagement": typeof _apps_consulting_engagement;
  "_apps/content_planning": typeof _apps_content_planning;
  "_apps/crm": typeof _apps_crm;
  "_apps/doctor_clinic": typeof _apps_doctor_clinic;
  "_apps/documentation_generator": typeof _apps_documentation_generator;
  "_apps/employee_onboarding": typeof _apps_employee_onboarding;
  "_apps/event_catering": typeof _apps_event_catering;
  "_apps/expense_tracker": typeof _apps_expense_tracker;
  "_apps/feature_flag_manager": typeof _apps_feature_flag_manager;
  "_apps/feedback_bug_reporter": typeof _apps_feedback_bug_reporter;
  "_apps/fleet_management": typeof _apps_fleet_management;
  "_apps/freelancer_portal": typeof _apps_freelancer_portal;
  "_apps/hotel_management": typeof _apps_hotel_management;
  "_apps/hrms": typeof _apps_hrms;
  "_apps/inventory_management": typeof _apps_inventory_management;
  "_apps/invoice_billing": typeof _apps_invoice_billing;
  "_apps/knowledge_base": typeof _apps_knowledge_base;
  "_apps/law_firm_case": typeof _apps_law_firm_case;
  "_apps/online_course_lms": typeof _apps_online_course_lms;
  "_apps/personal_trainer": typeof _apps_personal_trainer;
  "_apps/pharmacy": typeof _apps_pharmacy;
  "_apps/procurement": typeof _apps_procurement;
  "_apps/project_task_manager": typeof _apps_project_task_manager;
  "_apps/property_management": typeof _apps_property_management;
  "_apps/real_estate_listing": typeof _apps_real_estate_listing;
  "_apps/restaurant_management": typeof _apps_restaurant_management;
  "_apps/sales_analytics": typeof _apps_sales_analytics;
  "_apps/school_management": typeof _apps_school_management;
  "_apps/shift_schedule_planner": typeof _apps_shift_schedule_planner;
  "_apps/social_media_scheduler": typeof _apps_social_media_scheduler;
  "_apps/student_portfolio": typeof _apps_student_portfolio;
  "_apps/url_shortener": typeof _apps_url_shortener;
  "_apps/warehouse_shipping": typeof _apps_warehouse_shipping;
  auth: typeof auth;
  billing: typeof billing;
  http: typeof http;
  userSettings: typeof userSettings;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
