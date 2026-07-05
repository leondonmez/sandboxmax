export interface CsvTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  defaultCsv: string;
}

export const csvTools: CsvTool[] = [
  {
    slug: 'convert-crm-contacts-to-json',
    metaTitle: 'Convert CRM Contacts CSV to JSON Online — Free & Private | SandboxMax',
    metaDescription:
      'Turn exported CRM contact lists into clean, typed JSON in seconds. Map columns, force data types, and minify — 100% in your browser, no upload, no signup.',
    toolTitle: 'CRM Contacts CSV → JSON Converter',
    explanation:
      'Pre-loaded with a typical CRM lead export — names with embedded commas, international phone numbers, and ISO timestamps — so you can see how quoted fields survive the conversion intact. Paste your own export and every contact becomes a clean JSON object, processed entirely on your machine.',
    defaultCsv: [
      'Name,Email,Phone,CreatedAt',
      'Ada Lovelace,ada@example.com,+1-555-0101,2026-05-14T09:32:00Z',
      '"Smith, Jr., Robert",rob.smith@acme-corp.io,+1-555-0102,2026-05-15T11:20:00Z',
      'Grace Hopper,grace@example.mil,,2026-05-18T16:44:00Z',
      '"O\'Neil, Dana",dana.oneil@example.co.uk,+44 20 7946 0958,2026-06-01T08:05:00Z',
      'Jean Bartik,jean@example.com,+1-555-0107,2026-06-03T14:12:00Z',
      '"Tanaka, Yuki",yuki.tanaka@example.jp,+81 3-1234-5678,2026-06-21T19:58:00Z',
    ].join('\n'),
  },
  {
    slug: 'format-ecom-products-for-llm',
    metaTitle: 'Format E-commerce Product CSV for LLM Prompts — Token-Optimized JSON | SandboxMax',
    metaDescription:
      'Convert product inventory CSVs into compact, prompt-ready JSON. Minify and truncate long descriptions to cut token costs — free, instant, and fully client-side.',
    toolTitle: 'E-commerce Product Feed → LLM-Ready JSON',
    explanation:
      'Pre-loaded with inventory rows whose long marketing descriptions eat prompt-window space fast. Flip on the compression toggles to minify the structure and cap description length, and watch the payload shrink before you paste it into an AI prompt.',
    defaultCsv: [
      'SKU,Title,Price,Description',
      'KB-MECH-87,"Sandbox 87-Key Mechanical Keyboard",129.99,"Hot-swappable switches, PBT keycaps, and a gasket-mounted plate for a softer typing feel. USB-C wired plus tri-mode wireless, per-key RGB you can actually turn off, and a machined aluminum volume knob."',
      'MS-ERGO-01,"ErgoGlide Vertical Mouse",59.5,"A 62-degree vertical grip keeps your wrist neutral through long debugging sessions. Six programmable buttons, a 4000 DPI optical sensor, and silent switches your open-plan office will thank you for."',
      'MON-27-4K,"27-inch 4K Developer Monitor",449,"Factory-calibrated IPS panel with 98% DCI-P3 coverage, a 65W USB-C port that charges your laptop over the same cable, and a stand with real height, tilt, and pivot adjustment for portrait code reading."',
      'DSK-STND-02,"Bamboo Laptop Stand",34.95,"Solid bamboo riser that lifts your screen 18cm to eye level. Ventilated slats keep fan noise down during builds, and the rear cable channel keeps your desk photo-ready."',
      'HUB-USB4-7,"7-Port USB4 Hub",89,"Two USB4 40Gbps ports, three USB-A, HDMI 2.1 at 4K120, and gigabit ethernet in an anodized shell. Runs cool enough to leave buried under your monitor stand forever."',
    ].join('\n'),
  },
  {
    slug: 'minify-log-data-metrics',
    metaTitle: 'Minify CSV Log & Analytics Data to Compact JSON | SandboxMax',
    metaDescription:
      'Shrink messy analytics exports into minimal typed JSON — auto-detect numbers and booleans, strip whitespace, and measure the size savings. Free and 100% local.',
    toolTitle: 'Log & Metrics Data Minifier',
    explanation:
      'Pre-loaded with a deliberately messy analytics export: whitespace-padded numbers, an UPPERCASE boolean, empty cells, and a quoted event name containing a comma. Auto-detection cleans the types as it converts, and the compression stats show exactly how much structural fat gets trimmed.',
    defaultCsv: [
      'timestamp,event,duration_ms,success,user_id',
      '2026-07-01T08:00:01Z,page_view,132,true,u_991',
      '2026-07-01T08:00:04Z,api_call,88,true,u_991',
      '2026-07-01T08:00:09Z,"error,timeout",5023,false,u_204',
      '2026-07-01T08:00:12Z,page_view,,true,u_204',
      '2026-07-01T08:00:15Z,checkout, 1240 ,TRUE,u_512',
      '2026-07-01T08:00:22Z,api_call,97,false,',
      '2026-07-01T08:00:30Z,page_view,110,true,u_733',
    ].join('\n'),
  },
];
