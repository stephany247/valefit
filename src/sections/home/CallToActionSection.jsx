import Button from "../../components/Button";

function CallToActionSection() {
  return (
    <section className="p-6">
      <div className="container relative bg-primary text-muted py-16 px-6 rounded-xl text-center space-y-6">
        <div className="relative z-10 max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Transform Your Fitness Journey
          </h2>
          <p className="text-base sm:text-lg">
            Get personalized guidelines to achieve your fitness goals with our
            expert consultations.
          </p>
        </div>
        <Button variant="outline" className="px-10">
          Sign Up
        </Button>
      </div>
    </section>
  );
}

export default CallToActionSection;
