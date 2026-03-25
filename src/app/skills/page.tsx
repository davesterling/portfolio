import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SkillsSection({
                         children,
                         ...props
                       }: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
      <Section {...props}>
        <div className="space-y-16">{children}</div>
      </Section>
  )
}

function Skill({
                 title,
                 description,
                 event,
                 cta,
                 href,
               }: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
      <Card as="article">
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
        <Card.Eyebrow decorate>{event}</Card.Eyebrow>
        <Card.Description>{description}</Card.Description>
        <Card.Cta>{cta}</Card.Cta>
      </Card>
  )
}

export const metadata: Metadata = {
  title: 'Skills',
  description:
      'Core technical skills across full stack software engineering, cloud infrastructure, and industrial automation.',
}

export default function Skills() {
  return (
      <SimpleLayout
          title="Technical skills across software, cloud, and automation."
          intro="My experience spans full stack development, AWS infrastructure, robotics, CNC systems, and production engineering, with a focus on building scalable, real-world systems."
      >
        <div className="space-y-20">
          <SkillsSection title="Software Engineering">
            <Skill
                href="#"
                title="Full Stack Development"
                description="Laravel, Vue 3, Next.js, React, Node.js, PHP, JavaScript, REST APIs, GraphQL, authentication systems, and scalable backend architecture."
                event="Application Development"
                cta="View work"
            />
            <Skill
                href="#"
                title="Frontend Systems"
                description="Vue Composition API, Pinia state management, real-time UI systems, dynamic forms, validation pipelines, and high-performance interfaces."
                event="Frontend Engineering"
                cta="View work"
            />
            <Skill
                href="#"
                title="Backend Architecture"
                description="Multi-tenant SaaS design, relational data modeling, RBAC with Spatie, queue systems, observers, and event-driven workflows."
                event="Backend Systems"
                cta="View work"
            />
          </SkillsSection>

          <SkillsSection title="Cloud & DevOps">
            <Skill
                href="#"
                title="AWS Infrastructure"
                description="S3, CloudFront, Route 53, SES, IAM, Lambda, EC2, Lightsail with secure, scalable, cloud-native architecture and storage systems."
                event="Cloud Systems"
                cta="View work"
            />
            <Skill
                href="#"
                title="CI/CD & Deployment"
                description="GitHub Actions pipelines, automated deployments, staging/production environments, rollback strategies, and release workflows."
                event="DevOps"
                cta="View work"
            />
            <Skill
                href="#"
                title="Linux & Networking"
                description="Server provisioning, environment isolation, system security, DNS configuration, Cloudflare integration, and performance optimization."
                event="Infrastructure"
                cta="View work"
            />
          </SkillsSection>

          <SkillsSection title="Automation & Manufacturing">
            <Skill
                href="#"
                title="Robotics & PLC Automation"
                description="ABB robotics, RobotStudio simulation, multi-axis robotic welding cells, machine tending, and automation system integration."
                event="Automation Engineering"
                cta="View work"
            />
            <Skill
                href="#"
                title="CNC & CAM Systems"
                description="CNC programming, CAM toolpaths, Bridgeport VMC systems, Mitsubishi laser cutting, Sodick EDM, and machining optimization."
                event="Manufacturing"
                cta="View work"
            />
            <Skill
                href="#"
                title="Electrical & Machine Control"
                description="Machine controls, wiring, commissioning, troubleshooting, and integration of automation systems into production environments."
                event="Controls Engineering"
                cta="View work"
            />
          </SkillsSection>

          <SkillsSection title="Design & Engineering">
            <Skill
                href="#"
                title="CAD & Product Design"
                description="AutoCAD, Autodesk Inventor, Fusion 360, parametric modeling, assemblies, and production-ready design workflows."
                event="Design Engineering"
                cta="View work"
            />
            <Skill
                href="#"
                title="GD&T & Production Drawings"
                description="Detailed engineering drawings, tolerance management, manufacturing documentation, and patent-ready technical illustrations."
                event="Mechanical Engineering"
                cta="View work"
            />
            <Skill
                href="#"
                title="Product Development"
                description="End-to-end product lifecycle from concept to production, SOP creation, and scalable manufacturing system design."
                event="Product Engineering"
                cta="View work"
            />
          </SkillsSection>

          <SkillsSection title="Systems & Strategy">
            <Skill
                href="#"
                title="Systems Architecture"
                description="Designing scalable systems across software and manufacturing, connecting data, workflows, and infrastructure."
                event="Architecture"
                cta="View work"
            />
            <Skill
                href="#"
                title="Performance & Optimization"
                description="Caching strategies, query optimization, system efficiency, and reducing overhead across frontend and backend systems."
                event="Optimization"
                cta="View work"
            />
            <Skill
                href="#"
                title="SEO & Growth Systems"
                description="Programmatic SEO, large-scale content generation, indexing strategies, and analytics-driven traffic growth."
                event="Growth Engineering"
                cta="View work"
            />
          </SkillsSection>
        </div>
      </SimpleLayout>
  )
}