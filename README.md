# quick-links-tracker

## Summary

Once the app is deployed, it will log every quicklink user click activity to SP list.
🔁 Project Summary: Quick Links Tracker (SPFx Extension)
✅ What We Built:
An SPFx Application Customizer (extension) to log Quick Links clicks on SharePoint Online pages.
✅ What It Logs:
Title of the clicked link (captured from Quick Links).
Link URL (actual destination URL).
ClickedTime (ISO timestamp).
User (current user's display name or email).
✅ How It Works:
Listens for clicks on elements with data-automation-id="quick-links-item-title" (used by default Quick Links).
Traverses to the parent <a> element to fetch the actual link URL.
Logs all details to a custom SharePoint list: ClickAnalytics.
✅ Optimized for:
Performance (minimal event listener, async logging).
Production readiness (error handling, non-blocking, efficient).
Site-wide flexibility (works across all pages with Quick Links).
📂 Key Files:
QuickLinksTrackerApplicationCustomizer.ts
Connected to ClickAnalytics list with fields: Title, LinkUrl, ClickedTime, User

![image](https://github.com/user-attachments/assets/638e5cb1-fec6-4b81-b51a-7e8f3b5f7212)


[picture of the solution in action, if possible]

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.19.0-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
