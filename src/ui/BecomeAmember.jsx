import femalePressup from "../assets/female-pressup.png"

export default function BecomeAmember() {
  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <div className="w-full container mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        {/* Text content */}
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="flex flex-col gap-2">
            <p className="text-base md:text-lg font-semibold text-[#F16436]">
              HOW TO JOIN
            </p>

            <h4 className="font-bold text-lg sm:text-2xl lg:text-4xl text-[#071013]">
              Are You Ready To Become A Member? Click The “Join Now” Button!
            </h4>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-[#071013] text-[#F16436] font-semibold text-sm rounded-xl">
              Join Now
            </button>

            <button className="px-6 py-2 border border-[#F16436] text-[#071013] text-sm rounded-xl">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <figure className="w-full max-w-md h-auto rounded-2xl overflow-hidden">
          <img
            src={femalePressup}
            alt="Membership"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
