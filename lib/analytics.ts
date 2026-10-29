/**
 * Cloudflare Web Analytics beacon token. Public by design: it ships in page
 * source. NEXT_PUBLIC_CF_BEACON_TOKEN overrides it at build time when set.
 * If the resolved value is empty, the beacon script is not rendered.
 */
const cfBeaconTokenDefault = "a1397942a6944b4a8ad3500a3d4afe21";

export const cfBeaconToken: string =
  process.env.NEXT_PUBLIC_CF_BEACON_TOKEN?.trim() || cfBeaconTokenDefault;
