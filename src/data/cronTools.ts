export interface CronTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  defaultCron: string;
}

export const cronTools: CronTool[] = [
  {
    slug: 'every-5-minutes-cron-expression',
    metaTitle: 'Every 5 Minutes Cron Expression — */5 * * * * Explained | SandboxMax',
    metaDescription:
      'The cron expression for every 5 minutes is */5 * * * *. See it translated to plain English, validated field by field, with your next 5 run times — free and client-side.',
    toolTitle: 'Every 5 Minutes Cron Expression',
    explanation:
      'The schedule you reach for when polling an API, flushing a queue, or running a health check: */5 in the minute field means "every minute divisible by 5", and the four wildcards leave hours, dates, months, and weekdays unrestricted. Edit any field below and the translation and timeline update instantly.',
    defaultCron: '*/5 * * * *',
  },
  {
    slug: 'midnight-every-sunday-cron-expression',
    metaTitle: 'Midnight Every Sunday Cron Expression — 0 0 * * 0 Explained | SandboxMax',
    metaDescription:
      'The cron expression for midnight every Sunday is 0 0 * * 0. Plain-English translation, field-by-field breakdown, and your next 5 execution dates — 100% in your browser.',
    toolTitle: 'Midnight Every Sunday Cron Expression',
    explanation:
      'The classic weekly maintenance slot: minute 0, hour 0, any date, any month, weekday 0 (Sunday — cron accepts both 0 and 7 for it). Perfect for weekly backups, digest emails, and log rotation. Swap the final 0 for MON-FRI or any day name to reshape the week.',
    defaultCron: '0 0 * * 0',
  },
  {
    slug: 'every-day-at-8am-cron-expression',
    metaTitle: 'Every Day at 8 AM Cron Expression — 0 8 * * * Explained | SandboxMax',
    metaDescription:
      'The cron expression for every day at 8 AM is 0 8 * * *. See it in plain English, validated field by field, with your next 5 run times — free and 100% client-side.',
    toolTitle: 'Every Day at 8 AM Cron Expression',
    explanation:
      'The morning-routine schedule: minute 0, hour 8, everything else unrestricted — your job fires at 08:00 every single day. The go-to shape for daily report generation, standup reminders, and sync jobs. Change the 8 to any hour (cron uses 24-hour time, so 8 PM is 20) to shift the slot.',
    defaultCron: '0 8 * * *',
  },
  {
    slug: 'monday-wednesday-friday-cron-expression',
    metaTitle: 'Monday Wednesday Friday Cron Expression — 0 9 * * 1,3,5 | SandboxMax',
    metaDescription:
      'Run a job every Monday, Wednesday, and Friday with 0 9 * * 1,3,5. Plain-English translation, per-field validation, and your next 5 runs — free in your browser.',
    toolTitle: 'Monday, Wednesday & Friday Cron Expression',
    explanation:
      'A comma-separated list in the day-of-week field picks exactly the days you want: 1,3,5 is Monday, Wednesday, Friday (cron counts from Sunday = 0). Shown here at 9 AM — the classic every-other-weekday cadence for batch syncs and team digests. MON,WED,FRI works too if you prefer names.',
    defaultCron: '0 9 * * 1,3,5',
  },
  {
    slug: 'weekend-cron-expression',
    metaTitle: 'Weekend Cron Expression (Saturday & Sunday) — 0 10 * * 6,0 | SandboxMax',
    metaDescription:
      'The cron expression for weekends is 0 10 * * 6,0 — Saturday and Sunday. See it translated, validated, and your next 5 weekend runs — 100% client-side and free.',
    toolTitle: 'Weekend Cron Expression (Saturday & Sunday)',
    explanation:
      'Weekends in cron are the two ends of the numeric week: 6 (Saturday) and 0 (Sunday), listed together in the day-of-week field. Shown here at 10 AM — the natural slot for weekend batch cleanups and off-peak maintenance that shouldn’t touch business days. SAT,SUN works too.',
    defaultCron: '0 10 * * 6,0',
  },
  {
    slug: 'midnight-every-day-cron-expression',
    metaTitle: 'Midnight Every Day Cron Expression — 0 0 * * * Explained | SandboxMax',
    metaDescription:
      'The cron expression for midnight every day is 0 0 * * * (same as @daily). Plain-English breakdown and your next 5 execution times — free, instant, in your browser.',
    toolTitle: 'Midnight Every Day Cron Expression',
    explanation:
      'The most-typed schedule in cron history: minute 0 of hour 0, every day — the standard slot for nightly backups, log rotation, and cache resets. It’s exactly what the @daily alias expands to. One caution: half the internet runs jobs at 00:00, so shifting a few minutes (7 0 * * *) can dodge the thundering herd.',
    defaultCron: '0 0 * * *',
  },
  {
    slug: 'twice-a-day-cron-expression',
    metaTitle: 'Twice a Day Cron Expression — 0 9,18 * * * Explained | SandboxMax',
    metaDescription:
      'Run a job twice daily with 0 9,18 * * * — 9 AM and 6 PM. See the comma-separated hour list explained and your next 5 run times, validated free in your browser.',
    toolTitle: 'Twice a Day Cron Expression',
    explanation:
      'A comma-separated list in the hour field fires the job at two exact times: 09:00 and 18:00, every day. This is the pattern behind morning/evening report runs and open/close-of-business tasks — extend the list (9,13,18) or combine with MON-FRI to skip weekends.',
    defaultCron: '0 9,18 * * *',
  },
];
