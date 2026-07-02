const stats = [
  { value: '4+ yrs', label: 'building products' },
  { value: '2', label: 'products from 0 to 1' },
  { value: 'Millions', label: 'events a day' },
  { value: '~80%', label: 'manual work automated' },
  { value: 'End to end', label: 'ownership' },
];

export default function CredibilityBar() {
  return (
    <div className="pt-8 space-y-3">
      <div
        className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm"
        style={{ color: '#5F6368' }}
      >
        {stats.map((stat, i) => (
          <span key={stat.label} className="flex items-center gap-3">
            <span>
              <span className="font-semibold" style={{ color: '#0B0D12' }}>
                {stat.value}
              </span>{' '}
              {stat.label}
            </span>
            {i < stats.length - 1 && (
              <span style={{ color: '#D1D5DB' }}>·</span>
            )}
          </span>
        ))}
      </div>
      <p className="text-xs" style={{ color: '#8A8F98' }}>
        Built in and around Techmonk, the Shopify ecosystem, and marketing
        SaaS.
      </p>
    </div>
  );
}
