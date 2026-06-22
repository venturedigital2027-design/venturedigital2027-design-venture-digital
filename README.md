# Venture Digital Free MVP

Venture Digital is a static GitHub Pages website for an AI automation business. The MVP explains services, shows starter pricing, captures automation audit requests, and documents the manual delivery process without paid tools.

## Public Contact

Use this email for all public website and lead communications:

venturedigital2027@gmail.com

Do not use personal emails or unrelated company emails on the public site.

## Site Pages

- `index.html` - Homepage and primary landing page
- `services.html` - Lead Automation, Admin Automation, and AI Assistant Automation details
- `pricing.html` - Starter, Growth, and Custom package paths
- `intake.html` - Free automation audit page with Google Form placeholder
- `thank-you.html` - Confirmation page

## How to Edit Pages

This is a static website. Edit the HTML files directly and commit changes to the `main` branch.

Shared styling lives in:

- `styles.css`

Shared JavaScript lives in:

- `script.js`

## Enable GitHub Pages

In GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Set Source to `Deploy from a branch`.
4. Set Branch to `main`.
5. Set Folder to `/ (root)`.
6. Save.

Expected URL:

https://venturedigital2027-design.github.io/venturedigital2027-design-venture-digital/

## Google Form Setup

Create a Google Form named:

Venture Digital Automation Audit

Recommended fields:

- Full Name
- Business Name
- Email
- Phone
- Website URL
- Industry
- Number of Employees
- Monthly Lead Volume
- Current Software Tools
- Biggest Bottleneck
- What task wastes the most time every week?
- What happens when this task is done manually?
- Do you currently use a CRM?
- What automation would help immediately?
- Estimated Budget
- How soon do you want this solved?
- Anything else we should know?

Do not ask for passwords, bank information, private client data, or API keys.

## Update the Google Form Embed URL

1. Open the Google Form.
2. Click Send.
3. Choose the embed icon.
4. Copy the iframe URL.
5. Replace the placeholder iframe URL inside `intake.html`.

## Connect Google Form to Google Sheets

Create a connected response sheet and add these manual tracking columns:

- Lead Status
- Lead Score
- Package Fit
- Priority
- Next Action
- Follow-Up Date
- Notes

Lead Status options:

- New
- Reviewed
- Qualified
- Discovery Scheduled
- Proposal Sent
- Won
- Lost
- Not Fit

Lead scoring logic:

- High = Budget $1,500+ and timeline is immediately or this month.
- Medium = Budget $500+ or clear business pain.
- Low = just researching, unclear problem, or no budget.

## Free Customer Acquisition Tracker

Create a separate Google Sheet with:

- Business Name
- Website
- Contact Name
- Email
- Industry
- Pain Hypothesis
- Date Contacted
- Follow-Up Date
- Status
- Notes

Daily prospecting targets:

- 20 local service businesses
- 20 franchise owners
- 20 real estate operators
- 20 consultants/agencies

## Cold Email Template

Subject: Quick automation idea for [Business Name]

Hi [Name],

I noticed [specific business observation].

I'm building AI workflow automations for businesses that want to reduce manual follow-up, admin work, and missed opportunities.

I had one idea for your business: [specific automation idea].

Would you be open to a free automation audit?

## Do Not Build Yet

Do not build these until demand is proven:

- User accounts
- Client dashboard
- AI agent marketplace
- Custom database
- Paid ads
- Complex backend
- Live Stripe checkout
- OpenAI API workflows
- Zapier/n8n paid workflows
- Subscription system

## Future Paid Upgrades

After the MVP generates qualified leads, consider:

- Branded domain email
- Stripe Checkout
- Real CRM
- Paid automation backend
- AI proposal generator
- Client portal
- Analytics
