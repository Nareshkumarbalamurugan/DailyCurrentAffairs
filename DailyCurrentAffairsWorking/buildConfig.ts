// Build-time configuration for special builds (admin-enabled variant)
// NOTE: Storing credentials in source is insecure; this file exists because you
// explicitly requested the admin auto-login for the admin-included build.
export const INCLUDE_ADMIN_PANEL = true;
export const ADMIN_EMAIL = 'admin@yuvaupdate.com';
export const ADMIN_PASSWORD = 'admin@yuvaupdate';

// Toggle this to true only for the admin-enabled APK. Keep false for public builds.
export const ENABLE_ADMIN_AUTO_LOGIN = true;
