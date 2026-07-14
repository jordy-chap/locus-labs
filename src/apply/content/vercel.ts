import type { CoverLetterContent, CvContent } from '../types'

/**
 * Vercel application content — Account Executive, Majors - Install Base (APAC).
 *
 * ✏️  This is the file to edit when you want to change the copy. It's plain
 * data: edit the strings, add/remove bullets or paragraphs, and the page
 * updates. Keep the shape the same.
 *
 * Copy is transcribed word-for-word from Jordan's source doc — do not edit it.
 */

const CONTACT = [
  'Sydney, Australia',
  '+61 402 158 811',
  'chapman.jordan@outlook.com',
]

export const vercelCoverLetter: CoverLetterContent = {
  name: 'Jordan Chapman',
  contact: CONTACT,
  title: 'Cover Letter - Account Executive, Majors - Install Base (APAC)',
  paragraphs: [
    'I’m writing to express my interest in the Account Executive, Majors - Install Base (APAC) role at Vercel. After reading your job description, I identified three key reasons why I’ll drive meaningful product-led growth for Vercel within Australia’s largest organisations.',
    {
      lead: 'I already work inside them.',
      text: 'At Salesforce, our strategic enterprise segment spans Australia’s largest companies; I personally lead martech and data solutions for 11 of its 25 accounts - specifically Australia’s largest banks, insurers, and telcos. My job is expansion in everything but title: mapping whitespace, building the sponsors to back new use cases, and converting adoption into consumption revenue - often starting from a single POC. Over the past two and a half years that approach has influenced US$13M in ACV - #1 in region, 60% ahead of my closest peer. More recently this revenue has come from product-led growth, not just pre-sales. For example, last year it included US$1.2M in new consumption at a major health insurer, grown from a low base, with a further US$2M since committed against AI and messaging use cases we designed together - both on AWS Marketplace paper. I build the bills of materials and pricing models behind those deals and lead the stakeholder conversations that carry them. I don’t own the quota - everything around it, I’ve done.',
    },
    {
      lead: 'I have been the buyer.',
      text: 'As a Product Owner at Macquarie, my teams’ velocity and outcomes were greatly enhanced when we adopted continuous delivery while our peers stayed aligned to sprint release windows. I understand the pressure these teams are now under to deliver at that pace - and what Vercel does to enable that cadence. I can articulate the value of preview deployments, instant rollbacks, shipping daily instead of per release window with the credibility of a peer. And having competed for priority and resources within these organisations, I know how to frame the business impact of the technical problem.',
    },
    {
      lead: 'I am the user.',
      text: 'I build and run projects on Vercel today - from a multi-tenant SaaS platform to the autonomous agent that operates the marketing functions of my company and a client. I can speak to the developer experience and the AI Cloud as a user - and the vendor lock-in, interoperability, and build-vs-buy objections that conservative, builder-heavy Australian organisations raise are the same ones I neutralise daily, for the same buyers, at Salesforce. Where this role asks for someone who can hold a technical conversation without a solution engineer in the room: I am the solution engineer, and I ship.',
    },
    'I’m currently tasked with localising Salesforce’s newest go-to-market for headless martech in Australia, and I have specific ideas for how to position Vercel in this market. Let me show you how I’d grow these accounts.',
  ],
}

export const vercelCv: CvContent = {
  name: 'Jordan Chapman',
  contact: CONTACT,
  profile:
    'Principal Solution Engineer at Salesforce covering Australia’s largest banks, insurers, and telcos - #1 revenue impact in region three years running, focused on consumption expansion in strategic accounts. Co-founder and Vercel user.',
  sections: [
    {
      heading: 'Experience',
      entries: [
        {
          title: 'Principal Solution Engineer — Strategic Accounts',
          org: 'Salesforce',
          dates: 'Jul 2021 – Present',
          location: 'Sydney',
          summary: 'Martech & Data · Enterprise Financial Services & Telco',
          intro: [
            'I lead martech and data solutions for 11 of the 25 accounts in Salesforce Australia’s strategic enterprise segment - five of Australia’s six largest banks, major insurers, and our largest telco customer - with a focus on adoption and expansion of consumption-based products.',
            {
              lead: 'Performance:',
              text: 'highest revenue impact of 100+ Solution Engineers in-region across three consecutive FYs - US$4.2M ACV influenced last FY (#1 in region), US$13M across the past two and a half years (#1 in region). FY25 Top Performer Award. FY26 Peak Performers Club.',
            },
          ],
          bullets: [
            'Grew consumption at a major health insurer by US$1.2M last FY; the customer has since committed a further US$2M against AI and messaging use cases we co-designed in Q1. Both deals transacted through AWS Marketplace.',
            'Own adoption and utilisation of Salesforce’s consumption products (Agentforce, Data Cloud) across my accounts - typically by shipping pre-built pilots and POCs with customer teams to take new use cases from zero to production.',
            'Build bills of materials and translate customer use cases into Salesforce’s consumption pricing model to support renewal and expansion conversations within an ELA framework.',
            'Advise CMOs, CTOs, CDOs, and CAIOs across the accounts, and act as first-line security and compliance lead for regulated evaluations.',
            'Created and own the financial services and telco go-to-market for Salesforce’s headless martech capability - presented it at two of Salesforce’s largest Australian events this year, with the content since scaled into SDR plays and demo assets used across the region.',
            'Advise sales leadership on deal qualification framed around Salesforce’s MEDDPICC-adjacent scorecards, and co-sell regularly with AWS (including the largest ever AWS marketplace deal in JAPAC by total value), the major consultancies, and agency networks including WPP and Dentsu.',
          ],
        },
        {
          title: 'Co-Founder',
          org: 'Oi (oioioi.ai)',
          dates: 'December 2025 – Present',
          summary: 'AI context governance platform',
          intro: [
            'Oi enables organisation-wide AI adoption, making governed, portable capabilities - connections, contexts, workflows, and guardrails - available across every tool and to every employee. I lead product, growth, and go-to-market.',
          ],
          bullets: [
            'Three organisations committed to paid pilots across fitness, construction, and real estate - each converted through an industry-specific “solution kit” go-to-market I designed and sold, mapping Oi’s capabilities to each vertical’s core business drivers.',
            'Built the platform’s repeatable sales motion as vertical solution kits across six industries.',
            'Built and operate the company’s marketing as an autonomous agent pipeline - briefs approved in Linear, executed end-to-end by an agent hosted on Vercel, running Oi’s native contexts, guardrails, and workflows.',
          ],
        },
      ],
    },
    {
      heading: 'Earlier Experience',
      entries: [
        {
          title: 'Product Owner',
          org: 'Macquarie Group',
          dates: 'Jul 2018 – Jul 2021',
          location: 'Sydney',
          summary: 'Personal banking app, automotive e-commerce, asset finance tools',
          bullets: [
            'Owned product strategy and delivery across digital properties; shipped increased payment limits in the banking app, reducing inbound call volume 45%.',
            'Increased enquiries 4x with no increase in marketing budget; reduced website bounce rate 62%.',
            'Managed commercial relationships with vendors, data suppliers, and licensees to deliver end-to-end customer journeys.',
          ],
        },
        {
          title: 'Digital Marketing & Product Manager',
          org: 'Macquarie Group',
          dates: 'May 2015 – Jul 2018',
          location: 'Sydney',
          summary: 'Asset Finance',
          bullets: [
            'Built the division’s martech function from IC to a team of four; architected a multi-brand engagement program on Salesforce driving >20% uplift in direct sales retention. The program remains in place today.',
            'Designed an automated digital finance sales process across multiple brands, integrating quote and application forms, external APIs, Salesforce CRM and Marketing Cloud, and DocuSign.',
          ],
        },
        {
          title: 'Consultant',
          org: 'Bienalto (now Wunderman Thompson)',
          dates: 'Dec 2012 – May 2015',
          bullets: [
            'Consultative CRM, marketing automation, and conversion optimisation projects across enterprise clients.',
          ],
        },
      ],
    },
  ],
  education: {
    heading: 'Education',
    entries: [
      {
        qualification: 'Bachelor of Psychology & Bachelor of Business (Marketing)',
        institution: 'Queensland University of Technology',
      },
    ],
  },
}
