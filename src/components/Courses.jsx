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
      title: "AI Tools",
      duration: "2-3 Months",
      reviews: "500",
      details: "Learn cutting-edge AI tools for automation, content creation, and workflow optimization."
    },
    {
      img: "/images/Data_Analytics.jpg",
      title: "Data Analytics",
      duration: "3–4 Months",
      reviews: "800",
      details: "Master Excel, SQL, and visualization tools to analyze and present data effectively."
    },
    {
      img: "/images/Web_Development.jpg",
      title: "Web Development",
      duration: "4–5 Months",
      reviews: "1,100",
      details: "Build responsive websites using HTML, CSS, JavaScript and modern frameworks."
    },
    {
      img: "/images/FullStack.jpg",
      title: "Full Stack Development",
      duration: "5–6 Months",
      reviews: "1,200",
      details: "End-to-end development with front-end, back-end and databases — become job-ready."
    },
    {
      img: "/images/IRP.jpg",
      title: "Industry Readiness Program",
      duration: "6 Months",
      reviews: "900",
      details: "Gain real-world project experience, teamwork, Git workflows, and mock interviews."
    },
    {
      img: "/images/Python.jpg",
      title: "Python Programming",
      duration: "2–3 Months",
      reviews: "1,000",
      details: "Beginner to advanced Python — data structures, OOP, APIs, and practical projects."
    },
    {
      img: "/images/Soft_Skills_Training.jpg",
      title: "Soft Skills Training",
      duration: "2 Months",
      reviews: "700",
      details: "Sharpen communication, teamwork, leadership, and problem-solving skills."
    },
    {
      img: "/images/UI UX.jpg",
      title: "UI/UX Design",
      duration: "3 Months",
      reviews: "600",
      details: "Learn user research, wireframing, prototyping, and design tools for great interfaces."
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
