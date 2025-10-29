import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";

function Testimonials() {
  return (
    <section className="py-12 px-6 bg-black text-center">
      <h2 className="text-4xl font-bold text-primary mb-4">Testimonials</h2>
      <p className="text-white mb-10 max-w-xl mx-auto">
        See how others transformed their fitness with personalized plans that
        actually work.
      </p>

      <div className="relative max-w-md mx-auto bg-muted shadow-md rounded-2xl p-6">
        {/* Opening quote icon */}
        <TfiQuoteRight className="absolute -top-4 right-4 text-primary font-bold text-3xl" />
        {/* Closing quote icon */}
        <TfiQuoteLeft className="absolute -bottom-4 left-4 text-primary font-bold text-3xl" />
        <q className="italic text-black mb-6">
          I never thought I could stick to a workout plan, but this app made it
          simple and personalized. Now I actually look forward to my workouts.
        </q>
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-primary">Tolulope Ajayi</h3>
          <p className="text-gray-500">
            Age: <span className="font-semibold">45</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
