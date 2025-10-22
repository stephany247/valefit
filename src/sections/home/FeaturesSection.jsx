import feature1 from "../../assets/personalized-workout-plans.png";
import feature2 from "../../assets/progress-tracker.png";
import feature3 from "../../assets/recovery-tools.png";
import feature4 from "../../assets/meal-suggestions.png";
import feature5 from "../../assets/live-sessions.png";
import feature6 from "../../assets/integration-with-wearables.png";

const features = [
  { image: feature1, title: "Personalized Workout Plans", description: "Tailored routines based on fitness level, health conditions, goals, and preferences." },
  { image: feature2, title: "Progress Tracker", description: "Track workouts, goals, weight, mood, and milestones in one dashboard." },
  { image: feature3, title: "Mindfulness & Recovery Tools", description: "Breathing exercises, guided meditations, and sleep tips." },
  { image: feature4, title: "Nutrition & Meal Suggestions", description: "Basic food guides or snack suggestions that support energy and recovery." },
  { image: feature5, title: "Expert Q&A or Live Sessions", description: "Weekly health talks or AMA (Ask Me Anything) with fitness coaches or physiotherapists." },
  { image: feature6, title: "Integration with Wearables", description: "Sync with smartwatches, fitness bands, or Apple/Google Health." },
];

function FeaturesSection() {
  return (
    <section className="bg-primary text-muted py-6">
      <div className="container grid md:grid-cols-2 gap-12">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto rounded-xl aspect-3/2 object-[100%_15%] object-cover"
            />
            <h3 className="mt-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
