import { TrackedPhoneLink } from "@/components/analytics/tracked-phone-link";
import { siteConfig } from "@/data/site";

export function StickyCallButton() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <TrackedPhoneLink
        href={siteConfig.phoneHref}
        location="mobile_sticky_call"
        label="sticky_phone"
        className="flex items-center justify-between rounded-2xl bg-accent-500 px-5 py-4 text-sm font-semibold text-white shadow-panel"
      >
        <span>Soforthilfe anrufen</span>
        <span>{siteConfig.phoneDisplay}</span>
      </TrackedPhoneLink>
    </div>
  );
}
