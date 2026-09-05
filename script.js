/**
         * MASTER CONFIGURATION OBJECT
         */
        const CONFIG = {
            // Basic Info
            name: "Piyal Basak", 
            englishName: "Piyal Basak",
            title: "Performance Marketer & Growth Partner",
            badgeText: "Welcome to my portfolio",
            profileImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbctA8UtysSm4ilP4JnyRbixW8SyHoVKrUIOxhyphenhyphenCxnd0o5kjyxJpbyPq5frtFqNtYrjS2buxNWE7bjlTM3MeF5Ud-Hov-FM-eqWEkI7Z8f9g8ceWahQ49MNea0pUXDVQ4KcR5VQy4VTBrktXVVmflcNSMxs_xI32Y2Ecd3WhX0ZflFGWy4LtDgpEBnDUrZ/s1600/ChatGPT%20Image%20Aug%202,%202026,%2001_38_1106%20PM.webp",
            aboutImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOFguIdmmCB-YMpdWRfeE25rTdvMDn0DI292WAN04XHBvl5r_AmDsq4uzWBNe_jYrqLUHfbAH2rthv-ypPnG8uQfyzphCsMIHc77X6aPsB550t9HXjNxmU_fR00k3D71su5BpMt8kUEOqWc73kQp-tkXskjYct9bDjMrySOUXbw-CwCZVqZYWNm9CcY1F8/s1600/ChatGPT%20Image%20Jul%206,%202026,%2006_23_30%20PM.webp",
            resumeLink: "https://drive.google.com/file/d/1mcu0e5nHzSmeAjabZU8aft6i_QUFzWs2/view?usp=sharing",
            
            // Hero Typing (Problem-solving focused)
            rotatingTexts: [
                "wasted Ad Spend",
                "broken Pixel Tracking",
                "iOS 14+ Data Loss",
                "low ROAS & high CPA",
                "poor Conversion Rates"
            ],
            // New Problem-Solver Hero Description
            heroDescription: "Are you spending money on ads but not seeing profitable results? I don't just 'run ads'—I find the hidden bottlenecks in your marketing funnel. I fix broken tracking, stop wasted ad spend, and build data-driven strategies to scale your business profitably.",
            
            // Contact
            phone: "+880 1611 080859",
            email: "info.piyalbasak@gmail.com",
            location: "Tangail, Bangladesh",
            experienceYears: "3+",
            
            // Social Links
            socialLinks: {
                facebook: "https://www.facebook.com/piyalbasak.dm/",
                linkedin: "https://www.linkedin.com/in/piyalbasak/",
                github: "https://github.com/piyalbasak",
                whatsapp: "https://wa.me/8801611080859",
                telegram: "https://t.me/piyaldm"
            },
            
            // Integrations
            telegramBotToken: "8945267204:AAGVqZhV4Za1w5gn3QmoWfB6O_kRSelqnRo",  // <-- PUT YOUR TELEGRAM BOT TOKEN HERE
            telegramChatID: "8646431479",    // <-- PUT YOUR TELEGRAM CHAT ID HERE
            googleScriptURL: "https://script.google.com/macros/s/AKfycbztSS8LHtLPTw7kGTSJ8CmRHhgM7bYmbcD4Cqs3JB29J-at4KggfjxZ_Kr4ABZWIjVnew/exec",  
            googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793616!2d90.33728817290036!3d23.780777744473336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus",

            // About Data (Growth Partner focus)
            aboutTitle: "Your Dedicated Growth Partner & Problem Solver",
            aboutText: "Most businesses struggle to grow not because of bad products, but due to blind marketing and inaccurate data. My approach is simple: I audit your current setup, identify exactly why you are losing sales, and fix the root cause. Whether it's solving iOS 14+ tracking issues with Conversion API or scaling campaigns through advanced web analytics, I act as your growth partner. I don't focus on vanity metrics; I focus on what matters most—your revenue.",
            aboutHighlights: [
                { icon: "fas fa-search-dollar", text: "Identify Bottlenecks" },
                { icon: "fas fa-wrench", text: "Fix Tracking Issues" },
                { icon: "fas fa-chart-line", text: "Scale Profitably" },
                { icon: "fas fa-handshake", text: "Long-term Partner" }
            ],

            // Services Array (Solution-focused descriptions)
            services: [
                {
                    icon: "fab fa-meta", title: "Meta Ads Optimization",
                    desc: "Stop wasting money on blind targeting. I create data-driven campaigns to acquire high-quality customers and maximize your ROAS.",
                    features: ["Funnel Audit", "Audience Research", "Retargeting Setup", "ROAS Scaling"]
                },
                {
                    icon: "fab fa-google", title: "Google Ads (PPC)",
                    desc: "Capture high-intent buyers exactly when they search for your solution. I optimize keywords to lower your CPA and boost conversions.",
                    features: ["Search Ads", "Performance Max", "Negative Keywords", "Conversion Tracking"]
                },
                {
                    icon: "fas fa-server", title: "Server-Side Tracking (CAPI)",
                    desc: "Losing data due to iOS 14+ or AdBlockers? I implement CAPI to ensure 100% accurate tracking, so algorithms optimize perfectly.",
                    features: ["Meta Pixel Fix", "Google Tag Manager", "Stape/Cloud Setup", "Data Accuracy"]
                },
                {
                    icon: "fas fa-chart-pie", title: "GA4 Analytics",
                    desc: "Stop guessing. I turn complex website data into clear insights so you can see exactly where users drop off and why.",
                    features: ["E-commerce Tracking", "Event Fixing", "Looker Studio", "Drop-off Analysis"]
                },
                {
                    icon: "fas fa-shopping-bag", title: "Shopify/Woo Tracking Fix",
                    desc: "Fixing data mismatch between your store and Ads Manager with a flawless Data Layer setup for perfect dynamic remarketing.",
                    features: ["DataLayer Activation", "Dynamic Remarketing", "Purchase Tracking", "Catalog Sync"]
                },
                {
                    icon: "fas fa-share-alt", title: "Alternative Ads Tracking",
                    desc: "Diversifying your traffic sources with precise tracking and conversion-focused ads on alternative platforms.",
                    features: ["Pinterest Tag", "Reddit Pixel", "Quora Pixel", "Ad Strategy"]
                },
                {
                    icon: "fab fa-tiktok", title: "TikTok Pixel & Ads",
                    desc: "Capturing Gen-Z & Millennial buyers with perfectly tracked Events API and hyper-targeted campaigns for maximum profit.",
                    features: ["TikTok Pixel Setup", "Events API", "Custom Conversions", "ROAS Optimization"]
                },
                {
                    icon: "fab fa-wordpress", title: "High-Converting Landing Pages",
                    desc: "Your ads won won't work if your landing page doesn't convert. I build fast, highly optimized pages that turn clicks into sales.",
                    features: ["Elementor Pro", "Conversion Focused", "Speed Optimization", "Mobile Responsive"]
                }
            ],

            // Skills Array
            skills: [
                "Problem Solving", "Funnel Auditing", "Meta Ads", "Google Ads", "Google Analytics 4", "Google Tag Manager", 
                "Conversion API (CAPI)", "Server-Side Tracking", "Data Accuracy", "Shopify Tracking",
                "WooCommerce", "High-Converting Pages", "ROAS Optimization"
            ],

            // Projects Array
            projects: [
                {
                    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkxAlvKToVdizUKpo6VbitaM8R3ph0mgN364QxC4en3O8OjqObFcdf1CSjO1YhkxjfSYVCerDBpYsg-lA32BPS18SJObD48a0QVSh4Niy12qOiZQ3ZZwdLGyxvk8DVD3t-L8qvIno3HtJPVc7V3vhkvWwosXIRhMK8XpVfjyUBAsxMFhB_sBg5ryIm1Om9/s1600/Fashion%20ecommerce.webp",
                    title: "E-commerce Sales Scaling",
                    industry: "Fashion E-commerce",
                    results: "Fixed tracking issues | ROAS Scaled to 4.5x",
                    tech: ["Meta Pixel", "CAPI", "GA4", "Shopify"],
                    liveLink: "https://prime-logic1.myshopify.com/",
                    caseStudyLink: "https://drive.google.com/file/d/14EcBQvbl5TKm2KyvVF_zlBxPxFr9yT3-/view?usp=sharing"
                },
                {
                    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkzOVParh0H5d1KGZRfSSfS0gHogPeato5kTb-9gXoS_AtQEUJIo5BlFc3oEJsvG2RWu2PjN1yMTbok4ZIlGOh7TEfJ2H0Yje0VOBYiO7vku5q6vKT-Lqbj0OZE5lR0lShjXt5_dOMTXC1bORL4DiSWSPILniMqbFtTgZV37dJII2HU1UVlqV3Kgi4rhB3/s1600/ChatGPT%20Image%20Aug%202,%202026,%2005_06_56%20PM.webp",
                    title: "Google Ads Lead Gen",
                    industry: "Service Website",
                    results: "Reduced junk leads | 500+ High-Quality Leads",
                    tech: ["Google Ads", "GTM", "Landing Page Audit"],
                    liveLink: "https://washingmachinerepairindohaqatar.com/",
                    caseStudyLink: "https://drive.google.com/file/d/14EcBQvbl5TKm2KyvVF_zlBxPxFr9yT3-/view?usp=sharing"
                },
                {
                    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg3q5CS2LYkhLKblGeAsxcbrlGcNFsX19G2EpZ2iYne2qJzrOQ_Q847V0BNvJhG9dq8ED3-niIJ2q-_gFRkce56USv8gLqsrBrpeE0uWMKnR2ep2aM9P2tFm5Or9exDw54IwEoDyCSU7CQ8kEgmNDtjpaz9zB5a4AIj93zR1coLudHYyMR2MQI4znn-j99/s1600/Meta%20Event%20Manager.webp",
                    title: "Server Side Tracking Fix",
                    industry: "SaaS Business",
                    results: "Solved iOS 14 Data Loss | 99% Accuracy",
                    tech: ["GTM", "Stape", "GA4", "Custom JS"],
                    liveLink: null,
                    caseStudyLink: "https://drive.google.com/file/d/14EcBQvbl5TKm2KyvVF_zlBxPxFr9yT3-/view?usp=sharing"
                },
                {
                    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirLWULKNbJ_un9JZYzoE8hlFicSoJwbos4B50gjaE__fwswFUiWz1QLrAWpHlG5hRhOGYHVQ76h1HtkojpYFqtvEL5G4Ne2wjmdRqmjtSumOUEbfa3TD6XyVy6cP19_qOSvYyf_TH0_R86dsJv56n1QKKeo0wqe9TlYGv5l0ffHrVP0kCLuUCYMfo5fAGJ/s1600/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-2026-08-02-16_57_19.webp",
                    title: "Local Service Ad Setup",
                    industry: "Repair Service",
                    results: "Lowered CPA by 45% via precise targeting",
                    tech: ["Meta Ads", "Ad Creative", "Retargeting", "Custom Audience"],
                    liveLink: "https://www.facebook.com/washingmachinerepairqarar/",
                    caseStudyLink: "https://drive.google.com/file/d/14EcBQvbl5TKm2KyvVF_zlBxPxFr9yT3-/view?usp=sharing"
                },
                {
                    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEja0d8unvtHadAg1r44Kcl-D8_1BptmfEoW7DoryRSCKhE5JN1QOnF_77EHj18P7cIfWczXKU5wUnXfM3BkPLnP1RIgtgvTq21bgRY2497HSH7Fhxwwn7uzZkd_qZiQuH1OD9DeFfvW538moX_ly42EGcIcOELlZlr5opPaFystlSUmnFAU_nRLELDFXRX1/s1600/screencapture-ovinobotoysbd-2026-08-02-16_51_53.webp",
                    title: "Landing Page Optimization",
                    industry: "Toy E-commerce",
                    results: "Fixed bounce rate | High-Converting Design",
                    tech: ["WordPress", "Elementor Pro", "WooCommerce", "Responsive"],
                    liveLink: "https://ovinobotoysbd.com/",
                    caseStudyLink: "https://drive.google.com/file/d/14EcBQvbl5TKm2KyvVF_zlBxPxFr9yT3-/view?usp=sharing"
                }
            ],

            // Achievements
            achievements: [
                { icon: "fas fa-check-circle", count: 250, label: "Problems Solved" },
                { icon: "fas fa-chart-line", count: 180, label: "Businesses Scaled" },
                { icon: "fas fa-globe", count: 25, label: "Countries Served" },
                { icon: "fas fa-dollar-sign", count: 500, label: "Ad Spend Managed (K+)", suffix:"K+" }
            ],

            // Testimonials 
            testimonials: [
                {
                    name: "MOHIUDDIN KHAN SHIMANTO", role: "CEO, Fashion Store",
                    image: "https://placehold.co/150x150/334155/fff?text=MS",
                    text: "We were burning cash on Facebook ads without knowing why. Piyal didn't just run new ads; he audited our funnel, fixed our pixel issues with CAPI, and brought our ROAS back from the dead.",
                    rating: 5
                },
                {
                    name: "SUVADRA BASAK", role: "Founder, Real Estate Agency",
                    image: "https://placehold.co/150x150/334155/fff?text=SB",
                    text: "We were getting a lot of junk leads. Piyal optimized our Google Ads targeting and negative keywords, cutting our CPA in half while doubling the quality of our leads. He actually solves problems.",
                    rating: 5
                },
                {
                    name: "RAFIQUL ISLAM", role: "E-commerce Owner",
                    image: "https://placehold.co/150x150/334155/fff?text=RI",
                    text: "Our Shopify store data was never matching the Meta Ads manager. Piyal implemented perfect server-side tracking, and finally, our algorithms learned who our actual buyers are. A true lifesaver.",
                    rating: 5
                },
                {
                    name: "SARAH WILLIAMS", role: "Marketing Director",
                    image: "https://placehold.co/150x150/334155/fff?text=SW",
                    text: "What makes Piyal different is that he acts like a partner. He looked at our GA4 analytics, showed us exactly where users were dropping off, and helped us fix our landing page. Highly recommended.",
                    rating: 5
                }
            ],

            // Problem-Solver FAQs
            faqs: [
                {
                    question: "I'm spending a lot on Meta/Google ads but not getting sales. Can you fix this?",
                    answer: "Yes. In 90% of cases, the issue isn't the platform, it's either broken tracking, a poor landing page, or targeting the wrong audience. Before spending your budget, I will audit your entire funnel to find the exact bottleneck and fix it."
                },
                {
                    question: "My Shopify/Website dashboard shows 50 sales, but Facebook only shows 20. Why?",
                    answer: "This is a classic data loss issue caused by iOS 14+ updates and browser ad-blockers. When Meta loses this data, it cannot optimize your ads properly. I solve this by implementing advanced Server-Side Tracking (Conversion API), ensuring 100% accurate data flows back to your ad manager."
                },
                {
                    question: "Do you offer fixed service packages?",
                    answer: "I don't believe in 'one-size-fits-all' packages because every business has a unique problem. First, I listen to your specific challenges, analyze your data, and then build a customized roadmap entirely focused on fixing those issues and scaling your revenue."
                },
                {
                    question: "How do I know if I need a new Landing Page or better Ads?",
                    answer: "We look at the data. If your ads have a high Click-Through Rate (CTR) but low conversions, your landing page is the problem. If you have low CTR, your ads or targeting are the problem. I use tools like GA4 to analyze user behavior so we fix what is actually broken instead of guessing."
                }
            ]
        };

        document.addEventListener('DOMContentLoaded', () => {
            // Remove Loader
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 500);
            }, 1000);

            // Populating Data
            document.title = `${CONFIG.englishName} | ${CONFIG.title}`;
            document.getElementById('nav-logo-text').innerText = CONFIG.englishName;
            document.getElementById('footer-logo-text').innerText = CONFIG.englishName;
            document.getElementById('current-year').innerText = new Date().getFullYear();
            document.getElementById('copyright-name').innerText = CONFIG.englishName;
            
            document.getElementById('hero-name').innerText = CONFIG.name;
            document.getElementById('hero-badge').innerText = CONFIG.badgeText;
            document.getElementById('hero-description').innerText = CONFIG.heroDescription;
            
            document.querySelectorAll('.hero-profile-image').forEach(img => img.src = CONFIG.profileImage);
            
            document.getElementById('hero-buttons').innerHTML = `
                <a href="#contact" class="btn-premium px-8 py-3 rounded-full text-white font-medium shadow-lg flex items-center gap-2">
                    Let's Solve Your Problem <i class="fas fa-arrow-right"></i>
                </a>
                <a href="${CONFIG.resumeLink}" target="_blank" class="btn-outline px-8 py-3 rounded-full text-accent font-medium flex items-center gap-2">
                    Download CV <i class="fas fa-download"></i>
                </a>
            `;

            // Socials Generator
            const generateSocials = (containerId) => {
                const container = document.getElementById(containerId);
                const socials = [
                    { key: 'facebook', icon: 'fab fa-facebook-f', color: 'hover:text-blue-500 hover:border-blue-500' },
                    { key: 'linkedin', icon: 'fab fa-linkedin-in', color: 'hover:text-blue-400 hover:border-blue-400' },
                    { key: 'github', icon: 'fab fa-github', color: 'hover:text-gray-300 hover:border-gray-300' },
                    { key: 'whatsapp', icon: 'fab fa-whatsapp', color: 'hover:text-green-500 hover:border-green-500' },
                    { key: 'telegram', icon: 'fab fa-telegram-plane', color: 'hover:text-blue-400 hover:border-blue-400' }
                ];
                let html = '';
                socials.forEach(s => {
                    if(CONFIG.socialLinks[s.key]) {
                        html += `<a href="${CONFIG.socialLinks[s.key]}" target="_blank" class="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 transition-all ${s.color}">
                                    <i class="${s.icon}"></i>
                                 </a>`;
                    }
                });
                container.innerHTML = html;
            };
            generateSocials('hero-socials');
            generateSocials('footer-socials');

            // About Data Binding
            document.getElementById('about-image').src = CONFIG.aboutImage;
            document.getElementById('about-experience-years').innerText = CONFIG.experienceYears;
            document.getElementById('about-title').innerText = CONFIG.aboutTitle;
            document.getElementById('about-text').innerText = CONFIG.aboutText;
            
            document.getElementById('about-highlights').innerHTML = CONFIG.aboutHighlights.map(h => `
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-accent">
                        <i class="${h.icon}"></i>
                    </div>
                    <span class="font-medium text-gray-200">${h.text}</span>
                </div>
            `).join('');

            // Services Mapping
            document.getElementById('services-grid').innerHTML = CONFIG.services.map((s, index) => `
                <div class="glass-card p-8 rounded-2xl reveal group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] text-left">
                    <div class="w-16 h-16 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center text-3xl text-accent mb-6 group-hover:scale-110 transition-transform duration-500 border border-accent/20">
                        <i class="${s.icon}"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white">${s.title}</h3>
                    <p class="text-gray-400 mb-6 text-sm leading-relaxed text-justify">${s.desc}</p>
                    <ul class="space-y-2 text-sm text-gray-300">
                        ${s.features.map(f => `<li><i class="fas fa-check text-accent mr-2 text-xs"></i> ${f}</li>`).join('')}
                    </ul>
                </div>
            `).join('');

            // Skills Mapping
            document.getElementById('skills-container').innerHTML = CONFIG.skills.map((skill, i) => `
                <div class="glass-card px-6 py-3 rounded-full border-b border-primary/30 flex items-center gap-2 reveal hover:border-accent hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all cursor-default" style="transition-delay: ${i * 50}ms">
                    <i class="fas fa-certificate text-accent text-sm"></i>
                    <span class="font-medium tracking-wide">${skill}</span>
                </div>
            `).join('');

            // Portfolio (Projects) Mapping
            document.getElementById('portfolio-grid').innerHTML = CONFIG.projects.map((p, index) => `
                <div class="glass-card rounded-2xl overflow-hidden group portfolio-card reveal flex flex-col w-full lg:w-[calc(50%-1.25rem)] text-left" style="transition-delay: ${(index % 2) * 200}ms">
                    <div class="h-[300px] w-full relative border-b border-white/10 portfolio-scroll-img" style="background-image: url('${p.image}')">
                        <div class="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-xs font-bold text-accent border border-accent/30 shadow-lg">
                            ${p.industry}
                        </div>
                    </div>
                    <div class="p-8 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold mb-2 text-white">${p.title}</h3>
                            <p class="text-green-400 text-sm font-medium mb-4 flex items-center gap-2">
                                <i class="fas fa-check-circle"></i> ${p.results}
                            </p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                ${p.tech.map(t => `<span class="text-xs glass-panel px-2 py-1 rounded text-gray-300 border border-gray-600">${t}</span>`).join('')}
                            </div>
                        </div>
                        <div class="flex gap-4 mt-auto">
                            ${p.liveLink ? `
                            <a href="${p.liveLink}" target="_blank" rel="noopener noreferrer" class="flex-1 btn-premium text-center py-2.5 rounded-lg text-sm font-bold text-white transition-all">
                                <i class="fas fa-external-link-alt mr-1"></i> View Live
                            </a>` : ''}
                            <a href="${p.caseStudyLink}" target="_blank" rel="noopener noreferrer" class="flex-1 btn-outline text-center py-2.5 rounded-lg text-sm font-bold text-accent transition-all">
                                Read Case Study
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');

            // Achievements mapping
            document.getElementById('achievements-grid').innerHTML = CONFIG.achievements.map((a, i) => `
                <div class="text-center glass-panel p-6 rounded-2xl border-t border-accent/20 reveal reveal-delay-${i+1} hover:-translate-y-2 transition-transform">
                    <i class="${a.icon} text-4xl text-primary mb-4"></i>
                    <h3 class="text-4xl font-bold text-white mb-2"><span class="counter" data-target="${a.count}">0</span>${a.suffix || '+'}</h3>
                    <p class="text-gray-400 text-sm font-medium uppercase tracking-wider">${a.label}</p>
                </div>
            `).join('');

            // 1. DESKTOP GRID (Hidden on Mobile)
            const desktopGrid = document.getElementById('desktop-testimonials-grid');
            if(desktopGrid) {
                desktopGrid.innerHTML = CONFIG.testimonials.map(t => `
                    <div class="glass-card p-8 rounded-2xl flex flex-col justify-between h-full group hover:-translate-y-2 transition-transform w-full">
                        <div>
                            <div class="text-accent text-4xl mb-4 opacity-30"><i class="fas fa-quote-left"></i></div>
                            <p class="text-gray-300 italic mb-6 leading-relaxed text-justify text-sm md:text-base">"${t.text}"</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="${t.image}" alt="${t.name}" class="w-14 h-14 rounded-full object-cover border-2 border-primary/50">
                            <div>
                                <h4 class="text-white font-bold text-sm md:text-base">${t.name}</h4>
                                <p class="text-accent text-xs">${t.role}</p>
                                <div class="text-yellow-400 text-xs mt-1 flex gap-1">
                                    ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }

            // 2. MOBILE AUTO SLIDER (Hidden on Desktop)
            const mobileTrack = document.getElementById('mobile-testimonials-track');
            const mobileDotsContainer = document.getElementById('mobile-testimonial-dots');
            
            if(mobileTrack && mobileDotsContainer) {
                mobileTrack.innerHTML = CONFIG.testimonials.map((t) => `
                    <div class="min-w-[100%] flex-shrink-0 px-2 w-full box-border">
                        <div class="glass-card p-6 rounded-2xl flex flex-col justify-between h-full mx-auto w-full box-border">
                            <div>
                                <div class="text-accent text-4xl mb-4 opacity-30"><i class="fas fa-quote-left"></i></div>
                                <p class="text-gray-300 italic mb-6 leading-relaxed text-justify text-sm break-words whitespace-normal w-full overflow-hidden">"${t.text}"</p>
                            </div>
                            <div class="flex items-center gap-4 mt-4">
                                <img src="${t.image}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover border-2 border-primary/50">
                                <div>
                                    <h4 class="text-white font-bold text-sm">${t.name}</h4>
                                    <p class="text-accent text-xs">${t.role}</p>
                                    <div class="text-yellow-400 text-[10px] mt-1 flex gap-1">
                                        ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');

                mobileDotsContainer.innerHTML = CONFIG.testimonials.map((_, i) => `
                    <button class="w-3 h-3 rounded-full bg-gray-600 transition-all duration-300 slider-dot focus:outline-none" aria-label="Go to slide ${i+1}"></button>
                `).join('');

                let currentSlide = 0;
                const dots = document.querySelectorAll('.slider-dot');
                const totalSlides = CONFIG.testimonials.length;
                let slideInterval;

                const goToSlide = (index) => {
                    currentSlide = index;
                    mobileTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
                    dots.forEach(dot => {
                        dot.classList.remove('bg-accent', 'scale-125');
                        dot.classList.add('bg-gray-600');
                    });
                    if(dots[currentSlide]) {
                        dots[currentSlide].classList.add('bg-accent', 'scale-125');
                        dots[currentSlide].classList.remove('bg-gray-600');
                    }
                };

                const nextSlide = () => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    goToSlide(currentSlide);
                };

                if (totalSlides > 0) {
                    goToSlide(0);
                    if(window.innerWidth < 768) {
                        slideInterval = setInterval(nextSlide, 5000);
                    }
                }

                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        clearInterval(slideInterval);
                        goToSlide(index);
                        slideInterval = setInterval(nextSlide, 5000);
                    });
                });

                window.addEventListener('resize', () => {
                    if(window.innerWidth >= 768) {
                        clearInterval(slideInterval); 
                    } else if (window.innerWidth < 768 && !slideInterval) {
                        slideInterval = setInterval(nextSlide, 5000); 
                    }
                });
            }

            // FAQs mapping
            document.getElementById('faq-container').innerHTML = CONFIG.faqs.map((faq, index) => `
                <details class="glass-card rounded-2xl group overflow-hidden border border-white/5">
                    <summary class="p-6 cursor-pointer font-bold text-white flex justify-between items-center list-none hover:text-accent transition-colors">
                        ${faq.question}
                        <span class="transition duration-300 group-open:rotate-180">
                            <i class="fas fa-chevron-down text-accent"></i>
                        </span>
                    </summary>
                    <div class="p-6 pt-0 text-gray-400 leading-relaxed text-justify">
                        ${faq.answer}
                    </div>
                </details>
            `).join('');

            // Contact Info
            document.getElementById('contact-info').innerHTML = `
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary text-xl flex-shrink-0"><i class="fas fa-map-marker-alt"></i></div>
                    <div><h4 class="text-white font-bold mb-1">Office Location</h4><p class="text-gray-400 text-sm">${CONFIG.location}</p></div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary text-xl flex-shrink-0"><i class="fas fa-envelope"></i></div>
                    <div><h4 class="text-white font-bold mb-1">Email Address</h4><p class="text-gray-400 text-sm"><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p></div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary text-xl flex-shrink-0"><i class="fab fa-whatsapp"></i></div>
                    <div><h4 class="text-white font-bold mb-1">WhatsApp Number</h4><p class="text-gray-400 text-sm"><a href="${CONFIG.socialLinks.whatsapp}" target="_blank">${CONFIG.phone}</a></p></div>
                </div>
            `;
            
            document.getElementById('map-container').innerHTML = `<iframe src="${CONFIG.googleMap}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

            // Menu logic
            const navLinks = [
                { id: 'home', label: 'Home' }, { id: 'about', label: 'Who Am I?' },
                { id: 'services', label: 'Solutions' }, { id: 'portfolio', label: 'Results' },
                { id: 'contact', label: 'Contact' }
            ];
            document.getElementById('desktop-menu').innerHTML = navLinks.map(link => 
                `<a href="#${link.id}" class="text-sm font-semibold text-gray-300 hover:text-accent transition-colors tracking-wide uppercase nav-item">${link.label}</a>`
            ).join('');
            
            // Mobile Menu Links Injection
            document.getElementById('mobile-menu-links').innerHTML = navLinks.map(link => 
                `<a href="#${link.id}" class="mobile-link text-white hover:text-accent transition-colors tracking-wide uppercase font-semibold">${link.label}</a>`
            ).join('');

            // Mobile Menu Toggle Logic
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const closeMenuBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                mobileMenuBtn.style.display = 'none'; 
            });

            const closeMobileMenu = () => {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                setTimeout(() => { mobileMenuBtn.style.display = 'block'; }, 300); 
            };

            closeMenuBtn.addEventListener('click', closeMobileMenu);

            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });

            window.addEventListener('scroll', () => {
                 if (!mobileMenu.classList.contains('translate-x-full')) {
                     closeMobileMenu();
                 }
            });

            // Navbar Scroll Background Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 30) {
                    navbar.classList.add('bg-[#0b0f19]/95', 'backdrop-blur-lg', 'shadow-lg', 'border-b', 'border-white/10');
                    navbar.classList.replace('py-4', 'py-3');
                } else {
                    navbar.classList.remove('bg-[#0b0f19]/95', 'backdrop-blur-lg', 'shadow-lg', 'border-b', 'border-white/10');
                    navbar.classList.replace('py-3', 'py-4');
                }
            });
            
            // Auto Typing Effect
            const typingElement = document.getElementById('hero-typing');
            let textIndex = 0, charIndex = 0, isDeleting = false, typingDelay = 100;
            function typeEffect() {
                const currentText = CONFIG.rotatingTexts[textIndex];
                if (isDeleting) {
                    typingElement.innerText = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingDelay = 50;
                } else {
                    typingElement.innerText = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingDelay = 150;
                }
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true; typingDelay = 2000;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false; textIndex = (textIndex + 1) % CONFIG.rotatingTexts.length; typingDelay = 500;
                }
                setTimeout(typeEffect, typingDelay);
            }
            setTimeout(typeEffect, 1500);

            // Scroll Reveals
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
                });
            }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

            // Counter Animation (Repeating)
            const counters = document.querySelectorAll('.counter');
            
            const startCounting = (counter) => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; 
                const increment = target / (duration / 16); 
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCounter();
            };

            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const counter = entry.target;
                    if (entry.isIntersecting) {
                        if (!counter.hasAttribute('data-interval')) {
                            startCounting(counter);
                            const intervalId = setInterval(() => {
                                startCounting(counter);
                            }, 6000); 
                            counter.setAttribute('data-interval', intervalId);
                        }
                    } else {
                        if (counter.hasAttribute('data-interval')) {
                            clearInterval(counter.getAttribute('data-interval'));
                            counter.removeAttribute('data-interval');
                        }
                    }
                });
            }, { threshold: 0.2 });
            
            counters.forEach(counter => counterObserver.observe(counter));

            // Telegram & Google Sheet Form Submit Logic
            const contactForm = document.getElementById('contact-form');
            const toast = document.getElementById('toast');
            
            if(contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault(); 
                    
                    const submitBtn = document.getElementById('submit-btn');
                    const originalBtnText = submitBtn.innerHTML;
                    
                    submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
                    submitBtn.disabled = true;

                    const formData = new FormData(contactForm);

                    // 1. Send data to Google Sheet
                    let googlePromise = Promise.resolve();
                    if(CONFIG.googleScriptURL) {
                        googlePromise = fetch(CONFIG.googleScriptURL, {
                            method: 'POST',
                            body: formData,
                            mode: 'no-cors' 
                        });
                    }

                    // 2. Send data to Telegram
                    let telegramPromise = Promise.resolve();
                    if(CONFIG.telegramBotToken && CONFIG.telegramChatID) {
                        // FIXED: Removed Markdown parsing entirely to prevent special character errors
                        const messageText = `New Client Inquiry!\n\nName: ${formData.get('Name')}\nEmail: ${formData.get('Email')}\nWhatsApp: ${formData.get('WhatsApp')}\n\nProblem Description:\n${formData.get('Message')}`;
                        
                        const telegramUrl = `https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`;
                        
                        telegramPromise = fetch(telegramUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                chat_id: CONFIG.telegramChatID,
                                text: messageText
                                // Removed parse_mode completely
                            })
                        });
                    }

                    // Run both requests and show success message
                    Promise.all([googlePromise, telegramPromise])
                    .then(() => {
                        document.getElementById('toast-icon').className = "fas fa-check-circle text-green-500 text-xl";
                        document.getElementById('toast-message').innerText = 'Message sent successfully!';
                        toast.classList.remove('border-red-500');
                        toast.classList.add('border-green-500');
                        toast.classList.add('show');
                        
                        contactForm.reset();
                    })
                    .catch((error) => {
                        document.getElementById('toast-icon').className = "fas fa-exclamation-circle text-red-500 text-xl";
                        document.getElementById('toast-message').innerText = 'Failed to send message. Please try again.';
                        toast.classList.remove('border-green-500');
                        toast.classList.add('border-red-500');
                        toast.classList.add('show');
                    })
                    .finally(() => {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.disabled = false;
                        
                        setTimeout(() => {
                            toast.classList.remove('show');
                        }, 3000);
                    });
                });
            }
        });
