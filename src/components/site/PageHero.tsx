import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { WhatsAppButton } from "./WhatsAppButton";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  price,
  whatsappMessage,
  whatsappService,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  price?: string;
  whatsappMessage?: string;
  whatsappService?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-border bg-[oklch(0.955_0.018_74)] px-5 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14">
      <div className="mx-auto w-full max-w-[1400px]">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div className="max-w-3xl">
            {eyebrow ? <p className="eyebrow text-blush tracking-[0.24em] font-medium">{eyebrow}</p> : null}
            <h1 className="mt-4 font-display text-[2.5rem] leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[4rem]">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/80 font-light md:text-lg">
                {intro}
              </p>
            ) : null}
          </div>
          <div className="lg:text-right">
            {price ? (
              <p className="font-display text-[2.5rem] leading-none tracking-tight text-charcoal font-medium">{price}</p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              <WhatsAppButton
                source={`page_hero:${title}`}
                message={whatsappMessage}
                service={whatsappService}
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
