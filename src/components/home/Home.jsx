import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";


import { Link } from "react-router-dom";

import featuresImg from "../../assets/feature/features.webp";
import technicalImg from "../../assets/feature/featuress.png";
import transperenImg from "../../assets/feature/featuress.webp";
import dataImg from "../../assets/feature/feature.webp";
import orbitImg from "../../assets/home/orbit.webp";
import articleImg from "../../assets/home/article.webp";

// New local images for Decisions and Articles sections
// import technicalImg from "../../assets/home/technical.png";
// import transperenImg from "../../assets/home/transperen.png";
// import dataImg from "../../assets/home/data.png";
import epmVaultHeroImg from "../../assets/home/epm-vault-hero.webp";
import unionBudgetImg from "../../assets/home/articles/union-budget.jpg";
import silverGainsImg from "../../assets/home/articles/silver-gains.jpg";
import goldImg from "../../assets/home/articles/gold.jpg";
import giftCityImg from "../../assets/home/articles/gift-city.jpg";
// import awardNewImg from "../../assets/home/awards/epm-award-9.jpeg";
import award1 from "../../assets/home/awards/epm-award-1.jpeg";
import award2 from "../../assets/home/awards/epm-award-2.jpeg";
import award3 from "../../assets/home/awards/epm-award-3.jpeg";
import award5 from "../../assets/home/awards/epm-award-5.jpeg";
import award6 from "../../assets/home/awards/epm-award-6.jpeg";
import award7 from "../../assets/home/awards/epm-award-7.jpeg";
import award8 from "../../assets/home/awards/epm-award-8.jpeg";
import award9 from "../../assets/home/awards/epm-award-9.jpeg";
import awardStage from "../../assets/home/awards/award-stage.jpeg";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});
const features = [
  {
    id: 1,
    bgImage: featuresImg,
    title: (
    <>
      Customized  <br />
     For You
    </>
  ),
    description: "",
    meta: "",
  },
  {
  id: 2,
  bgImage: technicalImg,
  title: (
    <>
      Technically <br />
      Driven
    </>
  ),
  description: "",
  meta: "",
},
  {
    id: 3,
    bgImage: transperenImg,
   title: (
    <>
      Transparent &  <br />
      Client Centric
    </>
  ),
    description: "",
    meta: "",
  },
  {
    id: 4,
    bgImage: dataImg,
    title: "Data-Driven",
    description: "",
    meta: "",
  },
];

const articles = [
  {
    id: 1,
    type: "ARTICLE",
    meta: "CIO'S DESK · 03 MARCH 2026",
    title: "Exclusive insights for enduring wealth",
    desc: "At EPM Wealth, we deliver refined strategies and deep market intelligence tailored for individuals who seek more than just returns — they seek legacy.",
    image: epmVaultHeroImg,
    featured: true,
    content: [
      "At EPM Wealth, we believe that true wealth is not just about beating a benchmark—it is about securing a legacy that spans generations. In today's volatile macroeconomic environment, traditional portfolios are no longer enough. We focus on structured asset allocation, incorporating global equities, alternative assets, and tax-efficient structures to shield your capital from inflationary pressures and market shifts.",
      "Our CIO Office continuously monitors global capital flows, policy changes, and emerging asset classes. By combining deep fundamental analysis with modern technological execution, we identify asymmetric risk-reward opportunities before they become mainstream. Whether it is navigating cross-border investments or setting up robust estate structures, our approach remains client-centric and bespoke.",
      "Enduring wealth requires patience, discipline, and a clear vision. Our dedicated wealth managers work closely with your family office and legal advisors to ensure every investment fits seamlessly into your broader legacy plan. We invite you to explore our research and partner with us on your journey to financial excellence."
    ]
  },
  {
    id: 2,
    meta: "",
    title: "Union Budget 2025-27 Declared",
    date: "03-Feb-26",
    image: unionBudgetImg,
    content: [
      "The recently declared Union Budget 2025-27 introduces pivotal shifts in India's fiscal policies, emphasizing infrastructure spending, digital economy expansion, and structural tax reforms. For individual taxpayers and wealth creators, the revised tax slabs under the new regime present new optimization opportunities. It is crucial to re-evaluate your investment instruments to align with these regulatory changes.",
      "A major highlight of the budget is the rationalization of capital gains tax structures. Short-term and long-term capital gains rates have been adjusted to streamline investments across equities, debt, and real estate. Additionally, new incentives for offshore banking units in GIFT City point towards India's growing ambition to become a global financial hub.",
      "At EPM Wealth, our tax advisory team is already working with clients to restructure portfolios in light of these declarations. By adjusting asset allocation between debt instruments, equity funds, and hybrid products, we ensure your post-tax yields are maximized while maintaining risk parameters."
    ]
  },
  {
    id: 3,
    meta: "",
    title: "Silver: Protecting Gains, Avoiding Pitfalls",
    date: "05-Mar-26",
    image: silverGainsImg,
    content: [
      "Silver has experienced unprecedented price action over the past quarters, driven by industrial demand in green technologies, solar panels, and electronics, coupled with traditional safe-haven buying. However, with rapid price appreciation comes heightened volatility. Investors must distinguish between structural long-term gains and speculative bubbles.",
      "While gold remains the cornerstone of precious metal allocation, silver offers a higher beta play on economic recovery. However, retail investors often fall into the trap of buying at peak prices out of FOMO (Fear Of Missing Out). Protecting your gains in silver requires systematic profit booking and the use of trailing stops rather than holding onto concentrated positions indefinitely.",
      "We recommend a disciplined, percentage-based allocation to precious metals as part of a diversified portfolio. Silver should serve as a tactical overlay rather than a core long-term holdings base. Speak with your portfolio manager to review your current metal exposure and rebalance accordingly."
    ]
  },
  {
    id: 4,
    meta: "",
    title: "Where does gold go from here?",
    date: "02-Apr-26",
    image: goldImg,
    content: [
      "As central banks around the globe continue to accumulate gold reserves at record rates, the metal has solidified its position as the ultimate hedge against geopolitical uncertainty and currency devaluation. The debate now is whether current gold price levels are sustainable, or if a consolidation phase is imminent.",
      "Historically, gold thrives in low interest rate environments and times of global credit expansion. Even as interest rates remain sticky, persistent inflationary pressures and currency fluctuations have sustained gold's upward trajectory. Our research indicates that gold remains a critical hedge against potential systemic risks in the global banking sector.",
      "For Indian investors, gold has deep cultural and financial significance. However, moving away from physical gold towards sovereign gold bonds or digital gold funds can yield better tax efficiencies and additional interest income. We advise keeping a 5% to 10% structural allocation to gold to protect your portfolio's purchasing power."
    ]
  },
  {
    id: 5,
    meta: "",
    title: "The GIFT City Advantage",
    date: "05-May-26",
    image: giftCityImg,
    content: [
      "Gujarat International Finance Tec-City (GIFT City) is rapidly emerging as India's premier International Financial Services Centre (IFSC). It offers Indian residents and non-residents a unique regulatory environment, featuring tax exemptions, liberalized remittance schemes, and access to international financial products right on domestic soil.",
      "For high-net-worth individuals (HNIs) and family offices, GIFT City provides a seamless route to invest in global stocks, international mutual funds, and foreign currency-denominated assets. With a 10-year tax holiday and zero capital gains tax on specified transactions, it represents a highly efficient vehicle for global wealth diversification.",
      "EPM Wealth has established a dedicated desk to guide clients through the complexities of setting up and managing investments in GIFT City. From understanding the Liberalized Remittance Scheme (LRS) limits to selecting top-performing offshore funds, we help you leverage this strategic advantage to build a truly global legacy."
    ]
  },
];

const awardsData = [
  {
    year: "2017",
    title: "A vision takes route",
    brand: "EPM WEALTH",
    subtitle:
      "After two decades in the corporate world, Mr. Dileep Hari stepped forward with purpose — founding EPM Wealth alongside a core team built on trust, expertise, and a shared belief in redefining personal wealth.",
  },
  {
    year: "2018",
    title: "Beyond Boundaries",
    brand: "EPM WEALTH",
    subtitle:
      "EPM Wealth widened its horizon — entering the insurance landscape and launching dedicated NRI services, making world-class financial guidance accessible to Indians across the globe.",
  },
  {
    year: "2019",
    title: "Where Knowledge Meets Strategy",
    brand: "EPM WEALTH",
    subtitle:
      "CPF’s Tanish Gupta joined as Director, elevating the firm’s advisory depth. Financial literacy emerged as a core vertical — sparking a movement that would reach thousands through more than 500 seminars and webinars across India till now.",
  },
  {
    year: "2020",
    title: "Standing Firm When It Mattered",
    brand: "EPM WEALTH",
    subtitle:
      "In the midst of a global pandemic, EPM Wealth insured over 2,000 healthcare professionals — and crossed ₹50 Crore in AUM. A year that defined our character.",
  },
  {
    year: "2021",
    title: "The Complete Picture",
    brand: "EPM WEALTH",
    subtitle:
      "EPM Wealth completed its wealth management ecosystem, offering clients a full suite of financial products under one roof.",
  },
  {
    year: "2022",
    title: "Built on Trust, Refined by Experience",
    brand: "EPM WEALTH",
    subtitle:
      "EPM Wealth introduced structured portfolio reviews with one-of-its-kind systems and crossed ₹100 crore in AUM, a landmark milestone.",
  },
  {
    year: "2023",
    title: "Protecting the Legacy",
    brand: "EPM WEALTH",
    subtitle:
      "EPM Wealth added estate planning to its services, making sure that the legacy is always protected.",
  },
  {
    year: "2024",
    title: "Dubai: Our Second Home",
    brand: "EPM WEALTH",
    subtitle:
      "EPM Wealth opened its doors in Dubai — stepping onto the global stage and bringing its trusted wealth philosophy to one of the world's most dynamic financial capitals.",
  },
  {
    year: "2025",
    title: "Global Horizons, Local Wisdom",
    brand: "EPM WEALTH",
    subtitle:
      "EPM Wealth expanded its investment universe — adding GIFT City instruments to its platform, giving clients on both sides access to truly global wealth opportunities.",
  },
  {
    year: "2026",
    title: "Year of Milestone & Collaborations",
    brand: "EPM WEALTH",
    subtitle:
      "EPM Wealth crossed ₹150 Crore in AUM, a testament to the compounding trust of clients who have grown with us year after year. And collaborated with different unique hedge funds around the world bringing exclusive opportunities to our clients.",
  },
];

// 

const galleryImages = [
  award9,
  award8,
  award7,
  award6,
  award5,
  award3,
  award2,
  award1,
  awardStage,
];

const duplicatedGalleryImages = [...galleryImages, ...galleryImages];


const TYPED_LINES = [
  "It all begins with you.",
  "Attaining Financial Freedom.",
  "Making Your Money Work For You.",
  "Saving Taxes.",
  "Meeting Your Goals.",
];

const coreValuesData = [
  {
    id: 1,
    letter: "R",
    title: "RELATIONSHIP",
    description:
      "We build lasting relationships grounded in trust, transparency, and a genuine commitment to long-term growth.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    letter: "I",
    title: "INTEGRITY",
    description:
      "Every recommendation is unbiased and fully aligned with the client's interest. Complete transparency, always.",
    image:
      "https://i.pinimg.com/1200x/44/0c/94/440c94130b3a3043b5074d057ef4ada6.jpg",
  },
  {
    id: 3,
    letter: "S",
    title: "SIMPLICITY",
    description:
      "We distil the complex world of finance into clear, actionable insights. Clarity over complexity, always.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    letter: "K",
    title: "KNOWLEDGE",
    description:
      "Deep expertise across asset classes, geographies, and generations drives our advice and research.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80&auto=format&fit=crop",
  },
];

const testimonialsData = [
  {
    id: 1,
    name: "Jitender Singh",
    role: "Inspector , Delhi Police",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Jitender-Singh.jpg",
    quote:
      "One stop solution for all my family's financial needs . I am really happy with their service and would recommend them",
  },
  {
    id: 2,
    name: "CA Amit Aggarwal",
    role: "Chartered Accountant",
    image: "https://epmwealth.com/wp-content/uploads/2023/05/Amit-Aggarwal.jpg",
    quote:
      "It's nice to have one place to come to, without being too large or institutional. I feel like you know the whole picture under one roof .It's Peace of mind with EPM Wealth.",
  },
  {
    id: 3,
    name: "Garvita Sadhwani",
    role: "Actress/Influencer",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Garvita-Sadhwani.jpg",
    quote:
      "For me, investing was a dream, but also a phobia. EPM Wealth team is very co-operative and has done an excellent job of transforming my investment mindset.",
  },
  {
    id: 4,
    name: "Jaideep Dudani",
    role: "Apple Products Distributor , North India",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Jaideep-Dudani.jpg",
    quote:
      "It's been a pleasure to deal with EPM team. Financial knowledge, attention to detail and communication are amazing. I've recommended EPM Wealth to family members who are now also happy clients.",
  },
  {
    id: 5,
    name: "Shantanu Gupta",
    role: "Managing Director of Roots Group of Institutes",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Shantanu-Gupta.jpg",
    quote:
      " I am grateful to have EPM WEALTH as my financial advisor . Their services have always been exceptional in every way",
  },
  {
    id: 6,
    name: "Himanshu Verma ",
    role: "Venture Capitalist",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Himanshu-Verma.jpg",
    quote:
      "It is such a relief to have someone you can trust completely looking after your portfolio. Their advice has always been beneficial to us and we would definitely recommend them to everyone.",
  },
  {
    id: 7,
    name: "Akash Chaudhary",
    role: "Ace fitness trainer",
    image:
      "https://epmwealth.com/wp-content/uploads/2023/05/Aakash-Chadhary.jpg",
    quote:
      "My financial education was O when I first met the EPM Wealth team. They have been very helpful in educating me and managing my finances.",
  },
];

const useCountUp = (end, duration = 2200, suffix = "", prefix = "") => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return [`${prefix}${count}${suffix}`, ref];
};

const Home = () => {
  const homeRef = useRef(null);
  const heroWrapRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const revealOverlayRef = useRef(null);
  const heroTextRef = useRef(null);

  const [videoEnded, setVideoEnded] = useState(false);
  const [showTyped, setShowTyped] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  /* ── Mobile video deferred load — improves LCP by ~0.6–1s on mobile ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return; // Desktop: browser streams normally
    // On mobile: strip src until page is interactive so poster is the LCP
    const originalSrc = "/videos/hero-video.mp4";
    video.removeAttribute("src");
    video.load(); // flush any existing buffer
    const loadVideo = () => {
      if (video.src) return; // already loaded
      video.src = originalSrc;
      video.load();
      video.play().catch(() => { }); // graceful autoplay fallback
    };
    if (document.readyState === "complete") {
      // page already loaded — use idle callback for low priority
      if ("requestIdleCallback" in window) {
        requestIdleCallback(loadVideo, { timeout: 2000 });
      } else {
        setTimeout(loadVideo, 1500);
      }
    } else {
      window.addEventListener("load", () => {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(loadVideo, { timeout: 2000 });
        } else {
          setTimeout(loadVideo, 1500);
        }
      }, { once: true });
    }
  }, []);

  const [experience, ref1] = useCountUp(30, 2000, "+ Years");
  const [clients, ref2] = useCountUp(1000, 2400, "+");
  const [locations, ref3] = useCountUp(2, 1800);
  const [aum, ref4] = useCountUp(150, 2400, " Cr.+");

  const featuredArticle = articles.find((item) => item.featured);
  const bottomArticles = articles.filter((item) => !item.featured);

  const [activeYear, setActiveYear] = useState("2022");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonialsData[activeTestimonial];

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const quoteRef = useRef(null);
  const imageWrapRef = useRef(null);
  const dotsRef = useRef(null);
  const autoSlideRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeData =
    awardsData.find((item) => item.year === activeYear) || awardsData[0];

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".epm-reveal-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".decision-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".decision-grid",
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".vault-article-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".vault-bottom-grid",
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".core-value-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".core-values-grid",
              start: "top 82%",
              once: true,
            },
          },
        );
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
    }, 4500);

    return () => clearInterval(autoSlideRef.current);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".testimonials-mini-label",
          ".testimonials-luxury-header h2",
          cardRef.current,
          quoteRef.current,
          dotsRef.current,
        ].filter(Boolean),
        {
          opacity: 0,
          y: 40,
        },
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.to(".testimonials-mini-label", {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })
        .to(
          ".testimonials-luxury-header h2",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.3",
        )
        .to(
          cardRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.25",
        )
        .to(
          quoteRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .to(
          dotsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!quoteRef.current || !imageWrapRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      quoteRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
    ).fromTo(
      imageWrapRef.current,
      { opacity: 0, x: -18, rotateY: -15 },
      { opacity: 1, x: 0, rotateY: 0, duration: 0.55 },
      "-=0.3",
    );

    return () => tl.kill();
  }, [activeTestimonial]);

  useEffect(() => {
    const sections = document.querySelectorAll(".epm-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("epm-show");
          } else {
            entry.target.classList.remove("epm-show"); // 🔥 important for re-trigger
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
    }, 4500);
  };

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
    resetAutoSlide();
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768 || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1400,
      transformOrigin: "center",
    });

    gsap.to(imageWrapRef.current, {
      rotateY: rotateY * 1.2,
      rotateX: rotateX * 1.2,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(imageWrapRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
      resetAutoSlide();
    } else if (diff < -50) {
      setActiveTestimonial((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1,
      );
      resetAutoSlide();
    }
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    /* overlay visible */
    tl.to(revealOverlayRef.current, {
      opacity: 1,
      duration: 0.6,
    });

    /* FIRST → golden line */
    tl.to(
      ".epm-hero-3d-text",
      {
        "--lineReveal": 1,
        duration: 0.9,
      },
      "-=0.2",
    );

    /* THEN → content */
    tl.fromTo(
      ".epm-hero-text-line",
      {
        opacity: 0,
        y: 80,
        rotateX: -70,
        transformOrigin: "bottom",
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.18,
        duration: 1.2,
      },
      "-=0.2",
    );

    /* LAST → typed line */
    tl.call(() => {
      setShowTyped(true);
    });
  };

  useEffect(() => {
    if (!showTyped) return;
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let tid;
    const tick = () => {
      if (cancelled) return;
      const line = TYPED_LINES[lineIdx];
      if (!isDeleting) {
        charIdx++;
        setTypedText(line.slice(0, charIdx));
        if (charIdx === line.length) {
          tid = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 1600);
          return;
        }
        tid = setTimeout(tick, 45);
      } else {
        charIdx--;
        setTypedText(line.slice(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          lineIdx = (lineIdx + 1) % TYPED_LINES.length;
          tid = setTimeout(tick, 320);
          return;
        }
        tid = setTimeout(tick, 22);
      }
    };
    tid = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(tid);
    };
  }, [showTyped]);

  return (
    <div ref={homeRef} className="epm-home-page">
      <section className="epm-hero-wrap" ref={heroWrapRef} id="home">
        {/* ── Video Container (rounded rectangle, premium) ── */}
        <div className="epm-hero-video-outer">
          <div className="epm-hero-video-wrap" ref={videoContainerRef}>
            <video
              ref={videoRef}
              className="epm-hero-video"
              src="/videos/hero-video.mp4"
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster="/videos/hero-poster.jpg"
              onEnded={handleVideoEnd}
              onError={handleVideoEnd}
            />
            {/* Very light overlay for text readability */}
            <div className="epm-hero-video-overlay" />

            {/* ── Post-video 3D Reveal ── */}
            <div className="epm-hero-reveal-overlay" ref={revealOverlayRef}>
              <div className="epm-hero-3d-scene">
                <div className="epm-hero-3d-text" ref={heroTextRef}>
                  <span className="epm-hero-text-line epm-line-because">
                    BECAUSE YOUR
                  </span>
                  <span className="epm-hero-text-line epm-line-wealth">
                    WEALTH
                  </span>
                  <span className="epm-hero-text-line epm-line-deserves">
                    DESERVES
                  </span>
                  <span className="epm-hero-text-line epm-line-excellence">
                    EXCELLENCE
                  </span>

                  <div
                    className={`epm-hero-inline-social ${videoEnded ? "show" : ""}`}
                  >
                    <a
                      href="https://www.instagram.com/epm_wealth/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="https://www.youtube.com/@epmwealth101"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaYoutube />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/epm-wealth/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href="https://www.facebook.com/epmwealthadvisor"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="epm-hero-spacer"></div>

      <div className="epm-overlap-stack">
        <section className="epm-stats-section epm-overlap-panel">
          <div className="epm-stats-wrap">
            <div className="epm-stats-card">
              <div className="epm-stats-grid">
                <div className="epm-stat-box" ref={ref4}>
                  <h2>{aum}</h2>
                  <p>Total Asset Under Management</p>
                </div>

                <div className="epm-stat-line"></div>

                <div className="epm-stat-box" ref={ref1}>
                  <h2>{experience}</h2>
                  <p>Combined Team Experience</p>
                </div>
                <div className="epm-stat-line"></div>

                <div className="epm-stat-box" ref={ref2}>
                  <h2>{clients}</h2>
                  <p>Unique Clients Served</p>
                </div>

                <div className="epm-stat-line"></div>

                <div className="epm-stat-box" ref={ref3}>
                  <h2>{locations}</h2>
                  <p>Strategic Global Locations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="solutions-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="solutions-container">
           <div className="solutions-left">
  <h2>Wealth & More Than Just Money</h2>

  <div className="solutions-typed-row">
    <span className="solutions-typed-text">{typedText}</span>
    <span className="epm-typed-caret" />
  </div>
</div>

   <div className="solutions-left">
  <p>
    It all begin with you. At EPM we believe your wealth
    goes beyond money. We prioritize you, your loved ones, and your
    business, ensuring they remain at the heart of our every action.
    Our personalized approach helps you achieve your goals today and
    in the future.
  </p>

  <p>
    By combining deep financial insight with modern technology, we
    design strategies tailored to your evolving financial needs.
    Your dedicated manager—supported by an experienced team—guides
    you through every important decision, ensuring clarity,
    confidence, and long-term financial stability.
  </p>

  <Link to="/contact" className="solutions-link">
    START THE CONVERSATION <span>→</span>
  </Link>
</div>
          </div>
        </section>

        <section className="decision-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="decision-container">
            <div className="decision-top-row">
              <div className="decision-heading-wrap">
                {/* <span className="decision-mini-label">SERVICES</span> */}
                <h2 className="decision-heading">
                  Financial Decisions Made Simpler
                </h2>
              </div>

              <div className="decision-intro"></div>
            </div>

            <div className="decision-grid">
              {features.map((item) => (
                <div
                  className="decision-card"
                  key={item.id}
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className="decision-card-bg"></div>
                  <div className="decision-card-dark-layer"></div>
                  <div className="decision-card-blur-panel"></div>

                  <div className="decision-card-content">
                    {item.meta && (
                      <span className="decision-card-meta">{item.meta}</span>
                    )}
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}


                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vault-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="vault-top-grid">
            <div className="vault-left-panel">
              
              <h2 className="vault-heading">
                Your Access To
                <br />
                Rich Insights
              </h2>

              <p className="vault-description">
                From experienced partners at the forefront of today&apos;s
                financial trends and beyond.
              </p>

            </div>

            <div
              className="vault-featured-card"
              onClick={() => setSelectedArticle(featuredArticle)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={orbitImg}
                alt="Financial Stress Workplace"
                className="vault-featured-image"
                width="1200"
                height="700"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="vault-bottom-grid">
            {bottomArticles.map((item, index) => (
              <article
                className={`vault-article-card ${index === 0 ? "first-vault-card" : ""
                  }`}
                key={item.id}
                onClick={() => setSelectedArticle(item)}
              >
                <div className="vault-article-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="1200"
                    height="700"
                    loading="lazy"
                    decoding="async"
                    className={`vault-article-image ${index === 0 ? "fit-image" : ""
                      }`}
                  />
                </div>

                <div className="vault-article-content">
                  <span className="vault-article-type">{item.type}</span>
                  <h4>{item.title}</h4>
                  <p>{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="awards-showcase-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="awards-bg-glow awards-bg-glow-left"></div>
          <div className="awards-bg-glow awards-bg-glow-right"></div>
          <div className="awards-grid-pattern"></div>

          <div className="awards-showcase-container">
            <div className="awards-showcase-top">
              {/* <span className="awards-mini-label">AWARDS & MILESTONES</span> */}

              <h2 className="awards-main-heading">
                Journey driven by
                <br />
                Results
              </h2>

              <p className="awards-main-description">{activeData.subtitle}</p>

              <div className="awards-highlight-card">
                <span className="awards-highlight-year">{activeData.year}</span>
                <h3>{activeData.title}</h3>
                <div className="awards-badge-icon">{activeData.badge}</div>
                <span className="awards-brand">{activeData.brand}</span>
              </div>

              <div className="awards-timeline">
                {awardsData.map((item) => (
                  <button
                    key={item.year}
                    className={`awards-year-btn ${activeYear === item.year ? "active" : ""
                      }`}
                    onClick={() => setActiveYear(item.year)}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="awards-gallery-section">
            <div className="awards-gallery-head">
              <span>RECOGNITION GALLERY</span>
              <h4>Moments of Excellence</h4>
            </div>

            <div className="awards-gallery-marquee">
              <div className="awards-horizontal-scroll-track">
                {/* {duplicatedGalleryImages.map((img, index) => (
                  <div className="awards-gallery-card" key={index}>
                    <img
                      src={img}
                     alt="EPM Award"
                      width="1200"
                      height="700"
                      loading="lazy"
                      decoding="async"
                    />

                  </div>
                ))} */}
                {duplicatedGalleryImages.map((img, index) => (
                  <div className="awards-gallery-card" key={index}>
                    <img
                      src={img}
                      alt="EPM Award"
                      width="1200"
                      height="700"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="core-values-section epm-reveal-section epm-animate epm-overlap-panel">
          <div className="core-values-container">
            <div className="core-values-top">
              <div className="core-values-top-left">
                <span className="core-values-label">CORE VALUES</span>
                <h2 className="core-values-heading">We believe in RISK</h2>
              </div>
            </div>

           <div className="core-values-grid">
  {coreValuesData.map((item, index) => (
    <div
      className={`core-value-card core-value-card-${index + 1}`}
      key={item.id}
    >
     <div className="core-value-image-wrap">
  <img
    src={item.image}
    alt={item.title}
    width="1200"
    height="700"
    loading="lazy"
    decoding="async"
    className="core-value-image"
  />
  <div className="core-value-image-overlay"></div>
  <span className="core-value-letter">{item.letter}</span>
</div>

                  <div className="core-value-content">
                    <span className="core-value-title">{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="testimonials-luxury-section epm-animate epm-overlap-panel"
          ref={sectionRef}
        >
          <span className="testimonials-orb testimonials-orb-1"></span>
          <span className="testimonials-orb testimonials-orb-2"></span>

          <div className="testimonials-luxury-container">
            <div className="testimonials-luxury-header">
              <span className="testimonials-mini-label">
                CLIENT TESTIMONIALS
              </span>
              <h2>PEOPLE ARE TALKING</h2>
            </div>

            <div
              className="testimonials-luxury-card"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="testimonials-card-glow"></div>
              <div className="testimonials-card-noise"></div>

              <div className="testimonials-card-grid">
                <div
                  className="testimonials-client-image-side"
                  ref={imageWrapRef}
                >
                  <div className="testimonials-client-image-wrap">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      width="1200"
                      height="700"
                      loading="lazy"
                      decoding="async"
                      className="testimonials-client-image"
                    />
                    <span className="testimonials-image-accent">✦</span>
                  </div>

                  <div className="testimonials-client-info">
                    <h3>{currentTestimonial.name}</h3>
                    <p>{currentTestimonial.role}</p>
                  </div>
                </div>

                <div className="testimonials-content-side" ref={quoteRef}>
                  <div className="testimonials-quote-wrap">
                    <div className="testimonials-quote-layer">
                      <span className="testimonials-premium-quote">“</span>
                      <p className="testimonials-main-quote">
                        {currentTestimonial.quote}
                      </p>
                    </div>
                  </div>

                  <div className="testimonials-progress-bar">
                    <span
                      className="testimonials-progress-fill"
                      key={activeTestimonial}
                    ></span>
                  </div>

                  <div className="testimonials-dots-row" ref={dotsRef}>
                    {testimonialsData.map((item, index) => (
                      <button
                        key={item.id}
                        className={`testimonials-dot ${activeTestimonial === index ? "active" : ""
                          }`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Show testimonial ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="epm-article-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="epm-article-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="epm-article-modal-close" onClick={() => setSelectedArticle(null)} aria-label="Close  modal">
              &times;
            </button>
            <div className="epm-article-modal-header">
              <span className="epm-article-modal-type">{selectedArticle.type || "ARTICLE"}</span>
              {selectedArticle.date && <span className="epm-article-modal-date">{selectedArticle.date}</span>}
              {selectedArticle.meta && <span className="epm-article-modal-meta">{selectedArticle.meta}</span>}
            </div>
            <h2 className="epm-article-modal-title">{selectedArticle.title}</h2>
            {selectedArticle.image && (
              <div className="epm-article-modal-image-wrap">
                <img src={selectedArticle.image} alt={selectedArticle.title} />
              </div>
            )}
            <div className="epm-article-modal-body">
              {selectedArticle.content ? (
                selectedArticle.content.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p>{selectedArticle.desc}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
