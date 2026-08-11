import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Drones } from '@/components/Drones';
import { WhyChoose } from '@/components/WhyChoose';
import { QuoteForm } from '@/components/QuoteForm';
import { Team } from '@/components/Team';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function Index() {
  return (
    <div data-ev-id="ev_537e75e36a" className="min-h-screen scroll-smooth bg-white font-sans">
			<Navbar />
			<main data-ev-id="ev_0bd42feefc">
				<Hero />
				<About />
				<Drones />
				<WhyChoose />
				<QuoteForm />
				<Team />
				<Location />
			</main>
			<Footer />
			<WhatsAppFloat />
		</div>);

}