import React from "react";
import FlipCard from "./FlipCard";
import Slider from "react-slick";
import AnimatedBackground from "./AnimatedBackground";
export default function Programs() {
    const settings = {
    dots: true,
    arrows: true,   // ✅ enable arrows
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };


  const programs = [
    {
      img: "/images/bootcamp.png",
      title: "Intensive Bootcamp",
      duration: "3 Months",
      reviews: "800",
      details: "Accelerated full-stack, DevOps, and deployment in 12 weeks. Built for career switchers."
    },
    {
      img: "/images/mentorship.png",
      title: "Mentorship Program",
      duration: "6 Months",
      reviews: "600",
      details: "One-to-one guidance, weekly check-ins, project reviews and networking."
    },
    {
      img: "/images/workshop.png",
      title: "Weekend Workshops",
      duration: "2 Months",
      reviews: "400",
      details: "Hands-on sessions in AI, Cloud & Security — perfect for busy pros."
    },
    {
      img: "/images/LAKSHYA Image.jpg",
      title: "LAKSHYA 9.0 - 90 Days DSA Series",
      duration: "3 Months",
      reviews: "880 Reviews",
      details: {
        whatYouGet: [
            "Certificate on Completion",
            "Mock Interviews",
            "1:1 Live Session",
            "Career Guidance"
        ],
        finalResult: [
          "Become a FullStack Developer",
          "Master frontend & backend technologies",
          "Build complete applications",
          "independently"
        ]
      }
    },
    {
      img: "/images/UDAAN_Pro.jpg",
      title: "UDAAN Pro",
      duration: "3 Months",
      reviews: "880 Reviews",
      details: {
        whatYouGet: ["Certificate on Completion",
            "Mock Interviews",
            "1:1 Live Session",
            "Career Guidance"
        ],
        finalResult: ["Become an expert in your field",
          "Master all the technologies you need",
          "Industry Readiness Programs"
        ]
      }
    },
    {
      img: "/images/Tech_Writing_Course.jpg",
      title: "Technical Writing",
      duration: "5-6 Months",
      reviews: "1,880 Reviews",
      details: {
        whatYouGet: [
            "Certificate on Completion",
            "Mock Interviews",
            "1:1 Live Session",
            "Career Guidance"
        ],
        finalResult: [
          "Master the art of clear, concise and impactful Documentation",
          "Professional Writing Techniques",
          "Career Guidance."
        ]
      }
    }
  ];

  return (
    <section className="special-programs" id="programs" aria-labelledby="programs-title">
      <AnimatedBackground/>
      <h2 id="programs-title">Special Programs</h2>
      
      <Slider {...settings}>
        {programs.map((program, i) => (
          <FlipCard
            key={i}
            frontImg={program.img}
            title={program.title}
            duration={program.duration}
            reviews={program.reviews}
            details={program.details}
            btnText="Join Now"
          />
        ))}
      </Slider>
      
    </section>
  );
}
