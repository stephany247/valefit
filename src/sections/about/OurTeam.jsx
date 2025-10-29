import Button from "../../components/Button";
import { teamMembers } from "../../data/teamMembers";

function OurTeam() {
  return (
    <section className="py-8 md:py-12 bg-primary">
      <div className="container relative z-0 mx-auto text-center">
        <h2 className="relative -mb-6 z-10 text-xl md:text-3xl font-bold bg-muted p-2 rounded-lg w-fit mx-auto">
          Meet Our Amazing Team
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg border border-secondary rounded-2xl px-2 md:px-4 pb-3 md:pb-6 pt-8 md:pt-10">
          At Valefit, we believe that a strong support system is key to
          achieving your fitness goals. Our dedicated team of fitness
          professionals, nutritionists, and wellness enthusiasts is here to
          guide you every step of the way.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full aspect-square mx-auto rounded-2xl object-cover mb-4"
                />
              )}
              <div className="space-y-1 rounded-r-2xl p-3 text-left md:w-8/10 absolute bottom-4 bg-muted">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-secondary font-medium">{member.role}</p>
                <Button className="text-secondary! mt-0!">
                  {member.phone}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
