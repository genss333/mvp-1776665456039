const features = [
  {
    icon: "⚡",
    title: "Instant Booking",
    description: "Book your court in seconds with real-time availability. No waiting, no phone calls.",
  },
  {
    icon: "📅",
    title: "Smart Scheduling",
    description: "AI-powered scheduling that remembers your preferences and suggests optimal time slots.",
  },
  {
    icon: "💳",
    title: "Secure Payments",
    description: "Pay online with multiple payment methods. Automatic receipts and full refund protection.",
  },
  {
    icon: "🏸",
    title: "Court Management",
    description: "Full dashboard for venue owners. Track bookings, revenue, and court utilization effortlessly.",
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    description: "Never miss a session. Get SMS and email reminders before every booking.",
  },
  {
    icon: "👥",
    title: "Team Booking",
    description: "Organize group games, tournaments, and leagues with powerful team booking features.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for casual players",
    features: [
      "Up to 5 bookings / month",
      "Basic court search",
      "Email confirmations",
      "Access to 1 venue",
    ],
    popular: false,
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: "฿299",
    period: "/month",
    description: "For serious players",
    features: [
      "Unlimited bookings",
      "Priority court access",
      "SMS + Email reminders",
      "Team management (up to 10)",
      "Booking history & analytics",
      "Multi-venue access",
    ],
    popular: true,
    cta: "Start Pro Trial",
  },
  {
    name: "Venue",
    price: "฿999",
    period: "/month",
    description: "For court owners",
    features: [
      "Everything in Pro",
      "Venue management dashboard",
      "Revenue analytics",
      "Custom booking rules",
      "API access",
      "Dedicated support",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

const stats = [
  { value: "50K+", label: "Active Players" },
  { value: "200+", label: "Courts Listed" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "App Rating" },
];

const steps = [
  {
    step: "01",
    title: "Search Courts",
    description: "Find available courts near you by location, date, and time.",
  },
  {
    step: "02",
    title: "Book Instantly",
    description: "Select your slot and confirm your booking in under 30 seconds.",
  },
  {
    step: "03",
    title: "Play & Smash",
    description: "Get your confirmation, show up, and dominate the court.",
  },
];

const testimonials = [
  {
    name: "Anan K.",
    role: "Club Player, Bangkok",
    quote: "SmashCourt cut my booking time from 20 minutes to literally 10 seconds. Game changer.",
    avatar: "AK",
  },
  {
    name: "Pimchanok S.",
    role: "Tournament Organizer",
    quote: "Managing 12 courts and 400 players used to be chaos. Now it's automated. Love it.",
    avatar: "PS",
  },
  {
    name: "Tanakorn W.",
    role: "Venue Owner, Chiang Mai",
    quote: "Our court utilization jumped 35% in the first month. The analytics alone are worth it.",
    avatar: "TW",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-400/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">⚡</span>
            <span className="font-black text-xl tracking-tight">SmashCourt</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors duration-200">How It Works</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5">
              Sign In
            </a>
            <a href="#" className="text-sm font-bold bg-yellow-400 text-black px-4 py-1.5 rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg shadow-yellow-400/20">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-yellow-500/8 rounded-full blur-3xl" />
          <div className="absolute top-32 left-1/3 w-80 h-80 bg-yellow-400/5 rounded-full blur-2xl" />
          <div className="absolute top-48 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
        </div>

        {/* Decorative lightning */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <span className="absolute top-24 left-8 text-yellow-400/15 text-9xl rotate-12">⚡</span>
          <span className="absolute top-52 right-10 text-yellow-400/10 text-7xl -rotate-12">⚡</span>
          <span className="absolute bottom-20 left-1/4 text-yellow-400/8 text-6xl rotate-6">⚡</span>
          <span className="absolute bottom-32 right-1/3 text-yellow-400/8 text-5xl -rotate-6">⚡</span>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-yellow-400 text-xs">⚡</span>
            <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">Now Live in Thailand</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 leading-[0.9]">
            Book Courts.
            <br />
            <span className="text-yellow-400">Smash Hard.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The fastest way to book badminton courts in Thailand.
            Real-time availability, instant confirmation, zero hassle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-yellow-400 text-black font-black text-base rounded-xl hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-2xl shadow-yellow-400/25"
            >
              ⚡ Book a Court Now
            </a>
            <a
              href="#features"
              className="px-8 py-4 border border-gray-700 text-white font-semibold text-base rounded-xl hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all duration-200"
            >
              See How It Works →
            </a>
          </div>

          {/* Court visual mockup */}
          <div className="mt-20 relative">
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 bg-gray-800 rounded-md h-6 ml-2" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Court A", "Court B", "Court C", "Court D", "Court E", "Court F"].map((court, i) => (
                  <div
                    key={court}
                    className={`rounded-xl p-4 border text-center transition-all ${
                      i === 1 || i === 4
                        ? "bg-yellow-400/10 border-yellow-400/40 text-yellow-400"
                        : i === 0 || i === 3
                        ? "bg-green-400/10 border-green-400/30 text-green-400"
                        : "bg-gray-800/50 border-gray-700 text-gray-500"
                    }`}
                  >
                    <div className="text-xs font-bold mb-1">{court}</div>
                    <div className="text-xs opacity-70">
                      {i === 1 || i === 4 ? "Booked" : i === 0 || i === 3 ? "Available" : "Closed"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-600">Today · 18:00 – 20:00</span>
                <span className="text-xs bg-yellow-400 text-black font-bold px-3 py-1 rounded-full">⚡ Book Now</span>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-yellow-400/10 blur-2xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800/60">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Everything you need to{" "}
              <span className="text-yellow-400">play more.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Built for badminton players and court owners alike. Powerful tools, dead-simple experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-yellow-400/40 hover:bg-[#0a0a0a] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-yellow-400/20 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-950/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Court booked in{" "}
              <span className="text-yellow-400">30 seconds.</span>
            </h2>
            <p className="text-gray-400 text-lg">Three steps. That&apos;s it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[65%] w-[70%] h-px bg-gradient-to-r from-yellow-400/40 via-yellow-400/20 to-transparent" />
                )}
                <div className="w-16 h-16 bg-yellow-400 text-black rounded-2xl flex items-center justify-center text-xl font-black mx-auto mb-5 shadow-xl shadow-yellow-400/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Simple,{" "}
              <span className="text-yellow-400">transparent</span> pricing.
            </h2>
            <p className="text-gray-400 text-lg">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? "bg-yellow-400 border-yellow-400 text-black shadow-2xl shadow-yellow-400/30 scale-105 z-10"
                    : "bg-gray-950 border-gray-800 text-white hover:border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-yellow-400 text-xs font-black px-4 py-1.5 rounded-full border border-yellow-400/30 whitespace-nowrap">
                    ⚡ MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-1 ${plan.popular ? "text-black" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-black/60" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${plan.popular ? "text-black" : "text-white"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? "text-black/60" : "text-gray-500"}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-0.5 font-bold ${plan.popular ? "text-black" : "text-yellow-400"}`}>✓</span>
                      <span className={plan.popular ? "text-black/80" : "text-gray-400"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-black text-yellow-400 hover:bg-gray-900"
                      : "bg-yellow-400 text-black hover:bg-yellow-300"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Loved by{" "}
              <span className="text-yellow-400">players & venues.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-yellow-400/20 border border-yellow-400/30 rounded-full flex items-center justify-center text-xs font-black text-yellow-400">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-yellow-400 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute -top-6 -right-6 text-black/10 text-[220px] font-black leading-none select-none pointer-events-none">
              ⚡
            </div>
            <div className="absolute -bottom-6 -left-6 text-black/5 text-[150px] font-black leading-none select-none pointer-events-none rotate-12">
              🏸
            </div>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-black text-black mb-4 tracking-tight leading-tight">
                Ready to Smash?
              </h2>
              <p className="text-black/70 text-lg mb-8 max-w-md mx-auto">
                Join 50,000+ players already booking with SmashCourt. Start free, upgrade anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-black text-yellow-400 font-black text-base px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-2xl"
                >
                  ⚡ Start Booking Free
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-black/10 text-black font-bold text-base px-8 py-4 rounded-xl hover:bg-black/20 transition-colors"
                >
                  View Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span className="font-black text-xl tracking-tight">SmashCourt</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                The fastest badminton court booking platform in Thailand. Play more, worry less.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Product</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© 2026 SmashCourt. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
