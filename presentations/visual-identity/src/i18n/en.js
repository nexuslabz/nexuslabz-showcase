export default {
  cover: {
    title: 'Visual Identity Manual',
    subtitle: 'Logo, Colors, Typography & Usage Guidelines',
    hint: 'Use arrow keys or scroll to navigate →',
  },
  toc: {
    tag: 'Index',
    title: 'Table of Contents',
    items: [
      { title: 'Logo Specifics', desc: 'Primary logo & emblem' },
      { title: 'Logo Versions', desc: 'Stacked, horizontal, compact & emblem' },
      { title: 'Logo Backgrounds', desc: 'Approved background usage' },
      { title: 'Clear Space & Sizing', desc: 'Spacing rules & minimums' },
      { title: 'Logo Best Practices', desc: "Do's & Don'ts" },
      { title: 'Color Palette', desc: 'HEX, RGB & CMYK specs' },
      { title: 'Typography', desc: 'Typeface, weights & hierarchy' },
    ],
  },
  logoPrimary: {
    tag: '01 — Logo Specifics',
    title: 'Primary Logo',
    desc: 'The Nexus Labz logo consists of two elements: the {emblem} (a faceted gem shape representing connection and precision) and the {wordmark} (NEXUS LABZ). Together they form the primary logo.',
    layouts:
      'The logo is available in {count} layouts: stacked (primary), horizontal, horizontal compact, and emblem only — each in white and grey versions.',
    emblem: 'Emblem',
    wordmark: 'Wordmark',
    count: '4',
  },
  logoVersions: {
    tag: '02 — Logo Versions',
    title: 'All Variants',
    groups: [
      { label: 'Stacked', desc: 'Primary usage — presentations, covers, social media' },
      { label: 'Horizontal', desc: 'Headers, navigation bars, documents' },
      { label: 'Horizontal Compact', desc: 'Constrained spaces, email signatures, badges' },
      { label: 'Emblem Only', desc: 'Favicons, avatars, app icons, watermarks' },
    ],
    white: 'White',
    grey: 'Grey',
  },
  logoBackgrounds: {
    tag: '03 — Backgrounds',
    title: 'Approved Backgrounds',
    labels: [
      'Nexus Grey',
      'Dark Tones',
      'White / Light',
      'Light Grey',
      'Gold Accent',
      'Busy / Pattern',
    ],
  },
  logoClearSpace: {
    tag: '04 — Spacing',
    title: 'Clear Space & Minimum Sizes',
    clearSpaceTitle: 'Clear Space',
    clearSpaceDesc:
      'Always maintain a minimum clear space around the logo equal to the height of the {n} in NEXUS. No other graphic elements, text, or borders should enter this area. This rule applies to all logo layouts.',
    minSizesTitle: 'Minimum Sizes',
    minSizesDesc:
      'Below these dimensions the logo loses legibility. For very small applications, use the emblem only.',
    sizes: [
      { label: 'Stacked', value: 'Min width: 120px / 30mm' },
      { label: 'Horizontal', value: 'Min width: 160px / 40mm' },
      { label: 'Horizontal Compact', value: 'Min width: 100px / 25mm' },
      { label: 'Emblem Only', value: 'Min size: 24px / 6mm' },
    ],
  },
  logoUsage: {
    tag: '05 — Best Practices',
    title: "Do's & Don'ts",
    correctTitle: 'Correct Usage',
    incorrectTitle: 'Incorrect Usage',
    correct: [
      'Use the white logo on dark backgrounds',
      'Use the Nexus Grey logo on light backgrounds',
      'Use the emblem alone for small applications',
      'Maintain the defined clear space around the logo',
    ],
    incorrect: [
      'Do not stretch, rotate, or distort the logo',
      'Do not change the logo colors',
      'Do not add effects (shadows, outlines, gradients)',
      'Do not place the logo on busy or low-contrast backgrounds',
    ],
  },
  colors: {
    tag: '06 — Colors',
    title: 'Brand Colors',
    items: [
      { name: 'Nexus Grey', usage: 'Primary backgrounds, base elements' },
      { name: 'Neon Gold', usage: 'Highlights, CTAs, links, accents' },
      { name: 'Pure White', usage: 'Titles, body text, icons on dark' },
    ],
  },
  typography: {
    tag: '07 — Typography',
    desc: 'Inter is the official typeface of Nexus Labz. It offers excellent readability at all sizes and a modern, clean aesthetic across digital and print.',
    weightsTitle: 'Weights',
    hierarchyTitle: 'Hierarchy',
  },
  cta: {
    title: 'Shall We Build the Future Together?',
    desc: 'Nexus Labz is ready to turn your vision into reality.',
  },
};
