import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-ivory">
        <div className="site-grid py-12 md:py-16">
          <p className="eyebrow">About us</p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl text-navy md:text-5xl">
            Development, leasing, and management since {site.founded}
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Restored from the published firm story at{" "}
            <a className="underline hover:text-navy" href={`${site.liveSite}/us/`}>
              commonwealthltd.net/us/
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-grid grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[1.08rem] leading-8 text-ink">
              The Commonwealth Group, LLC and its associated entities have been
              actively engaged in real estate development, leasing, and
              management services since 1973. After a number of years in the
              mining and oil and gas industries, founder and CEO Brock J. Vinton
              launched Commonwealth Management Corporation to carry out the
              management duties of various local real estate portfolios. Today
              the firm is a fully integrated real estate company with projects
              throughout the Mid-Atlantic and Colorado.
            </p>
            <p className="mt-5 text-[1.08rem] leading-8 text-ink">
              To date, The Commonwealth Group is responsible for the
              development, construction, and management of over one billion
              dollars worth of commercial, industrial, and residential real
              estate, mining, mineral rights, and oil and gas ventures.
            </p>
            <p className="mt-5 text-[1.08rem] leading-8 text-ink">
              The company balances its entrepreneurial spirit against calculated
              risk mitigation, with a published track record of substantial
              above-average returns for partners. The management team&apos;s 110+
              years of combined experience across business ventures and real
              estate sectors is cited as the basis for assessing development
              and repositioning opportunities. The in-house asset management
              team is described as bringing more than seventy years of combined
              experience in property management and building maintenance. Every
              superintendent is on call twenty-four hours a day and
              cross-trained on every building in the portfolio.
            </p>
            <p className="mt-5 text-[1.08rem] leading-8 text-ink">
              Throughout its history, Commonwealth has partnered with or
              provided services for companies including American Express,
              DuPont, Computer Science Corporation, Applied Extrusion
              Technologies, Dade Behring, Wesley College, Christiana Care,
              Chester County Hospital, Penn Hospital, Discover Card, AIG,
              Amtrak, Alstom, McCarter & English, Deloitte, and the State of
              Delaware.
            </p>
            <p className="mt-5 text-[1.08rem] leading-8 text-ink">
              Under the joint venture of Commonwealth-Emory Hill, the firm is
              responsible for the development, leasing, and management of The
              New Castle Corporate Commons and Omega Professional Center. As
              industrial developers, Commonwealth was the lead entity
              responsible for the Riveredge Industrial Park along with other
              individual projects. The property management staff is currently
              responsible for the leasing and management of 1.3 million square
              feet of office, warehouse, and multifamily properties.
            </p>
            <p className="mt-5 text-[1.08rem] leading-8 text-ink">
              While the past includes third-party development and management
              work, the published core approach is as an owner-manager. The
              property management team works closely with owners, monitors the
              bottom line, and re-evaluates contracts and expenses. Education
              in management practices is described as ongoing through
              affiliations such as the Institute of Real Estate Management,
              IFMA, CIRC, the Zell Institute of Real Estate of the University of
              Pennsylvania, as well as the Board of Realtors, Chamber of
              Commerce, and the Better Business Bureau.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-navy/10 bg-paper p-7">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="eyebrow">Founded</dt>
                  <dd className="mt-2 font-serif text-3xl text-navy">1973</dd>
                </div>
                <div>
                  <dt className="eyebrow">Headquarters</dt>
                  <dd className="mt-2 font-serif text-2xl text-navy">
                    300 Water Street
                    <br />
                    Wilmington, DE
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Published management volume</dt>
                  <dd className="mt-2 font-serif text-3xl text-navy">
                    1.3 million SF
                  </dd>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Office, warehouse, and multifamily, as stated on the live
                    About page.
                  </p>
                </div>
                <div>
                  <dt className="eyebrow">Disciplines</dt>
                  <dd className="mt-2 leading-7 text-ink">
                    Development, leasing, and management. Office, multifamily
                    and mixed use, residential, industrial, and family business.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative mt-5 aspect-[4/3] overflow-hidden border border-navy/10">
              <Image
                src="/images/commonwealth-building-hq.jpg"
                alt="The Commonwealth Building at 300 Water Street"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-3 aspect-[4/3] overflow-hidden border border-navy/10">
              <Image
                src="/images/commonwealth-building-entry.jpg"
                alt="Interior of The Commonwealth Building at 300 Water Street"
                fill
                className="object-cover"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-navy/10 py-10">
        <div className="site-grid">
          <Link href="/leadership" className="text-maroon hover:underline">
            Leadership
          </Link>
        </div>
      </section>
    </>
  );
}
