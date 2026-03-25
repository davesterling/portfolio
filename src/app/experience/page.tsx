import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ExperienceSection({
                             children,
                             ...props
                           }: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
      <Section {...props}>
        <ul role="list" className="space-y-16">
          {children}
        </ul>
      </Section>
  )
}

function Role({
                title,
                company,
                location,
                dates,
                children,
              }: {
  title: string
  company: string
  location: string
  dates: string
  children: React.ReactNode
}) {
  return (
      <Card as="li">
        <Card.Title as="h3">
          {title} · {company}
        </Card.Title>
        <Card.Eyebrow>{location} · {dates}</Card.Eyebrow>
        <Card.Description>{children}</Card.Description>
      </Card>
  )
}

export const metadata = {
  title: 'Experience',
  description: 'My professional experience across software engineering and industrial automation.',
}

export default function Experience() {
  return (
      <SimpleLayout
          title="Experience"
          intro="My background spans full stack software development and industrial automation, working across cloud systems, robotics, and manufacturing environments."
      >
        <div className="space-y-20">
          <ExperienceSection title="Professional Experience">
            <Role
                title="Lead Full Stack Engineer"
                company="Digital Firehouse"
                location="Weedsport, NY"
                dates="05/2023 - 01/2026"
            >
              Built and scaled a multi-tenant platform supporting tens of thousands of users using Laravel, Vue, and AWS. Designed real-time systems for call logging, notifications, and communication, integrating cloud infrastructure including S3, CloudFront, Route 53, SES, and Lightsail. Led full-stack architecture, frontend systems, backend APIs, and deployment pipelines.
            </Role>

            <Role
                title="Automation Engineer"
                company="Leonardi Manufacturing Inc"
                location="Weedsport, NY"
                dates="03/2020 - 01/2025"
            >
              Developed and deployed industrial automation systems including ABB robotics, CNC machining processes, and high-throughput welding cells. Programmed robotic machine tending systems, CNC laser operations, and multi-axis robotic welding environments. Integrated automation with production workflows to improve efficiency and throughput.
            </Role>

            <Role
                title="CAD Engineer"
                company="Leonardi Manufacturing"
                location="Weedsport, NY"
                dates="06/2019 - 03/2020"
            >
              Designed and launched multiple product lines using Autodesk Inventor and AutoCAD. Created detailed production drawings with GD&T, developed SOPs, and supported manufacturing processes from design through production release. Produced patent drawings submitted through official patent processes.
            </Role>

            <Role
                title="Team Member"
                company="Auburn Movieplex 10"
                location="Auburn, NY"
                dates="12/2016 - 04/2019"
            >
              Delivered customer service in a fast-paced environment while managing daily operations and maintaining efficiency. Developed strong communication and problem-solving skills in a high-volume setting.
            </Role>
          </ExperienceSection>
        </div>
      </SimpleLayout>
  )
}