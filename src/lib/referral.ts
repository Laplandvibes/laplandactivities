// Editorial referral tagging for outbound links to an operator's or authority's
// OWN website (Metsähallitus/Eräluvat, Fiskeridirektoratet, Tulli/Toll, the
// Teno fisheries area...). Appends UTM params at render time so the traffic we
// send is attributable, while the source data (the raw URLs) stays clean.
//
// This is an EDITORIAL referral, not a paid placement: callers keep their normal
// `rel` (no `sponsored`). Do NOT use it for
//   • affiliate CTAs           — those route through go.laplandvibes.com,
//   • GetYourGuide links       — the Worker owns their tracking,
//   • Bear Kuusamo links       — that paid partner has its own UTM spec,
//   • internal / ecosystem links — same network, nothing to attribute.
export function withReferral(url: string, campaign: string): string {
  try {
    const u = new URL(url)
    u.searchParams.set('utm_source', 'laplandvibes')
    u.searchParams.set('utm_medium', 'referral')
    u.searchParams.set('utm_campaign', campaign)
    return u.toString()
  } catch {
    return url
  }
}
