import { MessageCircle, FileText, Plane } from "lucide-react"

export function PlanningProcess() {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "The Conversation",
      description: 'We learn about you—your tastes, fitness, curiosities, and what "immersion" truly means to you.',
    },
    {
      icon: FileText,
      number: "02",
      title: "The Proposal",
      description:
        'You receive a bespoke journey outline, a narrative document explaining the "why" behind each day\'s blend of activities.',
    },
    {
      icon: Plane,
      number: "03",
      title: "The Refinement & Embarkation",
      description:
        "We fine-tune the details together. Then, you travel seamlessly, supported by our local curator from start to finish.",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            How Your Journey Comes to Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[67%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
