import { useNavigate } from "react-router-dom";
import { FiMapPin, FiClock, FiPhone, FiMail } from "react-icons/fi";

import workoutLady from "../assets/workoutLady.png"
/* -------------------- DATA -------------------- */

const contactDetails = [
  {
	id: 1,
	icon: FiMapPin,
	title: "GYM STUDIO",
	text: "34, Eyinle Junction, Odogunyan, Sagamu Exp Way, Ikorodu, Lagos.",
  },
  {
	id: 2,
	icon: FiClock,
	title: "WORKING HOURS",
	text: "Monday - Saturday: 7:00am - 12:00am | Sunday: Closed",
  },
  {
	id: 3,
	icon: FiPhone,
	title: "CALL US",
	text: "+234 8012345678, +234 9123456789",
  },
  {
	id: 4,
	icon: FiMail,
	title: "SEND MAIL",
	text: "ValeFit@example.com",
  },
];

const faqs = [
  {
	id: 1,
	question: "Are the workouts suitable for beginners?",
	answer:
	  "Find answers to the most commonly asked questions about our services, features, and membership.",
  },
  {
	id: 2,
	question: "Can I exercise at home without equipment?",
	answer:
	  "Absolutely. Many of our routines are designed for home workouts using body weight or minimal equipment.",
  },
  {
	id: 3,
	question: "How often should I work out?",
	answer:
	  "We recommend at least 3–5 sessions per week, depending on your goals and fitness level. Rest days are included in your plan.",
  },
  {
	id: 4,
	question: "Do I need to follow a specific diet?",
	answer:
	  "While we provide nutrition tips and guides, you’re free to choose what works best for your body. We focus on balanced, healthy eating.",
  },
  {
	id: 5,
	question: "Is there a free trial available?",
	answer:
	  "Yes, we offer a 7-day free trial so you can explore the features and see if it’s right for you before committing.",
  },
  {
	id: 6,
	question: "How do I track progress?",
	answer:
	  "You can log your workouts, set goals, and monitor improvements through your personal dashboard in the app.",
  },
  {
	id: 7,
	question: "Can I cancel my membership anytime?",
	answer:
	  "Yes, our memberships are flexible. You can cancel or pause your subscription at any time from your account settings.",
  },
  {
	id: 8,
	question: "Do you offer personal coaching?",
	answer:
	  "Yes, premium members have access to one-on-one coaching sessions and personalized feedback from certified trainers.",
  },
];

/* -------------------- COMPONENT -------------------- */

export default function Contact() {
  const navigate = useNavigate();

  return (
	<div className="w-full min-h-screen container mx-auto flex flex-col items-center gap-10 px-6 py-12">
	  {/* ---------- HEADER ---------- */}
	  <section className="w-full max-w-2xl mr-auto">
		<p className="text-primary text-sm">GET IN TOUCH</p>
		<h2 className="font-bold text-3xl md:text-5xl lg:text-6xl mt-2">
		  Our Contact Details
		</h2>
		<p className="text-base md:text-lg lg:text-xl text-[#071013] mt-4 md:mt-2">
		  Reach out anytime and our team will get back to you promptly. Your
		  health and satisfaction are our priority.
		</p>
	  </section>

	  {/* ---------- CONTACT INFO ---------- */}
	  <section className="w-full grid gap-6 md:grid-cols-2">
		{contactDetails.map(({ id, icon: Icon, title, text }) => (
		  <div key={id} className="flex items-start gap-4">
			{/* Icon */}
			<div className="w-full max-w-12 h-12 rounded-md bg-primary flex items-center justify-center">
			  <Icon className="text-black text-xl" />
			</div>

			<div>
			  <h3 className="font-bold text-lg">{title}</h3>
			  <p className="text-sm md:text-base text-secondary mt-1">{text}</p>
			</div>
		  </div>
		))}
	  </section>

	  {/* ---------- IMAGE ---------- */}
	  <figure className="w-full">
		<img
		  src={workoutLady}
		  alt="Workout"
		  className="w-full h-auto md:h-[420px] aspect-16/12 object-cover rounded-xl"
		/>
	  </figure>

	  {/* ---------- FAQ HEADER ---------- */}
	  <section className="w-full">
		<h2 className="font-bold text-3xl md:text-5xl lg:text-6xl max-w-xl">
		  Got Any Questions? We Got You!!
		</h2>
		<p className="text-primary text-base md:text-lg mt-4">
		  Find answers to the most commonly asked questions about our services
		  and membership.
		</p>
	  </section>

	  {/* ---------- FAQ CARDS ---------- */}
	  <section className="w-full grid gap-4 md:gap-6 md:grid-cols-2">
		{faqs.map(({ id, question, answer }) => (
		  <div
			key={id}
			className="bg-[#071013] hover:bg-primary transition rounded-xl p-6"
		  >
			<h4 className="text-white font-semibold text-lg">{question}</h4>
			<p className="text-sm md:text-base text-[#F3EFF5] mt-3">{answer}</p>
		  </div>
		))}
	  </section>

	  {/* ---------- CTA ---------- */}
	  <section className="w-full bg-primary rounded-xl text-center p-8 md:p-12">
		<h4 className="font-bold text-xl md:text-4xl text-white">
		  Transform Your Fitness Journey
		</h4>
		<p className="text-white text-sm md:text-lg mt-4">
		  Get personalized guidance to achieve your fitness goals with expert
		  support.
		</p>

		<button
		  onClick={() => navigate("/")}
		  className="mt-8 px-10 py-3 border border-secondary text-white hover:bg-secondary/80 transition"
		>
		  Sign Up
		</button>
	  </section>
	</div>
  );
}
