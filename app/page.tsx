import { SiteHeader } from "@/components/site-header"
import { HeroBanner } from "@/components/hero-banner"
import { IntroCta } from "@/components/intro-cta"
import { NoticeBoard } from "@/components/notice-board"
import { Services } from "@/components/services"
import { Solutions } from "@/components/solutions"
import { WhyChoose } from "@/components/why-choose"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#141414]">
      <SiteHeader />
      <HeroBanner />
      <IntroCta />
      <NoticeBoard />
      <Services />
      <Solutions />
      <WhyChoose />
      <SiteFooter />
    </main>
  )
}
