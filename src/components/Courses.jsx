import React from "react";
import FlipCard from "./FlipCard";
import Slider from "react-slick";
import AnimatedBackground from "./AnimatedBackground";
export default function Courses() {
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


  const courses = [
    {
      img: "/images/AI Tools.jpg",
      title: "Master in AI Tools",
      duration: "2 Months",
      reviews: "1800 Reviews",
      details: {
        whatYouGet: [
          "Certificate on Completion",
          "Mock Interviews",
          "1:1 Live Session",
          "Career Guidance"
        ],
        finalResult: [
          "Master Top AI Platforms",
          "Boost Productivity & Skills",
          "Be Ready for",
          "Advance AI Jobs"
        ]
      }
    },
    {
      img: "/images/Data_Analytics.jpg",
      title: "Data Analytics",
      duration: "3–4 Months",
      reviews: "1300 Reviews",
      details: {
        whatYouGet: [
          "Certificate on Completion",
          "Mock Interviews",
          "1:1 Live Session",
          "Career Guidance"
        ],
        finalResult: [
          "Become a Data Analyst",
          "Master Visualization",
          "Land Analytics",
          "Bussiness Roles"
        ]
      }
    },
    {
      img: "/images/Web_Development.jpg",
      title: "Web Development",
      duration: "3–4 Months",
      reviews: "1,200 Reviews",
      details: {
        whatYouGet: [
          "Certificate on Completion",
          "Mock Interviews",
          "1:1 Live Session",
          "Career Guidance"
        ],
        finalResult: [
          "Become a Web Developer",
          "Build and Deploy Your Own Website",
          "Automate Yourself in",
          "Daily Tasks"
        ]
      }
    },
    {
      img: "/images/FullStack.jpg",
      title: "Full Stack Development",
      duration: "4–5 Months",
      reviews: "1,100 Reviews",
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
      img: "/images/IRP.jpg",
      title: "Industry Readiness Program",
      duration: "5-6 Months",
      reviews: "3,400 Reviews",
      details: {
        whatYouGet: [
          "Certificate on Completion",
          "Mock Interviews + Career Guidance",
          "1:1 Live Session",
          "Assessment to track Progress",
          "Internship Opportunity"
        ],
        finalResult: [
          "Become a Industry Ready",
          "Confident in Interview & Teamwork",
          "Ready to start your",
          "professional journey"
        ]
      }
    },
    {
      img: "/images/Python.jpg",
      title: "Python Programming",
      duration: "3–4 Months",
      reviews: "2,500 Reviews",
      details: {
        whatYouGet: [
          "Certificate on Completion",
      "Mock Interviews",
      "1:1 Live Session",
      "Career Guidance"
        ],
        finalResult: [
          "Master Python Programming",
          "Build Automate & Scripts",
          "Be Ready for most challenging roles"
      ]
      }
    },
    {
      img: "/images/Soft_Skills_Training.jpg",
      title: "Soft Skills Training",
      duration: "2-3 Months",
      reviews: "1.5k Reviews",
      details: {
    whatYouGet: [
      "Certificate on Completion",
      "Mock Interviews",
      "1:1 Live Session",
      "Career Guidance"
    ],
      finalResult: [
        "Ready for Clients facing Role",
        "Confident in Interview & Teamwork",
        "Strong Interpersonal",
        "Leadership Skills"
      ]
  }
    },
    {
      img: "/images/UI UX.jpg",
      title: "UI/UX Design",
      duration: "2-3 Months",
      reviews: "900 Reviews",
      details: {
    whatYouGet: [
      "Certificate on Completion",
      "Mock Interviews",
      "1:1 Live Session",
      "Career Guidance"
    ],
    finalResult: [
      "Become a UI/UX Designer",
      "Build Apps & Website from Scratch",
      "Create impactful User Experience"
    ]
  }
    }
  ];

  return (
    <section className="courses" id="courses" aria-labelledby="courses-title">
      
      <h2 id="courses-title">Explore Our Top Courses</h2>
      <Slider {...settings}>
        {courses.map((course, i) => (
          <FlipCard
            key={i}
            frontImg={course.img}
            title={course.title}
            duration={course.duration}
            reviews={course.reviews}
            details={course.details}
            btnText="Join Now"
          />
        ))}
      </Slider>
    </section>
  );
}
